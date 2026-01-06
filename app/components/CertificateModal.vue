<template>
  <div class="cert-modal" role="dialog" aria-modal="true" @keydown.esc="$emit('close')">
    <div class="cert-modal__backdrop" @click="$emit('close')"></div>
    
    <div class="cert-modal__content" tabindex="0" ref="modalContent">
      <button class="cert-modal__close" @click="$emit('close')" aria-label="Close modal">
        &times;
      </button>
      
      <div class="cert-modal__body">
        <div class="cert-modal__image-wrapper">
          <img :src="cert.image" :alt="cert.title" class="cert-modal__image" />
        </div>
        
        <div class="cert-modal__info">
          <div class="cert-modal__header">
            <span class="cert-modal__tag">{{ cert.year }}</span>
            <span class="cert-modal__tag">{{ cert.award }}</span>
          </div>
          <h3 class="cert-modal__title">{{ cert.title }}</h3>
          <p class="cert-modal__desc">{{ cert.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  cert: {
    title: string
    award: string
    year: string
    image: string
    description: string
  }
}>()
defineEmits(['close'])

const modalContent = ref<HTMLElement | null>(null)
let lastActiveElement: HTMLElement | null = null

onMounted(() => {
  lastActiveElement = document.activeElement as HTMLElement
  modalContent.value?.focus()
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
  lastActiveElement?.focus()
})
</script>

<style scoped>
.cert-modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
}

.cert-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease;
}

.cert-modal__content {
  position: relative;
  width: 100%;
  max-width: 900px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
  animation: slideUp 0.4s var(--ease-power3-out);
  outline: none;
}

.cert-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1;
  z-index: 10;
  transition: background 0.2s;
}

.cert-modal__close:hover {
  background: rgba(0,0,0,0.8);
}

.cert-modal__body {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
}

.cert-modal__image-wrapper {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.cert-modal__image {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.cert-modal__info {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cert-modal__header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.cert-modal__tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: var(--accent-glow);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.cert-modal__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.cert-modal__desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .cert-modal__body {
    grid-template-columns: 1fr;
  }
  .cert-modal__image-wrapper {
    min-height: 250px;
  }
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { 
  from { opacity: 0; transform: translateY(20px) scale(0.98); } 
  to { opacity: 1; transform: translateY(0) scale(1); } 
}
</style>
