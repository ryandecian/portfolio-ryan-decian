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


# Cette commande permet de mettre a jour toutes les branches
# d'un projet et de supprimer les branches obsolètes qui ont
# été supprimées de GitHub


# Cette version n'est compatible que sur Windows et Visual Studio Code


# Configuration pour rendre ce script exécutable : 
# Il faut ouvrir le logiciel Visual Code Studio en administrateur puis
# Copier coller les commandes entre les pointillés dans votre terminal bash : 

: <<EOF
---------------------------------------------------------------------------------------------

# Enregistrer le chemin actuel
initial_path=$(pwd)

# Chemin cible pour le dossier Script
target_path="/c/Program Files/Git/usr/bin/Script"

# Chemin du fichier à déplacer (depuis la racine du projet React)
file_to_move="./git-commit"

# Vérifier si le dossier existe
if [ ! -d "$target_path" ]; then
    echo "📂 Le dossier 'Script' n'existe pas. Création en cours..."
    mkdir -p "$target_path"
    echo "✅ Dossier 'Script' créé avec succès."
else
    echo "✔️ Le dossier 'Script' existe déjà."
fi

# Vérifier si le fichier git-commit existe à la racine du projet
if [ -f "$file_to_move" ]; then
    echo "📄 Le fichier 'git-commit' existe. Déplacement en cours..."
    mv "$file_to_move" "$target_path"
    echo "✅ Fichier 'git-commit' déplacé vers : $target_path"
else
    echo "❌ Le fichier 'git-commit' n'a pas été trouvé à la racine du projet."
    exit 1
fi

# Se déplacer dans le dossier cible
cd "$target_path" || { echo "❌ Échec lors de la navigation vers $target_path"; exit 1; }
echo "📂 Vous êtes maintenant dans : $(pwd)"

# Rendre le fichier git-commit exécutable
chmod +x git-commit
echo "✅ Le fichier 'git-commit' est maintenant exécutable."

# Vérifier et ajouter la ligne PATH dans ~/.bashrc si elle n'existe pas
bashrc_file="$HOME/.bashrc"
path_line='export PATH=$PATH:/usr/bin/Script'

if ! grep -Fxq "$path_line" "$bashrc_file"; then
    echo "🔧 La ligne PATH n'existe pas dans ~/.bashrc. Ajout en cours..."
    echo "$path_line" >> "$bashrc_file"
    echo "✅ Ligne ajoutée à ~/.bashrc : $path_line"
else
    echo "✔️ La ligne PATH existe déjà dans ~/.bashrc."
fi

# Charger le fichier .bashrc pour appliquer les changements immédiatement
source "$bashrc_file"
echo "🔄 Fichier ~/.bashrc rechargé pour appliquer les changements."

# Retourner au chemin initial
cd "$initial_path" || { echo "❌ Échec lors de la navigation vers $initial_path"; exit 1; }
echo "📂 Retour au chemin initial : $(pwd)"

echo "🚀 Script terminé avec succès."


---------------------------------------------------------------------------------------------
EOF

# Pour lancer cette commande : 
# git-commit


#!/bin/bash

# Version du script
echo -e "\033[1;35mVersion du script V1.1.1\033[0m"
echo ""
echo ""
echo -e "\033[35mDébut d'exécution du script\033[0m"
echo ""

#!/bin/bash

#!/bin/bash

# Emplacement du fichier pour stocker les informations de l'agent
SSH_ENV="$HOME/.ssh-agent.env"
NAS_USER="Ryan DECIAN"
NAS_HOST="decian.ddnsfree.com"
NAS_PORT="44218"
SSH_KEY="$HOME/.ssh/id_ed25519"  # Remplace par ta clé privée si différente

# Fonction pour démarrer un nouvel agent SSH
start_agent() {
    echo -e "\033[36m🔑 Démarrage d'un nouvel agent SSH...\033[0m"
    echo ""
    eval "$(ssh-agent -s)" > "$SSH_ENV"
    echo "export SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$SSH_ENV"
    echo "export SSH_AGENT_PID=$SSH_AGENT_PID" >> "$SSH_ENV"
    ssh-add "$SSH_KEY" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo -e "\033[32m🔐 Clé SSH ajoutée avec succès : $SSH_KEY\033[0m"
    else
        echo -e "\033[31m❌ Échec lors de l'ajout de la clé SSH : $SSH_KEY\033[0m"
        exit 1
    fi
}

# Vérification ou démarrage de l'agent SSH
echo -e "\033[36m🔄 Vérification ou démarrage de l'agent SSH\033[0m"
echo ""
if [ -f "$SSH_ENV" ]; then
    source "$SSH_ENV" > /dev/null
    if ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
        echo -e "\033[33m⚠️  L'agent SSH n'est plus actif. Démarrage d'un nouvel agent...\033[0m"
        start_agent
    else
        echo -e "\033[32m✅ Un agent SSH actif a été détecté.\033[0m"
        # Vérifie si la clé est déjà ajoutée
        ssh-add -l | grep "$(cat "$SSH_KEY.pub")" > /dev/null 2>&1
        if [ $? -ne 0 ]; then
            echo -e "\033[33m⚠️  La clé SSH n'est pas ajoutée. Ajout de la clé...\033[0m"
            ssh-add "$SSH_KEY" > /dev/null 2>&1
            if [ $? -eq 0 ]; then
                echo -e "\033[32m🔐 Clé SSH ajoutée avec succès : $SSH_KEY\033[0m"
            else
                echo -e "\033[31m❌ Échec lors de l'ajout de la clé SSH : $SSH_KEY\033[0m"
                exit 1
            fi
        else
            echo -e "\033[32m🔐 La clé SSH est déjà ajoutée à l'agent.\033[0m"
        fi
    fi
else
    echo -e "\033[33m⚠️  Aucun fichier d'agent SSH trouvé. Démarrage d'un nouvel agent...\033[0m"
    start_agent
fi

# Connexion au NAS
echo -e "\033[36m🌐 Connexion à votre NAS Synology en SSH...\033[0m"
ssh -p "$NAS_PORT" "$NAS_USER@$NAS_HOST"
if [ $? -eq 0 ]; then
    echo -e "\033[32m🚀 Connexion SSH réussie.\033[0m"
else
    echo -e "\033[31m❌ Échec de la connexion SSH.\033[0m"
fi
