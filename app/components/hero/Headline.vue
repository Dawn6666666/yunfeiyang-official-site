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

.hero__headline,
.hero__subline {
  display: flex;
  align-items: baseline;
  gap: 0.3em;
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 0.95;
  
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
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.hero__we.animate {
  opacity: 1;
  transform: translateY(0);
}

/* "Code" - Shimmer Effect */
.hero__code {
  color: transparent;
  -webkit-text-stroke: 2px var(--accent);
  transition: opacity 0.4s;
  
  /* Fallback for no shimmer / pre-load */
  position: relative;
}

/* Shimmer Definition */
.hero__code--shimmer.animate {
  -webkit-text-stroke: 0px transparent; /* Remove stroke when filled */
  
  /* Gradient Flow */
  background: linear-gradient(
    110deg, 
    var(--text) 45%, 
    #ffffff 50%, 
    var(--text) 55%
  );
  background-size: 250% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  animation: shimmer-flow 3s infinite linear;
}

@keyframes shimmer-flow {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

/* "the" - Simple Fade */
.hero__the {
  opacity: 0;
  font-weight: 400;
  color: var(--muted);
  font-size: 0.5em;
  transition: opacity 0.3s ease 0.6s;
}

.hero__the.animate {
  opacity: 0.6;
}

/* "Future" - Mask Reveal */
.hero__future {
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
  
  .hero__code--shimmer.animate {
    animation: none;
    background: var(--text); /* Solid fill */
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
