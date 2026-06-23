Développez un composant ConfirmDialog.vue réutilisable permettant d'afficher une boîte de dialogue de confirmation.

Le composant doit :

* Accepter une prop open indiquant si la boîte de dialogue est visible ou non.
* Afficher un titre via un slot nommé header.
* Afficher un message de confirmation via le slot par défaut.
* Afficher deux boutons :
  * Annuler
  * Confirmer
* Émettre un événement cancel lors du clic sur le bouton Annuler.
* Émettre un événement confirm lors du clic sur le bouton Confirmer.
* Pouvoir être fermé par le composant parent lorsque l'utilisateur annule ou confirme l'action.

Exemple d'utilisation attendue :

<ConfirmDialog
  :open="showDialog"
  @cancel="showDialog = false"
  @confirm="deleteUser"
>
  <template #header>
    <h2>Supprimer l'utilisateur ?</h2>
  </template>

  <p>Cette action est irréversible.</p>
</ConfirmDialog>

Voici le style :



<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 320px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>

