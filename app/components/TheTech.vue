<template>
  <section id="tech" class="tech-section">
    <div class="tech__container">
      
      <!-- Section Header -->
      <div class="tech__header">
        <h2 class="tech__title">Tech Tracks.</h2>
        <p class="tech__subtitle">Find your path.</p>
        <p class="tech__description">
          We don't just learn languages. <br>
          We master domains.
        </p>
      </div>

      <!-- Tracks Grid -->
      <div class="tech__tracks">
        
        <!-- Track 1: Cloud Native -->
        <div class="track-card">
          <div class="track__header">
            <span class="track__number">01</span>
            <h3 class="track__title">Cloud Native</h3>
          </div>
          <p class="track__position">The Backbone</p>
          <div class="track__content">
            <p class="track__desc">
              Building scalable, high-availability digital foundations.
            </p>
            <div class="track__meta">
              <span class="meta-label">Keywords:</span>
              <ul class="meta-list">
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Go</li>
                <li>Microservices</li>
              </ul>
            </div>
            <div class="track__goal">
              <span class="goal-label">Growth Goal:</span>
              <span class="goal-value">System Architect</span>
            </div>
          </div>
        </div>

        <!-- Track 2: Intelligence -->
        <div class="track-card">
          <div class="track__header">
            <span class="track__number">02</span>
            <h3 class="track__title">Intelligence</h3>
          </div>
          <p class="track__position">The Frontier</p>
          <div class="track__content">
            <p class="track__desc">
              Exploring the boundaries of Generative AI and LLMs.
            </p>
            <div class="track__meta">
              <span class="meta-label">Keywords:</span>
              <ul class="meta-list">
                <li>Transformers</li>
                <li>RAG</li>
                <li>PyTorch</li>
                <li>Agents</li>
              </ul>
            </div>
            <div class="track__goal">
              <span class="goal-label">Growth Goal:</span>
              <span class="goal-value">AI Engineer</span>
            </div>
          </div>
        </div>

        <!-- Track 3: Modern Engineering -->
        <div class="track-card">
          <div class="track__header">
            <span class="track__number">03</span>
            <h3 class="track__title">Modern Engineering</h3>
          </div>
          <p class="track__position">The Craft</p>
          <div class="track__content">
            <p class="track__desc">
              Crafting extreme experiences and elegant code.
            </p>
            <div class="track__meta">
              <span class="meta-label">Keywords:</span>
              <ul class="meta-list">
                <li>Next.js</li>
                <li>Rust</li>
                <li>Design Systems</li>
                <li>Performance</li>
              </ul>
            </div>
            <div class="track__goal">
              <span class="goal-label">Growth Goal:</span>
              <span class="goal-value">Full-stack Maker</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

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
}

/* Header */
.tech__header {
  margin-bottom: 10vh;
}

.tech__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1;
  color: var(--text);
  margin-bottom: var(--space-xs);
}

.tech__subtitle {
  font-family: var(--font-body);
  font-size: 1.25rem;
  color: var(--muted);
  margin-bottom: var(--space-md);
}

.tech__description {
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--text);
  padding-left: var(--space-md);
  border-left: 2px solid var(--accent);
}

/* Grid Layout */
.tech__tracks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
}

/* Card Style */
.track-card {
  background: var(--bg-elevated);
  border: 1px solid var(--divider);
  padding: var(--space-md);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.track-card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
}

.track__header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
}

.track__number {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--muted);
  opacity: 0.5;
}

.track__title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text);
}

.track__position {
  font-family: var(--font-body);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: var(--space-md);
}

.track__desc {
  color: var(--muted);
  margin-bottom: var(--space-md);
  min-height: 3em;
}

/* Meta Data */
.track__meta {
  margin-bottom: var(--space-md);
}

.meta-label,
.goal-label {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  opacity: 0.6;
  margin-bottom: 0.5em;
}

.meta-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.meta-list li {
  font-size: 0.875rem;
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2em 0.6em;
  border-radius: 4px;
}

.goal-value {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text);
  font-weight: 500;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  .tech__tracks {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  
  .tech__description {
    font-size: 1.25rem;
  }
}
</style>
