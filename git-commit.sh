#Attention, pour lancer cette commande il faudra : 

#Lancer la commande suivante dans le terminal git :
# chmod +x git-commit.sh
#Copier coller cette ligne dans package.json dans script :
# "commit": "bash ./git-commit.sh"
#Exécution de cette commande avec :
# npm run commit

#!/bin/bash

# Vérifie si un agent SSH est déjà actif
if [ -z "$SSH_AGENT_PID" ] || ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
  # Vérifie s'il existe un fichier d'environnement d'agent SSH actif
  if [ -f ~/.ssh-agent ]; then
    echo "🔑 Connexion à l'agent SSH existant..."
    source ~/.ssh-agent > /dev/null
    if ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
      echo "🔑 L'agent SSH trouvé est inactif. Démarrage d'un nouvel agent..."
      eval "$(ssh-agent -s)" > ~/.ssh-agent
    fi
  else
    echo "🔑 Aucun agent SSH actif. Démarrage d'un nouvel agent SSH..."
    eval "$(ssh-agent -s)" > ~/.ssh-agent
  fi
fi

# Ajoute les clés SSH détectées automatiquement
ssh_keys=$(find ~/.ssh -type f -name "id_*" ! -name "*.pub")
if [ -n "$ssh_keys" ]; then
  for key in $ssh_keys; do
    ssh-add "$key" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
      echo "🔐 Clé SSH ajoutée avec succès : $key"
    else
      echo "❌ Échec lors de l'ajout de la clé SSH : $key"
    fi
  done
else
  echo "❌ Aucune clé SSH trouvée dans ~/.ssh. Veuillez en créer une avant de continuer."
  exit 1
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

