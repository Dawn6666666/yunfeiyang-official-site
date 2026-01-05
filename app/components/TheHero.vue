<template>
  <section id="hero" ref="heroRef" class="hero" :class="{ 'is-scrolling': isScrolling }">
    <!-- 背景层组件 -->
    <HeroBackground />

    <!-- 主内容容器 (应用视差) -->
    <div class="hero__content" :style="parallaxStyle">
      
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
 * TheHero.vue
 * 职责：
 * 1. 布局容器
 * 2. 状态管理 (Loaded / Scrolling)
 * 3. 视差逻辑 (Parallax)
 * 4. 其它组件的 Orchestrator
 */
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
/* 容器样式保持不变 */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  perspective: 1000px;
}

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

@media (max-width: 768px) {
  .hero__content {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }
}
</style>
