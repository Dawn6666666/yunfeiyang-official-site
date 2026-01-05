<template>
  <div class="visual-fx-layer" :class="{ 'mode-blueprint': isBlueprintActive }" :style="layerStyle">
    
    <!-- Experiment A: Syntax Cloud -->
    <div class="fx-cloud" v-if="!isReducedMotion">
      <span 
        v-for="(item, index) in cloudItems" 
        :key="index"
        class="fx-symbol"
        :style="item.style"
      >
        {{ item.symbol }}
      </span>
    </div>

    <!-- Experiment B: Blueprint Grid (Visible only in blueprint mode) -->
    <div class="fx-grid-overlay"></div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// ─────────────────────────────────────────────────────────────
// Shared State
// ─────────────────────────────────────────────────────────────
const isBlueprintActive = useState('blueprintMode', () => false)
const isReducedMotion = ref(false)

// ─────────────────────────────────────────────────────────────
// Experiment A: Syntax Cloud
// ─────────────────────────────────────────────────────────────
const symbols = ['{', '}', '[', ']', '//', '=>', ';', '<', '>', '*', '$', '::', '()']
const cloudItems = ref<{ symbol: string; style: any }[]>([])

const generateCloud = () => {
  cloudItems.value = Array.from({ length: 25 }).map(() => ({
    symbol: symbols[Math.floor(Math.random() * symbols.length)] as string,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}vh`, // Confined to first screen mostly
      fontSize: `${Math.random() * 2 + 1}rem`,
      opacity: Math.random() * 0.1 + 0.05,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * -10}s`,
      transform: `rotate(${Math.random() * 360}deg)`
    }
  }))
}

// ─────────────────────────────────────────────────────────────
// Experiment C: Velocity Skew
// Only skews the FX layer itself to avoid text distortion on content
// ─────────────────────────────────────────────────────────────
const skewY = ref(0)
let lastScrollY = 0

const handleScroll = () => {
  if (isReducedMotion.value) return

  const currentY = window.scrollY
  const deltaY = currentY - lastScrollY
  const velocity = Math.min(Math.max(deltaY * 0.05, -1.5), 1.5) // Clamp +/- 1.5deg
  
  skewY.value = velocity
  lastScrollY = currentY
  
  // Spring back logic handled by CSS transition
}

const layerStyle = computed(() => ({
  transform: `skewY(${skewY.value}deg)`,
  pointerEvents: 'none' as const
}))

// ─────────────────────────────────────────────────────────────
// Lifecycle
// ─────────────────────────────────────────────────────────────
onMounted(() => {
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isReducedMotion.value) {
    generateCloud()
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
  
  // Auto-exit blueprint mode after 4s
  watch(isBlueprintActive, (val) => {
    if (val) {
      document.body.classList.add('mode-blueprint-body')
      setTimeout(() => {
        isBlueprintActive.value = false
        document.body.classList.remove('mode-blueprint-body')
      }, 4000)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.classList.remove('mode-blueprint-body')
})
</script>

<style>
/* Global Blueprint Styles (Injected via Body Class) */
.mode-blueprint-body {
  filter: invert(1) hue-rotate(180deg);
}
.mode-blueprint-body * {
  outline: 1px solid rgba(0, 100, 255, 0.2) !important;
}
</style>

<style scoped>
.visual-fx-layer {
  position: fixed;
  inset: 0;
  z-index: 0; /* Behind content but above background */
  pointer-events: none;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 0.1); /* Elastic skew return */
}

/* Syntax Cloud */
.fx-cloud {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.fx-symbol {
  position: absolute;
  color: var(--text);
  font-family: var(--font-mono);
  font-weight: 700;
  user-select: none;
  will-change: transform, opacity;
  filter: blur(2px);
  animation: float-ambient linear infinite;
}

@keyframes float-ambient {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-50px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

/* Blueprint Grid */
.fx-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0,100,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,100,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0;
  transition: opacity 0.3s;
}

.mode-blueprint .fx-grid-overlay {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .visual-fx-layer {
    display: none;
  }
}
</style>
