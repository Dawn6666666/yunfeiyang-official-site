<template>
  <footer class="footer">
    <div class="footer__container">
      
      <div class="footer__main">
        <span class="footer__brand">Yunfeiyang Club</span>
        <span class="footer__divider">·</span>
        <span class="footer__info">Est. 2014</span>
        <span class="footer__divider">·</span>
        <span 
          class="footer__info footer__dev" 
          @click="toggleBlueprint"
          title="Click 5 times"
        >
          Code by Dawn
        </span>
      </div>

      <div class="footer__sub">
        <p class="footer__tagline">We build by learning.</p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const clicks = ref(0)
let clickTimer: ReturnType<typeof setTimeout> | null = null
let revertTimer: ReturnType<typeof setTimeout> | null = null

const toggleBlueprint = () => {
  clicks.value++
  
  if (clicks.value >= 5) {
    // Enable Blueprint
    document.body.classList.add('mode-blueprint')
    clicks.value = 0
    
    // Auto revert after 10s
    if (revertTimer) clearTimeout(revertTimer)
    revertTimer = setTimeout(() => {
      document.body.classList.remove('mode-blueprint')
    }, 10000)
  }
  
  // Reset clicks if idle
  if (clickTimer) clearTimeout(clickTimer)
  clickTimer = setTimeout(() => {
    clicks.value = 0
  }, 1000)
}

onUnmounted(() => {
  if (clickTimer) clearTimeout(clickTimer)
  if (revertTimer) clearTimeout(revertTimer)
})
</script>

<style scoped>
.footer {
  padding: 10vh 0 8vh; /* More bottom space for "landing" feel */
  background-color: var(--bg);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-align: center;
  opacity: 0.6;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  /* 2K Optimization */
  @media (min-width: 1921px) {
    max-width: 2000px;
  }
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: center;
}

.footer__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
}

.footer__sub {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  font-size: 0.75rem;
}

.footer__brand {
  color: var(--text);
  font-weight: 500;
}

.footer__divider {
  opacity: 0.3;
}

.footer__tagline {
  font-family: var(--font-body); /* Slightly different feel for the quote */
  font-style: italic;
  opacity: 0.5;
}

.footer__dev {
  opacity: 0.4;
  cursor: help; /* Hint at interaction */
  transition: opacity 0.2s;
}

.footer__dev:hover {
  opacity: 1;
  color: var(--accent);
}

@media (max-width: 768px) {
  .footer__main {
    flex-direction: column;
    gap: 0.25em;
  }
  
  .footer__divider {
    display: none;
  }
  
  /* Keep sub on one line if possible, or stack */
  .footer__sub {
    flex-direction: row;
  }
}
</style>
