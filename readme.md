# PROJECT: BECOME A HERO
## Ce qui a fonctionné
1. L'utilisation dès le début d'un template bootstrap : "Jumbotron" nous a permis de gagner du temps pour la mise en place de nos éléments.
2. L'utilisation de Git/GitHub a bien mieux fonctionné que dans le premier projet (meilleure maîtrise)

## Ce qui a posé problème

__Problème :__
Le deploiement sur serveur GitHub pour `gh-pages` ne fonctionnait pas à cause du lien dans index.html

__solution :__
Injection du bon lien de base en fonction de l'emplacement où l'on se situe sur le projet construit ou non construit (donc pour le deploy)

`Projet non construit : "/"`

`Projet construit : "/projet-demo/"`
___

__Problème :__
Le déploiement des "étoiles" ainsi que du logo "Home"

__solution :__
Copie du dossier "fonts" de bootrap dans le répertoire "/src" du projet

___
__Problème :__
Enregistrement multiples de la même instance dans le "local storage"

__solution :__
Vérifie à l'aide d'un "toggle" si la liste des favoris contient déjà le film avant l'ajout

___
__Problème :__
La compréhension de comment réagir face à un conflit (merge)

__solution :__
Effectuer la validation des fichiers modifiés en local en commitant avec la commande :
`$ git  commit -m "Message commit"`
    
Récupérer sur serveur "GitHub" les fichiers avec la commande : `$ git pull`

Adapter les fichiers en conflit (en prenant les modifications des deux)

Effectuer la validation des fichiers modifiés (du merge) en local en commitant avec la commande :
`$ git  commit -m "Message commit merge"`

Pousser sur serveur "GitHub" les fichiers avec la commande : `$ git push -u origin master` Vérification si l'on est bien à jour : `$ git pull`

La commande ci-dessus devrait afficher : Already up-to-date.

___
__Problème :__
La gestion du temps, ne pas vouloir en faire trop

__solution :__
Réalisé 2x par jours des "STAND-UP MEETINGS" pour savoir l'avancement du projet, les problèmes etc.. (Whatsapp et discussion en classe)


## Principales leçons apprises
1. Utilisation d'outils d'automatisation permettant de se simplifier la vie de tous les jours :
    - Bower, npm, gulp, yeoman etc..
2. Utilisation d'outils de versionning "git"
3. Utlisation de platforme de partage "gitHub"
4. Découvertes de nouveaux éditeurs de code "Atom, Visual Studio Code, webStorm"Injection du bon lien de base en fonction de si on se situe sur le projet construit ou non construit (donc pour le deploy)

_Jonathan Charlet, Mathias Meier_