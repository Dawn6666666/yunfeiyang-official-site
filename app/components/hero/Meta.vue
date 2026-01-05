<template>
  <div class="hero-meta-wrapper">
    <!-- 副标题 -->
    <p class="hero__subtitle" :class="{ animate: isLoaded }">
      Student Tech Community · Est. 2014
    </p>

    <!-- 辅助信息 -->
    <div class="hero__meta" :class="{ animate: isLoaded }">
      <span>Cloud · AI · Software</span>
      <span class="hero__divider">|</span>
      <span>Guided by Prof. Chen Ke</span>
    </div>

    <!-- CTA -->
    <div class="hero__cta" :class="{ animate: isLoaded }">
      <span class="hero__scroll">Scroll</span>
      <span class="hero__arrow">↓</span>
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
   副标题与辅助信息 (v2 Phase A)
   Wrapper accelerates fade out based on scroll
   ───────────────────────────────────────────────────────── */

.hero-meta-wrapper {
  /* Accelerated Fade Out: Opacity drops twice as fast as scroll */
  opacity: calc(1.0 - var(--scroll-progress) * 2.5);
  will-change: opacity;
  transition: opacity 0.1s linear; /* Smooth-out rapid changes if any */
}

.hero__subtitle {
  margin-top: var(--space-lg);
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: 1.4s;
}

.hero__subtitle.animate {
  opacity: 1; /* Note: Parent opacity overrides this visually */
  transform: translateY(0);
}

.hero__meta {
  margin-top: var(--space-sm);
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: var(--muted);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: 1.6s;
}

.hero__meta.animate {
  opacity: 0.7;
  transform: translateY(0);
}

.hero__divider {
  margin: 0 0.75em;
  opacity: 0.4;
}

/* ─────────────────────────────────────────────────────────
   CTA - Scroll 指示
   ───────────────────────────────────────────────────────── */

.hero__cta {
  position: absolute;
  bottom: var(--space-lg);
  left: 8vw;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.4s ease;
  transition-delay: 1.8s;
}

.hero__cta.animate {
  opacity: 1;
}

.hero__arrow {
  animation: scroll-breathe 2s ease-in-out infinite;
  animation-delay: 2.2s;
}

@keyframes scroll-breathe {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.6;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .hero-meta-wrapper {
    opacity: 1; /* Disable scroll fade */
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero__cta {
    left: var(--space-md);
  }

  .hero__meta {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  .hero__divider {
    display: none;
  }
}
</style>
