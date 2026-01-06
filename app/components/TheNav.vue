<template>
  <nav class="global-nav" :class="{ 'is-scrolled': isScrolled }">
    <div class="nav__container">
      
      <!-- Logo (Left) -->
      <a href="#hero" class="nav__logo" @click.prevent="scrollTo('#hero'); toggleBlueprint()">
        YFY
      </a>

      <!-- Floating Glass Pill (Right) -->
      <div class="nav-pill">
        <div class="nav__links">
          <a href="#about" class="nav__link" @click.prevent="scrollTo('#about')">About</a>
          <a href="#tech" class="nav__link" @click.prevent="scrollTo('#tech')">Tech</a>
          <a href="#impact" class="nav__link" @click.prevent="scrollTo('#impact')">Impact</a>
          <a href="#join" class="nav__link" @click.prevent="scrollTo('#join')">Join</a>
        </div>
        <div class="nav__divider"></div>
        <ThemeToggle />
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollTo = (selector: string) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const clicks = ref(0)
let clickTimer: ReturnType<typeof setTimeout> | null = null

const toggleBlueprint = () => {
  clicks.value++
  if (clicks.value >= 5) {
    document.body.classList.add('mode-blueprint')
    clicks.value = 0
    setTimeout(() => {
      document.body.classList.remove('mode-blueprint')
    }, 6000)
  }
  if (clickTimer) clearTimeout(clickTimer)
  clickTimer = setTimeout(() => { clicks.value = 0 }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (clickTimer) clearTimeout(clickTimer)
})
</script>

<style scoped>
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding-top: var(--space-sm);
  transition: transform 0.3s ease;
}

.nav__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  padding-left: 8vw;
  
  /* 2K Optimization */
  @media (min-width: 1921px) {
    max-width: 2000px;
    padding-left: 10vw;
  }
  display: flex;
  align-items: flex-start; /* Align to top to allow pill spacing */
  justify-content: space-between;
  height: auto; /* Let content dictate height */
}

/* Logo */
.nav__logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: var(--text);
  text-decoration: none;
  padding: 0.75rem 0; /* Align with pill center conceptually */
  transition: opacity 0.2s;
  mix-blend-mode: difference; /* Ensure visibility on light/dark headers */
  color: var(--bg); /* Inverted because of difference mode */
}

/* Floating Pill */
.nav-pill {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem;
  
  /* Glass Effect using Global Variables */
  background: var(--bg-nav-pill);
  border: 1px solid var(--border-nav-pill);
  box-shadow: var(--shadow-nav-pill);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  border-radius: 999px;
  
  transition: 
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* Hover States now rely on variables or simplified overrides if needed */
.nav-pill:hover {
  box-shadow: 
    0 8px 16px -4px rgba(0, 0, 0, 0.2);
  /* We can keep a specific hover border or use a var if strictness needed */
  border-color: rgba(255, 255, 255, 0.2);
}

:global(html.light-mode) .nav-pill:hover {
  border-color: var(--accent-glow);
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.08),
    0 10px 24px -4px rgba(0, 0, 0, 0.08);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav__link {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.nav__link:hover {
  color: var(--text);
  background-color: var(--bg-elevated); /* Pill hover effect */
}

.nav__divider {
  width: 1px;
  height: 24px;
  background-color: var(--divider);
}

/* Responsive */
@media (max-width: 768px) {
  .global-nav {
    padding-top: var(--space-xs);
  }
  
  .nav__container {
    padding: 0 var(--space-md);
    align-items: center;
  }

  .nav__logo {
    font-size: 1.25rem;
    mix-blend-mode: normal;
    color: var(--text);
  }

  .nav-pill {
    padding: 0.35rem 0.75rem;
    gap: 0.75rem;
  }

  .nav__link {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
  }
  
  .nav__divider {
    height: 16px;
  }
}
</style>
