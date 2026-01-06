<template>
  <section id="tech" class="tech-section" ref="sectionRef">
    <div class="tech__container">
      
      <!-- 头部介绍 -->
      <header class="tech__header reveal">
        <h2 class="tech__title">技术领航.</h2>
        <div class="tech__sub">
          <p class="tech__subtitle">寻找属于你的赛道。</p>
          <p class="tech__quote">"我们不只是学习语言，我们掌握领域。"</p>
        </div>
      </header>
      
      <!-- 技术网格 (交错动画) -->
      <div class="track-grid reveal-stagger">
        
        <!-- Track 1: 云计算 (Cloud) -->
        <div class="track-card">
          <span class="track__number">01</span>
          <div class="track__content">
            <h3 class="track__title">云计算 & 大数据</h3>
            <p class="track__position">数字基座 (Infrastructure)</p>
            <p class="track__desc">构建支撑现代互联网的可扩展基础设施与数据平台。</p>
            <div class="track__keywords">
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>Linux</span>
              <span>虚拟化</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">系统架构师</span>
          </div>
        </div>

        <!-- Track 2: 人工智能 (AI) -->
        <div class="track-card">
          <span class="track__number">02</span>
          <div class="track__content">
            <h3 class="track__title">人工智能</h3>
            <p class="track__position">技术前沿 (The Frontier)</p>
            <p class="track__desc">探索深度学习、大模型代理 (Agents) 与智能算法的边界。</p>
            <div class="track__keywords">
              <span>Python</span>
              <span>PyTorch</span>
              <span>RAG</span>
              <span>LLM</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">算法工程师</span>
          </div>
        </div>

        <!-- Track 3: 软件开发 (Dev) -->
        <div class="track-card">
          <span class="track__number">03</span>
          <div class="track__content">
            <h3 class="track__title">软件工程</h3>
            <p class="track__position">全栈创造 (Full Stack)</p>
            <p class="track__desc">从后端高并发服务到精美的前端交互，打造完整应用。</p>
            <div class="track__keywords">
              <span>Java/Spring</span>
              <span>Vue/Nuxt</span>
              <span>MySQL</span>
              <span>Design</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">全栈开发者</span>
          </div>
        </div>

        <!-- Track 4: 智能硬件 (IoT) - 新增 -->
        <div class="track-card">
          <span class="track__number">04</span>
          <div class="track__content">
            <h3 class="track__title">智能硬件 & IoT</h3>
            <p class="track__position">虚实结合 (Integration)</p>
            <p class="track__desc">软硬结合，赋予万物感知与互联的能力。如：智能车、智慧路灯。</p>
            <div class="track__keywords">
              <span>C/C++</span>
              <span>嵌入式</span>
              <span>传感器</span>
              <span>智能控制</span>
            </div>
          </div>
          <div class="track__footer">
            <span class="track__label">成长目标</span>
            <span class="track__goal">嵌入式专家</span>
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
// 启用滚动显现动画
useScrollReveal(sectionRef)
</script>

<style scoped>
.tech-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0; /* 统一节奏 */
  background-color: var(--bg);
}

.tech__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* 头部样式 */
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
  font-family: var(--font-body); /* 中文引言使用 Body 字体更易读 */
  font-size: 1rem;
  color: var(--muted);
  max-width: 400px;
  text-align: right;
  font-style: italic;
}

/* 网格布局 */
.track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
}

/* ─────────────────────────────────────────────────────────
   Tech v2 Phase A: 3D 深度卡片 (Depth Card)
   纯 CSS3 3D 变换实现
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
  
  /* 3D 引擎设置 */
  transform-style: preserve-3d;
  perspective: 1000px; /* 本地透视 */
  transition: 
    border-color var(--duration-hover) var(--ease-power3-out),
    box-shadow var(--duration-hover) var(--ease-power3-out),
    transform var(--duration-hover) var(--ease-power3-out);
}

/* 蓝图背景纹理 (Hover 时显现) */
.track-card::before {
  content: '';
  position: absolute;
  inset: 0;
  /* 工程网格纹理 */
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
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5); /* 深度阴影 */
  /* transform: translateY(-5px);  可选物理上浮 */
}

.track-card:hover::before {
  opacity: 0.15; /* 微妙显现纹理 */
}

/* 内容分层 (Z轴深度) */
.track__number {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--divider);
  line-height: 1;
  opacity: 0.5;
  transition: transform 0.5s ease, color 0.4s ease;
  transform: translateZ(0); /* 基础层 */
}

.track-card:hover .track__number {
  transform: translateZ(-20px); /* 向后退，制造深度感 */
  color: var(--muted);
}

.track__content {
  margin-top: auto;
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

/* 关键词 - 高悬浮 */
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
  transform: translateZ(30px); /* 显著前凸 */
}

.track-card:hover .track__keywords span {
  border-color: var(--divider);
  background: var(--bg); /* 不透明背景，突出显示 */
}

/* 底部标签 - 中等悬浮 */
.track__footer {
  border-top: 1px solid var(--divider);
  padding-top: var(--space-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: var(--bg-elevated); /* 保证可读性 */
  transform: translateZ(0);
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.track-card:hover .track__footer {
  transform: translateZ(15px);
  border-color: transparent; /* 分离边框 */
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

/* 错峰动画，模拟“有机”感 */
.track-card:hover .track__title { transform: translateZ(10px); }
.track-card:hover .track__position { transform: translateZ(10px); }
.track-card:hover .track__desc { transform: translateZ(5px); }

/* 响应式: 触摸屏禁用 3D */
@media (hover: none) {
  .track-card {
    transform: none !important;
  }
  .track__keywords, .track__footer, .track__title, .track__number {
    transform: none !important;
  }
  .track-card::before {
    opacity: 0.05; /* 移动端常驻微弱网格 */
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
