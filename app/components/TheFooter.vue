<template>
  <footer class="footer">
    <div class="footer__container">
      
      <div class="footer__main">
        <span class="footer__brand">云飞扬社团 YFY</span>
        <span class="footer__divider">·</span>
        <span class="footer__info">Est. 2014</span>
        <span class="footer__divider">·</span>
        <span class="footer__info">Guided by Prof. Chen Ke</span>
      </div>

      <p class="footer__tagline">We build by learning.</p>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 10vh 0 8vh; /* More bottom space for "landing" feel */
  background-color: var(--bg);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-align: center;
  opacity: 0.6;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: center;
}

.footer__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  align-items: center;
}

.footer__brand {
  color: var(--text);
  font-weight: 500;
}

.footer__divider {
  opacity: 0.3;
}

.footer__tagline {
  font-family: var(--font-body); /* Slightly different feel for the quote */
  font-style: italic;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer__main {
    flex-direction: column;
    gap: 0.25em;
  }
  
  .footer__divider {
    display: none;
  }
}
</style>
