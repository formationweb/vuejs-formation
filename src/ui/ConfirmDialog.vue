<template>
    <div v-if="open" class="overlay">
        <div class="dialog">
            <slot name="header">Confirmation</slot>
            <slot></slot>
            <div class="dialog-footer">
                <button @click="emits('cancel')">Annuler</button>
                <button @click="emits('confirm')">Confirmer</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    open: boolean
}>()

const emits = defineEmits<{
    cancel: [void]
    confirm: [void]
}>()
</script>


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

