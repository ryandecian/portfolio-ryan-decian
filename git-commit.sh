#Attention, pour lancer cette commande il faudra : 

#Lancer la commande suivante dans le terminal git :
# chmod +x git-commit.sh
#Copier coller cette ligne dans package.json dans script :
# "commit": "bash ./git-commit.sh"
#Exécution de cette commande avec :
# npm run commit

#!/bin/bash

# Vérifie si un agent SSH est actif en vérifiant SSH_AGENT_PID
if [ -z "$SSH_AGENT_PID" ] || ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
  echo "🔑 Aucun agent SSH actif, démarrage d'un agent SSH..."
  eval "$(ssh-agent -s)" > /dev/null
  ssh-add ~/.ssh/id_ed25519 > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    echo "🔐 Clé SSH ajoutée avec succès."
  else
    echo "❌ Échec lors de l'ajout de la clé SSH. Assurez-vous que votre clé existe et qu'elle est protégée par une phrase secrète."
    exit 1
  fi
else
  echo "✅ Agent SSH déjà actif."
fi

#------------------------------------------------------

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
