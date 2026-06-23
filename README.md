Instructions

1. Créer un composant avec :
  * une barre de type range :

<input
  type="range"
  min="0"
  max="1"
  step="0.01"
  @input="..."
/>


  * une div affichant la couleur avec l’opacité actuelle
1. Lorsqu’on modifie la valeur du range :
  * la couleur de la div change selon la nouvelle opacité,
  * le composant émet cette nouvelle valeur.

---

Entrées / Sortie

Entrées :

* opacity : nombre (valeur initiale de l’opacité, entre 0 et 1)
* color : chaîne (couleur de base, ex. "black")

Sortie :

* change : émet la nouvelle valeur d’opacité à chaque modification

---

Aide (style de base)

div {
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 1;
}