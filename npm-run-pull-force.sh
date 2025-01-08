# ------------------------------------------------------------------
# Licence MIT
#
# Copyright (c) 2025 Ryan DECIAN
#
# Permission est accordée, gratuitement, à toute personne obtenant
# une copie de ce logiciel et des fichiers de documentation associés
# (le "Logiciel"), de commercialiser le Logiciel sans restriction,
# y compris, sans limitation, les droits d'utiliser, copier, modifier,
# fusionner, publier, distribuer, sous-licencier et/ou vendre
# des copies du Logiciel, et de permettre aux personnes à qui le
# Logiciel est fourni de le faire, sous réserve des conditions
# suivantes :
#
# La mention de copyright ci-dessus et la présente autorisation
# doivent être incluses dans toutes les copies ou parties substantielles
# du Logiciel.
#
# LE LOGICIEL EST FOURNI "EN L'ÉTAT", SANS GARANTIE D'AUCUNE SORTE,
# EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER LES GARANTIES
# DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE
# DE CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU TITULAIRES DU COPYRIGHT
# NE PEUVENT ÊTRE TENUS POUR RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGE
# OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D'UNE ACTION EN
# RESPONSABILITÉ CONTRACTUELLE, DÉLICTUELLE OU AUTRE, DÉCOULANT DE,
# HORS OU EN RELATION AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES
# TRAITEMENTS DU LOGICIEL.
# ------------------------------------------------------------------


#!/bin/bash

# Version du script
echo -e "\033[1;35mVersion du script V6.2.2\033[0m"
echo -e "\033[35mLicense - Copyright (c) 2025 Ryan DECIAN\033[0m"
echo ""
echo ""
echo -e "\033[35mDébut d'exécution du script\033[0m"
echo ""

# Vérification agent SSH
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

# Vérification du dépôt Git et branche actuelle
echo -e "\033[1;36m📂 Vérification du dépôt Git\033[0m"
echo -e
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "❌ Erreur : ce répertoire n'est pas un dépôt Git."
  exit 1
fi

echo -e "\033[36m🌿 Vérification de la branche actuelle\033[0m"
current_branch=$(git branch --show-current)

if [ -z "$current_branch" ]; then
  echo "❌ Erreur : aucune branche active. Assurez-vous d'être sur une branche avant d'exécuter ce script."
  exit 1
fi

echo -e "\033[36m🌿 Récupération de la branche actuelle\033[0m"
echo -e "\033[36m🌿 Branche actuelle : $current_branch\033[0m"
echo ""

# Mise à jour des branches distantes et nettoyage des références obsolètes
git fetch --all --prune

# Liste des branches locales et distantes
local_branches=$(git branch --format='%(refname:short)')
remote_branches=$(git branch -r --format='%(refname:short)' | sed 's#origin/##')

# Initialiser des listes pour les branches supprimées, fichiers mis à jour et fichiers ignorés
deleted_branches=()
updated_files=()
ignored_files=()

# Suppression des branches locales obsolètes
for branch in $local_branches; do
    if [ "$branch" == "$current_branch" ]; then
        continue
    fi
    if ! echo "$remote_branches" | grep -q "^$branch$"; then
        echo "🔴 La branche locale '$branch' n'existe plus sur le dépôt distant. Suppression locale..."
        git branch -d "$branch"
        deleted_branches+=("$branch")
    fi
done

# Mise à jour des branches locales en utilisant git pull origin nom_de_la_branche
for branch in $remote_branches; do
    echo -e "\033[33m🚀 Passage à la branche : $branch\033[0m"
    
    # Vérifie si la branche locale existe, sinon la crée
    if ! git show-ref --verify --quiet refs/heads/$branch; then
        git checkout -b $branch origin/$branch
    else
        git checkout $branch
    fi

    # Faire un git pull origin nom_de_la_branche
    echo -e "\033[36m🔄 Mise à jour avec 'git pull origin $branch'\033[0m"
    pull_output=$(git pull origin $branch 2>&1)
    
    if echo "$pull_output" | grep -q "Already up to date"; then
        echo -e "\033[34m🔵 Ignoré, pas de modification trouvée pour la branche : $branch\033[0m"
        ignored_files+=("$branch")
    else
        echo -e "\033[32m✅ Mise à jour effectuée pour : $branch\033[0m"
        updated_files+=("$branch")
    fi
done

# Retourner à la branche initiale
git checkout "$current_branch"
echo -e "\033[34m🔄 Retour à la branche initiale : $current_branch\033[0m"

# Afficher la liste des branches supprimées
if [ ${#deleted_branches[@]} -gt 0 ]; then
    echo -e "\n\033[31m🚫 Branches locales supprimées :\033[0m"
    for branch in "${deleted_branches[@]}"; do
        echo "  - $branch"
    done
else
    echo -e "\n\033[32m✅ Aucune branche locale supprimée.\033[0m"
fi

# Afficher la liste des branches mises à jour
if [ ${#updated_files[@]} -gt 0 ]; then
    echo -e "\n\033[32m✅ Branches mises à jour :\033[0m"
    for branch in "${updated_files[@]}"; do
        echo "  - $branch"
    done
else
    echo -e "\n\033[34m🔵 Aucune branche mise à jour.\033[0m"
fi

# Afficher la liste des branches ignorées (aucune modification trouvée)
if [ ${#ignored_files[@]} -gt 0 ]; then
    echo -e "\n\033[34m🔵 Branches ignorées (aucune modification) :\033[0m"
    for branch in "${ignored_files[@]}"; do
        echo "  - $branch"
    done
else
    echo -e "\n\033[32m✅ Aucune branche ignorée.\033[0m"
fi

echo -e "\033[32m🚀 Script terminé avec succès !\033[0m"
