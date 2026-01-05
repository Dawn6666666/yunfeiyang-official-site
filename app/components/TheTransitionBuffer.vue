<template>
  <section ref="bufferRef" class="transition-buffer">
    <div class="buffer__content">
      <p 
        class="buffer__text" 
        :class="{ 'is-visible': isVisible }"
      >
        It started with curiosity.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const bufferRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (bufferRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Play once: disconnect after triggering
            observer?.disconnect()
          }
        })
      },
      {
        threshold: 0.5 // Trigger when 50% visible
      }
    )
    observer.observe(bufferRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.transition-buffer {
  height: 50vh; /* 留白缓冲区高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.buffer__text {
  font-family: var(--font-body);
  font-size: 0.75rem; /* 12px */
  color: var(--muted);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  letter-spacing: 0.05em;
}

.buffer__text.is-visible {
  opacity: 0.8;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .buffer__text {
    transition: none;
  }
}
</style>
