<template>
  <section ref="heroRef" class="hero" :class="{ 'is-scrolling': isScrolling }">
    <!-- 背景层组件 -->
    <HeroBackground />
    <SyntaxCloud />

    <!-- 主内容容器 (应用视差) -->
    <div class="hero__content">
      
      <!-- 标题组件 (传递状态) -->
      <HeroHeadline 
        :is-loaded="isLoaded" 
        :is-scrolling="isScrolling" 
      />

      <!-- 信息组件 (传递状态) -->
      <HeroMeta 
        :is-loaded="isLoaded" 
        :is-scrolling="isScrolling" 
      />
      
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * TheHero.vue (v2 Phase A)
 * 职责：
 * 1. 核心状态管理 (Loaded / Scrolling)
 * 2. 动效引擎 (驱动 CSS 变量 --scroll-progress, --mouse-x, --mouse-y)
 */
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)
const isScrolling = ref(false)
const isReducedMotion = ref(false)

let observer: IntersectionObserver | null = null
let animationFrameId: number | null = null

// 动效引擎状态
let lastScrollY = 0
let ticking = false

// 更新 CSS 变量
const updateCssVariables = () => {
  if (!heroRef.value) return

  // 1. Scroll Progress (0 -> 1)
  // 当滚动超过 100vh 时 progress = 1
  const viewportHeight = window.innerHeight
  const scrollProgress = Math.min(Math.max(window.scrollY / viewportHeight, 0), 1)
  
  heroRef.value.style.setProperty('--scroll-progress', scrollProgress.toString())

  ticking = false
}

const handleScroll = () => {
  lastScrollY = window.scrollY
  if (!ticking && !isReducedMotion.value) {
    requestAnimationFrame(updateCssVariables)
    ticking = true
  }
}

// 鼠标视差 (Magnetic Tilt)
const handleMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value || !heroRef.value) return
  
  const { innerWidth, innerHeight } = window
  // 归一化 (-1 到 1)
  const x = (e.clientX / innerWidth) * 2 - 1
  const y = (e.clientY / innerHeight) * 2 - 1
  
  heroRef.value.style.setProperty('--mouse-x', x.toString())
  heroRef.value.style.setProperty('--mouse-y', y.toString())
}

onMounted(async () => {
  // 检测减弱动画偏好
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  isReducedMotion.value = mediaQuery.matches
  mediaQuery.addEventListener('change', (e) => isReducedMotion.value = e.matches)

  // 字体检测
  if (document.fonts) {
    try {
      await document.fonts.ready
    } catch (e) {
      console.warn('Font check skipped', e)
    }
  }

  // 入场
  requestAnimationFrame(() => {
    isLoaded.value = true
  })

  // 绑定事件
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  
  // 初始化变量
  updateCssVariables()

  // Intersection Observer (保持兼容 Nav 状态)
  if (heroRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isScrolling.value = entry.intersectionRatio < 0.7
        })
      },
      { threshold: [0, 0.3, 0.5, 0.7, 1] }
    )
    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  if (observer) observer.disconnect()
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
  
  /* CSS Variables Init */
  --scroll-progress: 0;
  --mouse-x: 0;
  --mouse-y: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  padding-left: 8vw;
  transform-style: preserve-3d;
  
  /* Magnetic Tilt (CSS Driven) */
  /* Limit rotations to +/- 2deg */
  transform: 
    perspective(1000px)
    rotateX(calc(var(--mouse-y) * -2deg))
    rotateY(calc(var(--mouse-x) * 2deg));
  
  /* Smooth damping */
  transition: transform 0.1s ease-out;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .hero__content {
    transform: none !important;
  }
}

@media (max-width: 768px) {
  .hero__content {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }
}
</style>
