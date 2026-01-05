<template>
  <section class="achievements-section">
    <div class="achievements__container">
      
      <!-- Section Header -->
      <header class="achievements__header">
        <h2 class="achievements__title">Impact.</h2>
      </header>
      
      <div class="impact-grid">
        
        <!-- Dimension 1: The Peaks -->
        <div class="impact-col impact-col--peaks">
          <h3 class="col-title">The Peaks</h3>
          <table class="data-table">
            <tbody>
              <tr>
                <td class="cell-year">2023</td>
                <td class="cell-award">"Internet+" National Gold</td>
              </tr>
              <tr>
                <td class="cell-year">2023</td>
                <td class="cell-award">Challenge Cup National Silver</td>
              </tr>
              <tr>
                <td class="cell-year">2022</td>
                <td class="cell-award">ACM-ICPC Regional Silver</td>
              </tr>
              <tr>
                <td class="cell-year">2021</td>
                <td class="cell-award">Mathematical Modeling State 1st</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Dimension 2: The Soil -->
        <div class="impact-col impact-col--soil">
          <h3 class="col-title">The Soil</h3>
          <div class="project-list">
            <div class="project-item">
              <div class="project-head">
                <span class="project-name">Campus OS</span>
                <span class="project-stat">2.4k★</span>
              </div>
              <p class="project-desc">Open-source campus service solution.</p>
            </div>
            <div class="project-item">
              <div class="project-head">
                <span class="project-name">YFY Course</span>
                <span class="project-stat">15k Users</span>
              </div>
              <p class="project-desc">Course selection helper for students.</p>
            </div>
          </div>
        </div>

        <!-- Dimension 3: The Legacy -->
        <div class="impact-col impact-col--legacy">
          <h3 class="col-title">The Legacy</h3>
          <div class="alumni-cloud">
            <span>ByteDance</span>
            <span>Tencent</span>
            <span>Alibaba</span>
            <span>Microsoft</span>
            <span>CMU</span>
            <span>Nyu</span>
            <span>ZJU</span>
          </div>
          <p class="legacy-note">Our members build the future everywhere.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-section {
  position: relative;
  z-index: 10;
  padding: 15vh 0;
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
  font-weight: 500;
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

/* Project List (Soil) */
.project-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.project-item {
  border-left: 2px solid var(--divider);
  padding-left: var(--space-sm);
  transition: border-color 0.3s;
}

.project-item:hover {
  border-color: var(--accent);
}

.project-head {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  margin-bottom: 0.25em;
}

.project-name {
  color: var(--text);
  font-weight: 600;
}

.project-stat {
  color: var(--accent);
}

.project-desc {
  font-size: 0.875rem;
  color: var(--muted);
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
@media (max-width: 768px) {
  .impact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>
