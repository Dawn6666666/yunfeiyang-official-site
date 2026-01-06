<template>
  <nav class="global-nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="nav__container">
      
      <!-- Logo / Home Anchor -->
      <a href="#hero" class="nav__logo" @click.prevent="scrollTo('#hero')">
        YFY
      </a>

      <!-- Menu Links -->
      <div class="nav__links">
        <a href="#about" class="nav__link" @click.prevent="scrollTo('#about')">About</a>
        <a href="#tech" class="nav__link" @click.prevent="scrollTo('#tech')">Tech</a>
        <a href="#impact" class="nav__link" @click.prevent="scrollTo('#impact')">Impact</a>
        <a href="#join" class="nav__link" @click.prevent="scrollTo('#join')">Join</a>
        <ThemeToggle />
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (selector: string) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Init check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  z-index: 100;
  transition: 
    background-color var(--duration-hover) var(--ease-power3-out),
    backdrop-filter var(--duration-hover) var(--ease-power3-out),
    border-bottom-color var(--duration-hover) var(--ease-power3-out);
  border-bottom: 1px solid transparent;
}

.global-nav.is-scrolled {
  background-color: var(--bg-overlay);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--divider);
}

.nav__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  padding-left: 8vw; /* Match Hero alignment */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav__logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: var(--text);
  position: relative;
  z-index: 2;
}

/* Links */
.nav__links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav__link {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--muted);
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav__link:hover {
  color: var(--text);
}

/* Responsive */
@media (max-width: 768px) {
  .nav__container {
    padding: 0 var(--space-md);
    height: 60px;
  }

  .nav__links {
    gap: var(--space-sm);
  }

  .nav__link {
    font-size: 0.75rem;
  }
}
</style>
