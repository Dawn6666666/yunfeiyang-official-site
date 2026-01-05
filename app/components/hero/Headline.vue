<template>
  <div class="hero-headline-wrapper">
    <!-- 主标题区 -->
    <div class="hero__headline">
      <span class="hero__we" :class="{ animate: isLoaded, 'is-scrolling': isScrolling }">We</span>
      <span class="hero__code" :class="{ animate: isLoaded, 'is-scrolling': isScrolling }">Code</span>
    </div>

    <div class="hero__subline">
      <span class="hero__the" :class="{ animate: isLoaded, 'is-scrolling': isScrolling }">the</span>
      <span class="hero__future" :class="{ animate: isLoaded, 'is-scrolling': isScrolling }">Future</span>
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
   主标题动效
   ───────────────────────────────────────────────────────── */

.hero__headline,
.hero__subline {
  display: flex;
  align-items: baseline;
  gap: 0.3em;
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 0.95;
}

.hero__headline {
  font-size: clamp(4rem, 12vw, 10rem);
}

.hero__subline {
  font-size: clamp(3.5rem, 10vw, 8rem);
  margin-top: -0.1em;
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

.hero__we.is-scrolling {
  opacity: 0.3;
  transform: translateY(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* "Code" - 描边填充效果 */
.hero__code {
  color: transparent;
  -webkit-text-stroke: 2px var(--accent);
  transition:
    color 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-text-stroke 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
}

.hero__code.animate {
  color: var(--text);
  -webkit-text-stroke: 0px transparent;
  transition-delay: 0.5s;
}

.hero__code.is-scrolling {
  opacity: 0.3;
  transform: translateY(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* "the" - 简单淡入 */
.hero__the {
  opacity: 0;
  font-weight: 400;
  color: var(--muted);
  font-size: 0.5em;
  transition: opacity 0.3s ease;
  transition-delay: 0.6s;
}

.hero__the.animate {
  opacity: 0.6;
}

.hero__the.is-scrolling {
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* "Future" - 遮罩揭示 */
.hero__future {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s ease;
  transition-delay: 0.8s;
  transform-origin: left center;
}

.hero__future.animate {
  clip-path: inset(0 0 0 0);
}

.hero__future.is-scrolling {
  transform: scale(1.05); /* 焦点强化 */
}

/* 响应式 */
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
