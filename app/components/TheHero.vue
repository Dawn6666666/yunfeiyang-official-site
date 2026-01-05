<template>
  <section ref="heroRef" class="hero" :class="{ 'is-scrolling': isScrolling }">
    <!-- 背景层 -->
    <div class="hero__bg"></div>
    <!-- 噪点纹理 -->
    <div class="hero__noise"></div>

    <!-- 主内容容器 -->
    <div class="hero__content" :style="parallaxStyle">
      <!-- 主标题区 -->
      <div class="hero__headline">
        <span class="hero__we" :class="{ animate: isLoaded }">We</span>
        <span class="hero__code" :class="{ animate: isLoaded }">Code</span>
      </div>

      <div class="hero__subline">
        <span class="hero__the" :class="{ animate: isLoaded }">the</span>
        <span class="hero__future" :class="{ animate: isLoaded }">Future</span>
      </div>

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
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)
const isScrolling = ref(false)

// 视差变量
const mouseX = ref(0)
const mouseY = ref(0)
const isReducedMotion = ref(false)

let observer: IntersectionObserver | null = null
let animationFrameId: number | null = null

// 视差计算样式
const parallaxStyle = computed(() => {
  if (isReducedMotion.value || isScrolling.value) return {}
  const rotateX = mouseY.value * -2 // 最大旋转角度
  const rotateY = mouseX.value * 2
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
})

// 处理鼠标移动
const handleMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value || isScrolling.value) return
  
  const { innerWidth, innerHeight } = window
  // 归一化坐标 (-1 到 1)
  mouseX.value = (e.clientX / innerWidth) * 2 - 1
  mouseY.value = (e.clientY / innerHeight) * 2 - 1
}

onMounted(async () => {
  // 检测减弱动画偏好
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  isReducedMotion.value = mediaQuery.matches
  mediaQuery.addEventListener('change', (e) => isReducedMotion.value = e.matches)

  // 等待字体加载完成，避免 FOUT
  if (document.fonts) {
    try {
      await document.fonts.ready
    } catch (e) {
      console.warn('Font loading check skipped', e)
    }
  }

  // 触发入场动画
  requestAnimationFrame(() => {
    isLoaded.value = true
  })

  // 绑定鼠标事件
  window.addEventListener('mousemove', handleMouseMove)

  // 设置 Intersection Observer 监测滚动状态
  if (heroRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 当 Hero 可见比例小于 70% 时，进入滚动状态
          isScrolling.value = entry.intersectionRatio < 0.7
        })
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1]
      }
    )
    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (observer) {
    observer.disconnect()
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════
   Hero 区样式
   ═══════════════════════════════════════════════════════════ */

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  perspective: 1000px; /* 为视差准备 */
}

/* 噪点纹理层 */
.hero__noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* 背景层 - 微妙渐变 */
.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(77, 163, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(77, 163, 255, 0.05) 0%, transparent 50%),
    var(--bg);
  z-index: 0;
}

/* 内容容器 - 非对称布局 + 视差应用 */
.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  padding-left: 8vw;
  transition: transform 0.1s ease-out; /* 平滑视差跟随 */
  transform-style: preserve-3d;
}

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

/* "Future" - 遮罩揭示 */
.hero__future {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 0.8s;
}

.hero__future.animate {
  clip-path: inset(0 0 0 0);
}

/* ─────────────────────────────────────────────────────────
   副标题与辅助信息
   ───────────────────────────────────────────────────────── */

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
  opacity: 1;
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

/* ─────────────────────────────────────────────────────────
   滚动状态 - Hero 解构
   ───────────────────────────────────────────────────────── */

.hero.is-scrolling .hero__we,
.hero.is-scrolling .hero__code {
  opacity: 0.3;
  transform: translateY(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero.is-scrolling .hero__the {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.hero.is-scrolling .hero__future {
  transform: scale(1.05);
  transition: transform 0.6s ease;
}

.hero.is-scrolling .hero__subtitle,
.hero.is-scrolling .hero__meta {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero.is-scrolling .hero__cta {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* ─────────────────────────────────────────────────────────
   响应式适配
   ───────────────────────────────────────────────────────── */

@media (max-width: 768px) {
  .hero__content {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }

  .hero__headline {
    flex-direction: column;
    gap: 0;
  }

  .hero__subline {
    flex-direction: column;
    gap: 0;
  }

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
