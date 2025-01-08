#!/bin/bash

# Étape 1 : Obtenir la branche actuelle
current_branch=$(git branch --show-current)

# Vérifier si on est dans un dépôt Git
if [ -z "$current_branch" ]; then
  echo "Erreur : vous n'êtes pas dans un dépôt Git ou aucune branche n'est actuellement active."
  exit 1
fi

echo "Branche actuelle : $current_branch"

# Étape 2 : Mettre à jour toutes les branches locales
for branch in $(git branch | sed 's/* //'); do
  git checkout $branch
  UPSTREAM=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null)
  if [ $? -eq 0 ]; then
    echo "Mise à jour de la branche '$branch' avec '$UPSTREAM'..."
    git pull
  else
    echo "Pas de branche distante pour '$branch'. Ignorée."
  fi
done

# Étape 3 : Revenir à la branche initiale
git checkout $current_branch
echo "Retour sur la branche initiale : $current_branch"
