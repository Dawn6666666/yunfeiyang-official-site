<template>
  <div 
    class="cert-carousel" 
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    ref="carouselRef"
  >
    <!-- Scroll Track (Double content for loop) -->
    <div 
      class="carousel-track" 
      ref="trackRef"
      :style="{ transform: `translate3d(${currentOffset}px, 0, 0)` }"
    >
      <!-- Original Set -->
      <div 
        v-for="cert in certs" 
        :key="cert.id"
        class="cert-card"
        @click="openModal(cert)"
        role="button"
        tabindex="0"
      >
        <div class="cert-card__img-box">
          <img :src="cert.image" :alt="cert.title" loading="lazy" />
          <div class="cert-card__overlay">
            <span class="cert-card__action">View</span>
          </div>
        </div>
        <div class="cert-card__info">
          <div class="cert-card__award">{{ cert.award }}</div>
          <div class="cert-card__title">{{ cert.title }}</div>
          <div class="cert-card__year">{{ cert.year }}</div>
        </div>
      </div>

      <!-- Clone Set (For infinite loop) -->
      <div 
        v-for="cert in certs" 
        :key="`clone-${cert.id}`"
        class="cert-card"
        @click="openModal(cert)"
        role="button"
        tabindex="-1"
      >
        <div class="cert-card__img-box">
          <img :src="cert.image" :alt="cert.title" loading="lazy" />
          <div class="cert-card__overlay">
            <span class="cert-card__action">View</span>
          </div>
        </div>
        <div class="cert-card__info">
          <div class="cert-card__award">{{ cert.award }}</div>
          <div class="cert-card__title">{{ cert.title }}</div>
          <div class="cert-card__year">{{ cert.year }}</div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <CertificateModal 
        v-if="selectedCert" 
        :cert="selectedCert" 
        @close="selectedCert = null" 
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import certsData from '../../content/certs.json'
import CertificateModal from './CertificateModal.vue'

const certs = ref(certsData)
const selectedCert = ref<typeof certsData[0] | null>(null)
const carouselRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)

// Animation State
const currentOffset = ref(0)
const isHovered = ref(false)
let animationId = 0

// Config
const BASE_SPEED = 0.5 // Pixels per frame
const CARD_WIDTH = 300 // 280px + 20px gap

// Scroll Velocity Calculation
let lastScrollY = 0
let scrollVelocity = 0
let velocityTimeout: ReturnType<typeof setTimeout>

const openModal = (cert: typeof certsData[0]) => {
  selectedCert.value = cert
}

const update = () => {
  if (!trackRef.value) return

  // Calculate total width of one set
  const totalWidth = certs.value.length * CARD_WIDTH

  // Determine effective speed
  // Default: Move Left (negative direction)
  // Scroll Down (positive velocity): Move Faster Left (more negative)
  // Scroll Up (negative velocity): Move Right (positive)
  
  let speed = BASE_SPEED
  
  // Apply velocity factor (Damping: 0.1)
  // If scrolling down (+), we want to speed up left movement (add positive to base?)
  // Actually, standard Marquee moves Left (-x).
  // Scroll Down -> Speed Up -> More negative.
  // Scroll Up -> Reverse -> Positive.
  
  // Base movement is -BASE_SPEED
  let move = -BASE_SPEED

  if (Math.abs(scrollVelocity) > 0.1) {
    // If scrolling down (velocity > 0), add to speed (move faster left)
    // If scrolling up (velocity < 0), subtract (move right)
    move -= scrollVelocity * 0.2
  }

  // Freeze on hover (unless scrolling fast)
  if (isHovered.value && Math.abs(scrollVelocity) < 1) {
    move = 0
  }

  // Apply movement
  currentOffset.value += move

  // Loop Logic
  // If we moved too far left (beyond -totalWidth), instantly jump back to 0
  if (currentOffset.value <= -totalWidth) {
    currentOffset.value += totalWidth
  }
  // If we moved too far right (beyond 0), instantly jump back to -totalWidth
  if (currentOffset.value > 0) {
    currentOffset.value -= totalWidth
  }

  // Decay velocity
  scrollVelocity *= 0.95

  animationId = requestAnimationFrame(update)
}

const handleScroll = () => {
  const currentY = window.scrollY
  const delta = currentY - lastScrollY
  scrollVelocity = delta
  lastScrollY = currentY

  // Reset velocity to 0 after scroll stops
  clearTimeout(velocityTimeout)
  velocityTimeout = setTimeout(() => {
    scrollVelocity = 0
  }, 100)
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
  animationId = requestAnimationFrame(update)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.cert-carousel {
  position: relative;
  overflow: hidden;
  /* Visual fade masks on sides */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  padding: var(--space-sm) 0;
}

.carousel-track {
  display: flex;
  gap: 20px; /* Must match CARD_WIDTH gap calculation */
  width: max-content;
  will-change: transform;
}

.cert-card {
  flex: 0 0 280px; /* Fixed width */
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  user-select: none;
}

.cert-card:hover {
  transform: translateY(-5px);
}

.cert-card__img-box {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
}

.cert-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cert-card:hover .cert-card__overlay {
  opacity: 1;
}

.cert-card__action {
  color: #fff;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.cert-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* Prevent drag */
}

.cert-card__info {
  margin-top: 1rem;
}

.cert-card__award {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.cert-card__title {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 0.25rem;
}

.cert-card__year {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Modal Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
