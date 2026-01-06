<template>
  <section id="about" class="about-section" ref="sectionRef">
    <div class="about__container">
      
      <!-- L: Section Anchor -->
      <h2 class="about__anchor reveal">About.</h2>

      <!-- R1: The Identity -->
      <div class="about__block about__block--identity reveal">
        <p class="about__display-text">
          Not just a club. <br>
          <span class="highlight">未来建设者的<br>训练场。</span>
        </p>
      </div>

      <!-- R2: The Origin -->
      <div class="about__block about__block--origin reveal">
        <p class="about__body-text">
          成立于 2014 年，由学校第一届云计算专业学生在老师指导下创建。<br>
          我们是一个技术型、学习型、创新创业型的学生组织。
        </p>
        <p class="about__body-text">
          今天，我们致力于探索 
          <span class="text-accent">云计算</span>、
          <span class="text-accent">人工智能</span> 和 
          <span class="text-accent">现代软件工程</span> 的边界。
        </p>
      </div>

      <!-- R3: The Vibe -->
      <div class="about__block about__block--vibe reveal">
        <ul class="vibe-list">
          <li class="vibe-item">[ 探索 ]</li>
          <li class="vibe-item">[ 成长 ]</li>
          <li class="vibe-item">[ 热爱 ]</li>
        </ul>
        <p class="about__caption">
          "源于热爱，不止于代码。"
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const sectionRef = ref(null)
useScrollReveal(sectionRef)
</script>

<style scoped>
.about-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0; /* Standardized rhythm */
  background-color: var(--bg);
}

.about__container {
  max-width: 800px; /* Reading width */
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 15vh; /* Rhythm spacing */
}

.about__anchor {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--muted);
  opacity: 0.5;
  margin-bottom: 5vh;
}

/* R1: Identity */
.about__display-text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 600;
  color: var(--text);
}

.highlight {
  color: var(--text);
  opacity: 0.9;
}

/* R2: Origin */
.about__body-text {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--muted);
  margin-bottom: 1.5rem;
  max-width: 60ch;
}

.text-accent {
  color: var(--accent);
}

/* R3: Vibe */
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
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
  opacity: 0.8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-section {
    padding-top: 5vh;
  }
  
  .about__container {
    gap: 10vh;
  }
}
</style>
