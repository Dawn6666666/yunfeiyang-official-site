<template>
  <section id="tech" class="tech-section" ref="sectionRef">
    <div class="tech__container">
      
      <!-- Section Header -->
      <header class="tech__header reveal">
        <h2 class="tech__title">Tech Tracks.</h2>
        <div class="tech__sub">
          <p class="tech__subtitle">软件工程专业核心方向。</p>
          <p class="tech__quote">"云飞扬社团汇聚了软件工程及相关专业的优秀学生，<br>共同探索前沿技术。"</p>
        </div>
      </header>
      
      <!-- Grid (Staggered Reveal) -->
      <div class="track-grid reveal-stagger">
        
        <!-- Track 1: Artificial Intelligence -->
        <div class="track-card">
          <span class="track__number">01</span>
          <div class="track__content">
            <h3 class="track__title">人工智能</h3>
            <p class="track__position">Artificial Intelligence</p>
            <p class="track__desc">探索大模型与计算机视觉前沿，构建落地智能系统。</p>
            <div class="track__keywords">
              <span>LLM</span>
              <span>Deep Learning</span>
              <span>Agents</span>
              <span>Computer Vision</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">AI 工程师</span>
          </div>
        </div>

        <!-- Track 2: Intelligent Software Dev -->
        <div class="track-card">
          <span class="track__number">02</span>
          <div class="track__content">
            <h3 class="track__title">软工智能</h3>
            <p class="track__position">Intelligent Software Dev</p>
            <p class="track__desc">融合软件工程与 AI 智能体，打造下一代应用系统。</p>
            <div class="track__keywords">
              <span>AI Agents</span>
              <span>Full-Stack</span>
              <span>Modern SE</span>
              <span>LLM Apps</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">智能软件工程师</span>
          </div>
        </div>

        <!-- Track 3: Database Technology -->
        <div class="track-card">
          <span class="track__number">03</span>
          <div class="track__content">
            <h3 class="track__title">数据库</h3>
            <p class="track__position">Database Technology</p>
            <p class="track__desc">深耕主流与国产分布式数据库，掌握高并发与性能调优。</p>
            <div class="track__keywords">
              <span>Distributed DB</span>
              <span>openGauss</span>
              <span>NoSQL</span>
              <span>Data Governance</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">数据库架构师</span>
          </div>
        </div>

        <!-- Track 4: Intelligent Cloud & IoT -->
        <div class="track-card">
          <span class="track__number">04</span>
          <div class="track__content">
            <h3 class="track__title">智能云物联</h3>
            <p class="track__position">Intelligent Cloud & IoT</p>
            <p class="track__desc">打通端边云协同，融合嵌入式开发与物联网云平台。</p>
            <div class="track__keywords">
              <span>Edge & Cloud</span>
              <span>IoT Protocols</span>
              <span>Embedded</span>
              <span>Cloud Native</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">云物联架构师</span>
          </div>
        </div>

        <!-- Track 5: Industrial Digital Intelligence -->
        <div class="track-card">
          <span class="track__number">05</span>
          <div class="track__content">
            <h3 class="track__title">工业数智化</h3>
            <p class="track__position">Industrial Digital Intelligence</p>
            <p class="track__desc">软硬件结合赋能工业 4.0，深耕工业软件与智能控制。</p>
            <div class="track__keywords">
              <span>Industrial SE</span>
              <span>PLC & Control</span>
              <span>Smart Factory</span>
              <span>Digital Twin</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">工业数智化专家</span>
          </div>
        </div>

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
.tech-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0; /* Standardized rhythm */
  background-color: var(--bg);
}

.tech__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  /* 2K Optimization */
  @media (min-width: 1921px) {
    max-width: 2000px;
    padding: 0 var(--space-lg);
  }
}

/* Header */
.tech__header {
  margin-bottom: var(--space-xl);
  border-bottom: 1px solid var(--divider);
  padding-bottom: var(--space-md);
}

