<template>
  <div class="syntax-cloud">
    <span 
      v-for="(symbol, index) in symbols" 
      :key="index"
      class="syntax-symbol"
      :style="getSymbolStyle(index)"
    >
      {{ symbol }}
    </span>
  </div>
</template>

<script setup lang="ts">
const symbols = [
  '{', '}', '[]', '//', '=>', ';', '<>', '()', '&&', '||', '$', '#', '++', '--'
]

// Generate random position and animation params
const getSymbolStyle = (index: number) => {
  const randomX = Math.random() * 100 // 0-100vw
  const randomY = Math.random() * 100 // 0-100vh
  const duration = 15 + Math.random() * 20 // 15-35s
  const delay = Math.random() * -30 // Negative delay to start mid-animation
  const scale = 0.5 + Math.random() * 1.5 // 0.5x - 2x size
  
  return {
    left: `${randomX}%`,
    top: `${randomY}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    fontSize: `${scale}rem`
  }
}
</script>

<style scoped>
.syntax-cloud {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0.4;
}

.syntax-symbol {
  position: absolute;
  color: var(--text);
  font-family: var(--font-mono);
  opacity: 0.05;
  user-select: none;
  animation: float-drift linear infinite;
}

@keyframes float-drift {
  0% {
    transform: translateY(100px) rotate(0deg);
  }
  50% {
    transform: translateY(-100px) rotate(10deg);
  }
  100% {
    transform: translateY(100px) rotate(0deg);
  }
}
</style>
