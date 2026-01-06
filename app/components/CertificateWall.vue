<template>
  <div class="cert-wall">
    <div class="cert-grid">
      <div 
        v-for="(cert, index) in certs" 
        :key="cert.id"
        class="cert-item reveal"
        :style="{ transitionDelay: `${index * 0.1}s` }"
        @click="openModal(cert)"
        role="button"
        tabindex="0"
        @keydown.enter="openModal(cert)"
      >
        <div class="cert-item__img-box">
          <img :src="cert.image" :alt="cert.title" loading="lazy" />
          <div class="cert-item__overlay">
            <span class="cert-item__action">View Details</span>
          </div>
        </div>
        <div class="cert-item__info">
          <div class="cert-item__award">{{ cert.award }}</div>
          <div class="cert-item__title">{{ cert.title }}</div>
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
import { ref } from 'vue'
import certsData from '../../content/certs.json'
import CertificateModal from './CertificateModal.vue'

const certs = ref(certsData)
const selectedCert = ref<typeof certsData[0] | null>(null)

const openModal = (cert: typeof certsData[0]) => {
  selectedCert.value = cert
}
</script>

<style scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-md);
}

.cert-item {
  cursor: pointer;
  /* group hover handled by regular CSS */
}

.cert-item__img-box {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: transform 0.3s var(--ease-power3-out), box-shadow 0.3s ease;
}

.cert-item:hover .cert-item__img-box {
  transform: translateY(-5px);
  box-shadow: var(--shadow-card);
  border-color: var(--accent);
}

.cert-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.cert-item:hover img {
  transform: scale(1.05);
}

.cert-item__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cert-item:hover .cert-item__overlay {
  opacity: 1;
}

.cert-item__action {
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.cert-item__info {
  margin-top: 1rem;
}

.cert-item__award {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.cert-item__title {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.4;
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
