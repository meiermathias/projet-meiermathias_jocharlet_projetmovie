# PROJECT: BECOME A HERO
## Ce qui a fonctionné
1. L'utilisation dès le début d'un template bootstrap : "Jumbotron" nous a permis de gagner du temps pour la mise en place de nos éléments.
2. L'utilisation de Git/GitHub a bien mieux fonctionnné que dans le premier projet (meilleur maitrise)
## Ce qui a posé problème
1. Le deploiement sur serveur GitHub pour gh-pages ne fonctionnait pas à cause du lien dans index.html
2. Le déploiement des "étoiles" ainsi que du logo "Home"
3. Enregistrement multiples de la même instance dans le "local storage"
4. La compréhension de comment régir face à un conflit (merge)
5. La gestion du temps, ne pas vouloir en faire trop
## Ce qui a été résolu
1. Injection du bon lien de base en fonction de si on se situe sur le projet consrtuit ou non construit (donc pour le deploy)

    `Projet non construit : "/"`
    
    `Projet construit : "/projet-demo/"`

4. Effectuer la validation des fichiers modifié en local des deux côtés en commitant avec la commande :
`$ git  commit -m "Message commit"`
    
    Pousser sur serveur "GitHub" les fichiers avec la commande : `$ git push -u origin master`

    Récupérer sur serveur "GitHub" les fichiers avec la commande : `$ git pull`
    
    Adapter les fichiers en conflit (en prennant les modifications des deux)
    
    Effectuer la validation des fichiers modifié (du merge) en local en commitant avec la commande :
`$ git  commit -m "Message commit merge"`
5. Réalisé 2,3x par jours des "STAND-UP MEETINGS" pour savoir l'avancement du projet les problèmes etc..

## Principales leçons apprises
1. Réutilisation de fonction en utilisant les "services"
2. Création de son propre filtre
3. Utilisation de filtres
4. Un controller pour chaque vue