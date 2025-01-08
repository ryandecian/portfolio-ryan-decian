#!/bin/bash

# Étape 3 : Vérification agent SSH
echo -e "\033[36m🔍 Vérification si un agent SSH est actif\033[0m"
echo ""
SSH_ENV="$HOME/.ssh-agent.env"

# Fonction pour démarrer un nouvel agent SSH
start_agent() {
    echo ""
    echo "🔑 Démarrage d'un nouvel agent SSH..."
    echo ""
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
echo -e "\033[36m🔄 Recharger ou démarrer l'agent SSH\033[0m"
echo ""
if [ -f "$SSH_ENV" ]; then
    source "$SSH_ENV" > /dev/null
    if ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
        start_agent
    fi
else
    start_agent
fi
echo -e "\033[34m✅ Traitement agent SSH terminé\033[0m"
echo ""

# Étape 1 : Obtenir la branche actuelle
current_branch=$(git branch --show-current)

# Vérifier si on est dans un dépôt Git
if [ -z "$current_branch" ]; then
  echo "❌ Erreur : vous n'êtes pas dans un dépôt Git ou aucune branche n'est actuellement active."
  exit 1
fi

echo -e "\033[32mBranche actuelle : $current_branch\033[0m"
echo ""

# Étape 2 : Récupérer toutes les nouvelles branches distantes
echo -e "\033[36m🔄 Récupération des nouvelles branches distantes...\033[0m"
git fetch --all --prune
echo ""

# Étape 3 : Synchroniser les branches locales avec les branches distantes
branches=$(git branch -r | grep -v '\->' | sed 's/origin\///')

echo -e "\033[36m🔎 Branches trouvées sur le dépôt distant :\033[0m"
for remote_branch in $branches; do
  if ! git branch --list | grep -q "$remote_branch"; then
    echo "🆕 Création de la branche locale pour '$remote_branch'..."
    git checkout -b "$remote_branch" "origin/$remote_branch"
  fi
done
echo ""

# Mise à jour de toutes les branches locales
for branch in $(git branch | sed 's/* //'); do
  echo -e "\033[33m🔄 Passage à la branche : $branch\033[0m"
  git checkout $branch
  UPSTREAM=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null)
  if [ $? -eq 0 ]; then
    echo "📥 Mise à jour de la branche '$branch' avec '$UPSTREAM'..."
    git pull
  else
    echo "⚠️  Pas de branche distante pour '$branch'. Ignorée."
  fi
  echo ""
done

# Étape 4 : Revenir à la branche initiale
git checkout $current_branch
echo -e "\033[32m✅ Retour sur la branche initiale : $current_branch\033[0m"
