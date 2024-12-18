#Attention, pour lancer cette commande il faudra : 

#Lancer la commande suivante dans le terminal git :
# chmod +x git-commit.sh
#Copier coller cette ligne dans package.json dans script :
# "commit": "bash ./git-commit.sh"
#Copier coller cette commande dans le terminal :
# nano ~/.ssh/config
#Copier coller ce code dans le ficher : 
# Host *
#  AddKeysToAgent yes
#  IdentityFile ~/.ssh/id_ed25519
#Exécution de cette commande avec :
# npm run commit

#!/bin/bash

# Emplacement du fichier pour stocker les informations de l'agent
SSH_ENV="$HOME/.ssh-agent.env"

# Fonction pour démarrer un nouvel agent SSH
start_agent() {
    echo "🔑 Démarrage d'un nouvel agent SSH..."
    eval "$(ssh-agent -s)" > "$SSH_ENV"
    echo "export SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$SSH_ENV"
    echo "export SSH_AGENT_PID=$SSH_AGENT_PID" >> "$SSH_ENV"
    ssh-add ~/.ssh/id_ed25519 > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "🔐 Clé SSH ajoutée avec succès : ~/.ssh/id_ed25519"
    else
        echo "❌ Échec lors de l'ajout de la clé SSH : ~/.ssh/id_ed25519"
    fi
}

# Recharger ou démarrer l'agent SSH
if [ -f "$SSH_ENV" ]; then
    source "$SSH_ENV" > /dev/null
    if ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
        start_agent
    fi
else
    start_agent
fi

# Affiche l'état actuel du dépôt
git status

# Demande le message de commit
read -p "Entrez votre message de commit : " msg

# Récupère les fichiers modifiés, nouveaux et supprimés
files=$(git ls-files --modified --deleted --others --exclude-standard)

# Vérifie s'il y a des fichiers à ajouter
if [ -z "$files" ]; then
    echo "❌ Aucun fichier modifié, supprimé ou nouveau fichier à ajouter. Commit annulé."
    exit 1
fi

# Ajoute les fichiers modifiés, nouveaux et supprimés
git add -A

# Crée un fichier temporaire pour le message de commit
echo "$msg" > .gitmessage.txt

# Effectue le commit
git commit -F .gitmessage.txt

# Supprime le fichier temporaire
rm .gitmessage.txt

# Récupère le nom de la branche actuelle
branch=$(git rev-parse --abbrev-ref HEAD)

# Pousse sur la branche courante
git push origin "$branch" || { echo "❌ Erreur : Push échoué."; exit 1; }
echo "✅ Commit réussi, envoi sur la branche '$branch'..."
