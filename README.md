# Formulaire de modification d'un utilisateur 

1. Récupération de l'utilisateur : À partir de l'identifiant, effectuer une requête pour obtenir les informations de l'utilisateur et les stocker dans Pinia sous la propriété `userModifying`.
 Affichage de l'utilisateur : Utiliser le nom de l'utilisateur récupéré pour afficher un titre.

<h1> Nom de l'utilisateur ici </h1>

2. Formulaire de modification : Créer deux champs préremplis pour les propriétés name, et email, permettant à l'utilisateur de modifier ces informations.
   
3. Gestion des modifications : Après soumission du formulaire, envoyer une requête PUT via axios pour appliquer les changements.