<template>
  <section id="about" class="about-section" ref="sectionRef">
    <div class="about__container">
      
      <!-- L: 章节锚点 -->
      <h2 class="about__anchor reveal">关于我们.</h2>

      <!-- R1: 身份定义 -->
      <div class="about__block about__block--identity reveal">
        <p class="about__display-text">
          不仅仅是社团。<br>
          <span class="highlight">更是未来工程师的孵化器。</span>
        </p>
      </div>

      <!-- R2: 起源与传承 -->
      <div class="about__block about__block--origin reveal">
        <p class="about__body-text">
          始于 <span class="text-bold">2014</span> 年，由学校<span class="text-bold">第一届云计算专业</span>学生在<span class="text-bold">陈可老师</span>指导下创立。
          我们见证了从云计算到人工智能的技术变革。
        </p>
        <p class="about__body-text">
          <span class="text-accent">“师徒制”</span> 是我们的核心传承。
          每位新生都有一位专属导师，通过“老带新”实现技术与其价值观的精准传递。
          在这里，我们不仅仅通过代码交流，更通过实战项目共同成长。
        </p>
      </div>

      <!-- R3: 核心理念 -->
      <div class="about__block about__block--vibe reveal">
        <ul class="vibe-list">
          <li class="vibe-item">[ 技术信仰 ]</li>
          <li class="vibe-item">[ 师徒传承 ]</li>
          <li class="vibe-item">[ 实战驱动 ]</li>
        </ul>
        <p class="about__caption">
          "没有强制打卡，只有对技术最纯粹的热爱。"
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

// 引用 section DOM 元素用于滚动动画
const sectionRef = ref(null)
// 初始化滚动显现效果
useScrollReveal(sectionRef)
</script>

<style scoped>
.about-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0; /* 统一步调 */
  background-color: var(--bg);
}

.about__container {
  max-width: 800px; /* 沉浸式阅读宽度 */
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 15vh; /* 块间呼吸感 */
}

.about__anchor {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--muted);
  opacity: 0.5;
  margin-bottom: 5vh;
}

/* R1: 身份 */
.about__display-text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2; /* 中文行高优化 */
  font-weight: 600;
  color: var(--text);
}

.highlight {
  color: var(--text);
  opacity: 0.9;
  background: linear-gradient(120deg, transparent 0%, transparent 100%); /* 预留高光位置 */
}

/* R2: 起源 */
.about__body-text {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.8; /* 优化中文阅读体验 */
  color: var(--muted);
  margin-bottom: 1.5rem;
  max-width: 60ch;
  text-align: justify; /* 两端对齐 */
}

.text-accent {
  color: var(--accent);
  font-weight: 600;
}

.text-bold {
  font-weight: 700;
  color: var(--text);
}

/* R3: 氛围 */
.vibe-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--accent);
}

.about__caption {
  font-size: 1rem;
  color: var(--muted);
  font-style: italic;
  opacity: 0.8;
  font-family: var(--font-mono); /* 使用等宽字体增加科技感 */
}

/* 响应式调整 */
@media (max-width: 768px) {
  .about-section {
    padding-top: 5vh;
  }
  
  .about__container {
    gap: 10vh;
  }
}
</style>
