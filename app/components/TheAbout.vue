<template>
  <section id="about" class="about-section">
    <div class="about__container">
      
      <!-- L: Section Anchor (Temporarily inline for v1) -->
      <h2 class="about__anchor">About.</h2>

      <!-- R1: The Identity -->
      <div class="about__block about__block--identity">
        <p class="about__display-text">
          Not just a club. <br>
          <span class="highlight">A playground for future builders.</span>
        </p>
      </div>

      <!-- R2: The Origin -->
      <div class="about__block about__block--origin">
        <p class="about__body-text">
          Founded in 2014 under the guidance of Prof. Chen Ke, 
          we started as a small group of code enthusiasts.
        </p>
        <p class="about__body-text">
          Today, we are a community exploring the boundaries of 
          <span class="text-accent">Cloud</span>, 
          <span class="text-accent">AI</span>, and 
          <span class="text-accent">Modern Software</span>.
        </p>
      </div>

      <!-- R3: The Vibe -->
      <div class="about__block about__block--vibe">
        <ul class="vibe-list">
          <li class="vibe-item">[ Exploration ]</li>
          <li class="vibe-item">[ Growth ]</li>
          <li class="vibe-item">[ Passion ]</li>
        </ul>
        <p class="about__caption">
          No mandatory check-ins. Just pure love for technology.
        </p>
      </div>

    </div>
  </section>
</template>

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
