 Créer une liste déroulante contenant les extensions listées dans le tableau ci-dessous :

 ```html
<select>
  <option></option>
</select>   
 ```

    ```typescript
    const extensions: string[] = ['tv', 'biz', 'io', 'me'];
    ```

Lorsque l'utilisateur sélectionne une extension, seuls les utilisateurs dont l'adresse email se termine par cette extension seront affichés.