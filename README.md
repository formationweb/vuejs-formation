Ajoutez un champ de texte où l'utilisateur peut entrer un numéro correspondant à l'index d'une carte utilisateur dans la liste. Lorsqu'un bouton "Scroll to User" est cliqué, l'application doit faire défiler en douceur la liste pour amener la carte utilisateur spécifiée au centre de la vue. 

Utilisez ref="" pour accéder aux éléments DOM des cartes utilisateurs et implémentez la fonctionnalité de défilement en utilisant l'API DOM scrollIntoView. Assurez-vous de gérer les entrées invalides (par exemple, des index hors de portée) en affichant un message d'erreur approprié.


> Aide: Scroller: Element.scrollIntoView({ behavior: 'smooth', block: 'center' });