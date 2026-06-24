Supprimer un utilisateur


Avoir un bouton pour supprimer un utilisateur. Comment actualiser l'interface après la suppression ?


Aide

>Utiliser filter() pour supprimer l’utilisateur du tableau

>UserCard ne doit pas avoir d’injection de dépendances. Donc l’action (l’appel de la requête) doit être effectuée dans Users
>Pour supprimer avec axios: axios.delete(url: string): Promise<void> (url doit être : base url + / + id)