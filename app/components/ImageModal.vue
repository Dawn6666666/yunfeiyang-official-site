<template>
  <Transition name="modal">
    <div v-if="isOpen" class="image-modal" @click="close">
      <div class="image-modal__content" @click.stop>
        <button class="image-modal__close" @click="close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img :src="src" :alt="alt" class="image-modal__img" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  src: string
  alt?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>

<style scoped>
.image-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(5px);
}

.image-modal__content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.image-modal__img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.image-modal__close {
  position: absolute;
  top: -40px;
  right: -10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.image-modal__close:hover {
  opacity: 1;
}

.image-modal__close svg {
  width: 24px;
  height: 24px;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .image-modal__content,
.modal-leave-active .image-modal__content {
  transition: transform 0.3s var(--ease-out-back);
}

.modal-enter-from .image-modal__content,
.modal-leave-to .image-modal__content {
  transform: scale(0.95);
}
</style>
