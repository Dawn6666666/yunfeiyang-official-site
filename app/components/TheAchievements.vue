<template>
  <section id="impact" class="achievements-section" ref="sectionRef">
    <div class="achievements__container">
      
      <!-- Section Header -->
      <header class="achievements__header reveal">
        <h2 class="achievements__title">Impact.</h2>
      </header>
      
      <div class="impact-grid reveal-stagger">
        
        <!-- Dimension 1: The Peaks (Updated to Cert Wall) -->
        <div class="impact-col impact-col--peaks">
          <h3 class="col-title">The Peaks</h3>
          <p class="section-desc">在国家级竞赛中持续保持卓越表现。</p>
          <CertificateWall />
        </div>

        <!-- Dimension 2: The Soil -->
        <div class="impact-col impact-col--soil">
          <h3 class="col-title">The Soil</h3>
          <div class="project-list" @mousemove="handleMouseMove">
            <a href="https://intellibuddy-puce.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-item">
              <div class="project-head">
                <span class="project-name">智教虚拟化平台</span>
                <span class="project-stat">Deployed</span>
              </div>
              <p class="project-desc">智能教育结合虚拟化平台，已投入使用。</p>
            </a>
            <div class="project-item">
              <div class="project-head">
                <span class="project-name">云上智慧路灯</span>
                <span class="project-stat">IoT</span>
              </div>
              <p class="project-desc">面向智慧城市的云上多功能路灯系统。</p>
            </div>
            <div class="project-item">
              <div class="project-head">
                <span class="project-name">数智云联</span>
                <span class="project-stat">Cloud</span>
              </div>
              <p class="project-desc">基于行业场景的数字化解决方案。</p>
            </div>
          </div>
        </div>

        <!-- Dimension 3: The Culture -->
        <div class="impact-col impact-col--legacy">
          <h3 class="col-title">The Culture</h3>
          <div class="alumni-cloud">
            <span>Mentorship</span>
            <span>Innovation</span>
            <span>Engineering</span>
            <span>Teamwork</span>
            <span>Self-learning</span>
            <span>Passion</span>
            <span>Responsibility</span>
          </div>
          <p class="legacy-note">专注于培养扎实的工程能力与职业素养。</p>
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

const handleMouseMove = (e: MouseEvent) => {
  const cards = document.querySelectorAll('.project-item')
  for (const card of cards) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Cast to HTMLElement to safely set style
    ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
    ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
  }
}
</script>

<style scoped>
.achievements-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0; /* Standardized rhythm */
  background-color: var(--bg);
}

.achievements__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* Header */
.achievements__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-lg);
}

/* Grid Layout */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
  border-top: 1px solid var(--divider);
  padding-top: var(--space-md);
}

.col-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--muted);
  margin-bottom: var(--space-md);
  margin-bottom: var(--space-md);
  font-weight: 500;
}

.section-desc {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: var(--space-md);
  max-width: 60ch;
}

/* Table Style (Peaks) */
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table td {
  padding: var(--space-xs) 0;
  border-bottom: 1px solid var(--divider);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--muted);
}

.data-table tr:last-child td {
  border-bottom: none;
}

.cell-year {
  width: 60px;
  color: var(--accent);
  opacity: 0.8;
}

.cell-award {
  color: var(--text);
}

/* Project List (Soil) - Spotlight Animation */
.project-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  perspective: 1000px;
}

.project-item {
  position: relative;
  display: block; /* Ensure anchor behaves like block */
  padding: 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer; /* Change to pointer */
  text-decoration: none; /* Remove underline for links */
}

/* Hover State: Lift & Glow */
.project-item:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: var(--accent);
  box-shadow: 
    0 10px 30px -10px rgba(0, 0, 0, 0.3),
    0 0 0 1px var(--accent-glow);
}

/* Spotlight Gradient Overlay */
.project-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  opacity: 0; /* Hidden by default */
  transition: opacity 0.5s;
  pointer-events: none;
  z-index: 1;
}

.project-item:hover::before {
  opacity: 1;
}

.project-head {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Ensure wrapping on small screens */
  gap: 0.5rem;     /* Gap when wrapped */
  font-family: var(--font-mono);
  margin-bottom: 0.5em;
}

.project-name {
  color: var(--text);
  font-weight: 700;
  font-size: 1.1rem;
  transition: color 0.3s;
  white-space: normal; /* Allow text wrapping */
}

.project-item:hover .project-name {
  color: var(--accent);
}

.project-stat {
  font-size: 0.75rem;
  padding: 0.25em 0.75em;
  border-radius: 99px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--muted);
  transition: all 0.3s;
}

.project-item:hover .project-stat {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.project-desc {
  position: relative;
  z-index: 2;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  transition: color 0.3s;
}

.project-item:hover .project-desc {
  color: var(--text);
}

/* Alumni Cloud (Legacy) */
.alumni-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em 1em;
  margin-bottom: var(--space-md);
}

.alumni-cloud span {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.legacy-note {
  font-size: 0.875rem;
  color: var(--muted);
  font-style: italic;
  opacity: 0.6;
}

  /* Responsive */
  @media (min-width: 1024px) {
    .impact-col--peaks {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 768px) {
    .impact-grid {
      grid-template-columns: 1fr;
    }
    
    .project-item {
      padding: 1rem; /* Compact padding on mobile */
    }
    
    .achievements__title {
      font-size: 2.5rem; /* Smaller title on mobile */
    }
  }
</style>