.tech__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-sm);
}

.tech__sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.tech__subtitle {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--accent);
}

.tech__quote {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--muted);
  max-width: 400px;
  text-align: right;
}

/* Grid */
.track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
}

/* ─────────────────────────────────────────────────────────
   Tech v2 Phase A: The Depth Card
   Pure CSS 3D Transforms
   ───────────────────────────────────────────────────────── */

.track-card {
  position: relative;
  border: 1px solid var(--divider);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  background-color: var(--bg-elevated);
  
  /* 3D Engine Setup */
  transform-style: preserve-3d;
  perspective: 1000px; /* Local perspective for content pop */
  transform-style: preserve-3d;
  perspective: 1000px; /* Local perspective for content pop */
  transition: 
    border-color var(--duration-hover) var(--ease-power3-out),
    box-shadow var(--duration-hover) var(--ease-power3-out),
    transform var(--duration-hover) var(--ease-power3-out);
}

/* Blueprint Pattern (Reveal on hover) */
.track-card::before {
  content: '';
  position: absolute;
  inset: 0;
  /* Engineering Grid Pattern */
  background-image: 
    linear-gradient(var(--divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--divider) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: overlay;
}

.track-card:hover {
  border-color: var(--accent);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5); /* Subtle depth shadow */
  /* transform: translateY(-5px);  Optional physical lift */
}

.track-card:hover::before {
  opacity: 0.15; /* Reveal pattern subtly */
}

/* Content Layering */
.track__number {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--divider);
  line-height: 1;
  opacity: 0.5;
  transition: transform 0.5s ease, color 0.4s ease;
  transform: translateZ(0); /* Base layer */
}

.track-card:hover .track__number {
  transform: translateZ(-20px); /* Push back for depth */
  color: var(--muted);
}

.track__content {
  margin-top: auto; /* Push to bottom initially, but layout forces it up */
  margin-bottom: var(--space-lg);
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
}

.track__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25em;
  color: var(--text);
  transform: translateZ(0);
  transition: transform 0.4s ease;
}

.track__position {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
  transform: translateZ(0);
  transition: transform 0.4s ease;
}

.track__desc {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: var(--space-md);
  transform: translateZ(0);
  transition: transform 0.4s ease;
}

/* Keywords - High Lift */
.track__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  transform: translateZ(0);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.track__keywords span {
  display: inline-block;
  padding: 0.25em 0.75em;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
  color: var(--text);
  border: 1px solid transparent;
  width: max-content;
}

.track-card:hover .track__keywords {
  transform: translateZ(30px); /* Significant lift */
}

.track-card:hover .track__keywords span {
  border-color: var(--divider);
  background: var(--bg); /* Opaque bg to pop against grid */
}

/* Footer - Medium Lift */
.track__footer {
  border-top: 1px solid var(--divider);
  padding-top: var(--space-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: var(--bg-elevated); /* Ensure legibility over grid */
  transform: translateZ(0);
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.track-card:hover .track__footer {
  transform: translateZ(15px);
  border-color: transparent; /* Detach nicely */
}

.track__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.track__goal {
  font-weight: 600;
  color: var(--text);
}

/* Staggered Transitions for "Organic" feel */
.track-card:hover .track__title { transform: translateZ(10px); }
.track-card:hover .track__position { transform: translateZ(10px); }
.track-card:hover .track__desc { transform: translateZ(5px); }

/* Responsive: Disable 3D on touch */
@media (hover: none) {
  .track-card {
    transform: none !important;
  }
  .track__keywords, .track__footer, .track__title, .track__number {
    transform: none !important;
  }
  .track-card::before {
    opacity: 0.05; /* Always show faint grid on mobile */
  }
}

@media (max-width: 768px) {
  .tech__sub {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
  
  .tech__quote {
    text-align: left;
  }
}
</style>
