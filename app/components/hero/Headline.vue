<template>
  <div class="hero-headline-wrapper">
    <!-- 主标题区 -->
    <div class="hero__headline">
      <span class="hero__we" :class="{ animate: isLoaded }">We</span>
      <!-- Code: Shimmer Effect Applied -->
      <span class="hero__code hero__code--shimmer" :class="{ animate: isLoaded }">Code</span>
    </div>

    <div class="hero__subline">
      <span class="hero__the" :class="{ animate: isLoaded }">the</span>
      <span class="hero__future" :class="{ animate: isLoaded }">Future</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoaded: boolean
  isScrolling: boolean
}>()
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────
   主标题动效 (v2 Phase A Update)
   ───────────────────────────────────────────────────────── */

.hero-headline-wrapper {
  color: var(--text);
}

.hero__headline,
.hero__subline {
  display: flex;
  align-items: baseline;
  gap: 0.3em;
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 0.95;
  color: var(--text);
  
  /* Create layer context for transforms */
  transform-style: flat;
}

.hero__headline {
  font-size: clamp(4rem, 12vw, 10rem);
  
  /* Scroll Divergence: Move Left */
  /* Moves -50px when scroll progress is 1 */
  transform: translate3d(calc(var(--scroll-progress) * -50px), 0, 0);
  will-change: transform;
}

.hero__subline {
  font-size: clamp(3.5rem, 10vw, 8rem);
  margin-top: -0.1em;

  /* Scroll Divergence: Move Right */
  transform: translate3d(calc(var(--scroll-progress) * 50px), 0, 0);
  will-change: transform;
}

/* "We" - 淡入 + 上滑 */
.hero__we {
  color: var(--text);
  -webkit-text-fill-color: var(--text);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.hero__we.animate {
  opacity: 1;
  transform: translateY(0);
}

/* "Code" - 紧随 "We" 入场 */
.hero__code {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-out 0.15s, transform 0.4s ease-out 0.15s;
}

.hero__code.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Shimmer Definition - Dark Mode Default */
.hero__code--shimmer {
  background: linear-gradient(
    90deg,
    var(--accent) 0%,
    #FFFFFF 50%,
    var(--accent) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shimmer-flow 3.5s linear infinite;
}

/* Shimmer Definition - Light Mode Vivid Orange */
html.light-mode .hero__code--shimmer {
  background: linear-gradient(
    90deg,
    var(--accent) 0%,
    #C2410C 40%,
    #FB923C 60%,
    var(--accent) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

@keyframes shimmer-flow {
  to {
    background-position: 200% center;
  }
}

/* "the" - 延迟淡入 */
.hero__the {
  opacity: 0;
  font-weight: 400;
  color: var(--text-muted);
  -webkit-text-fill-color: var(--text-muted);
  font-size: 0.5em;
  transition: opacity 0.3s ease 0.6s;
}

.hero__the.animate {
  opacity: 0.8;
}

/* "Future" - 遮罩揭示 */
.hero__future {
  color: var(--text);
  -webkit-text-fill-color: var(--text);
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.8s;
}

.hero__future.animate {
  clip-path: inset(0 0 0 0);
}

/* Reduced Motion Overrides */
@media (prefers-reduced-motion: reduce) {
  .hero__headline,
  .hero__subline {
    transform: none !important;
  }

  /* 跳过入场编排，直接呈现终态 */
  .hero__we,
  .hero__code,
  .hero__future {
    opacity: 1;
    transform: none;
    clip-path: none;
  }

  .hero__the {
    opacity: 0.8;
  }

  /* 取消扫光，改为纯色填充 */
  .hero__code--shimmer {
    animation: none;
    background: none;
    color: var(--accent);
    -webkit-text-fill-color: var(--accent);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero__headline {
    flex-direction: column;
    gap: 0;
  }

  .hero__subline {
    flex-direction: column;
    gap: 0;
  }
}
</style>
