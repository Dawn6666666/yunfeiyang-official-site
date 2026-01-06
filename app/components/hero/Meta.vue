<template>
  <div class="hero-meta-wrapper">
    <!-- 副标题 -->
    <p class="hero__subtitle" :class="{ animate: isLoaded }">
      Student Tech Community · Est. 2014
    </p>

    <!-- 辅助信息 -->
    <div class="hero__meta" :class="{ animate: isLoaded }">
      <span>Yunfeiyang Club</span>
      <span class="hero__divider">|</span>
      <span>Guided by Prof. Chen Ke</span>
    </div>

    <!-- CTA Buttons (v3 Update) -->
    <div class="hero__cta" :class="{ animate: isLoaded }">
      <a href="#join" class="btn btn--primary" @click.prevent="scrollTo('#join')">
        立即加入
      </a>
      <a href="#impact" class="btn btn--secondary" @click.prevent="scrollTo('#impact')">
        查看项目
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoaded: boolean
  isScrolling: boolean
}>()

const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
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

/* ─────────────────────────────────────────────────────────
   CTA - Buttons (v3 Update)
   ───────────────────────────────────────────────────────── */

.hero__cta {
  margin-top: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: 1.8s;
  pointer-events: auto; /* Ensure clickable */
}

.hero__cta.animate {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
}

.btn--primary {
  background-color: var(--text); /* Dark: White, Light: Dark */
  color: var(--bg); /* Dark: Dark, Light: White */
  border: 1px solid var(--text);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn--secondary {
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  backdrop-filter: blur(4px);
}

.btn--secondary:hover {
  background-color: var(--bg-elevated);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

/* Remove old scroll animation artifacts if any */

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .hero-meta-wrapper {
    opacity: 1; /* Disable scroll fade */
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero__cta {
    /* left: var(--space-md); Remove this as it's no longer absolute */
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  .btn {
    width: 100%;
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
