Créer un composant de Loader

Créer un composant dans src/atomics/Loader.vue

On devra l’utiliser de cette manière:

<Loader :loading="true">

    Ici, la liste des utilisateurs

</Loader>

Si loading vaut true, afficher un loader avec PicoCSS (https://picocss.com/docs/loading)

Sinon, ça affiche le contenu