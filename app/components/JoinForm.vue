<template>
  <section id="join" class="join-section">
    <div class="join__container">
      
      <!-- Text Side -->
      <div class="join__content reveal">
        <h2 class="join__title">Join the <br><span class="text-accent">Revolution.</span></h2>
        <p class="join__desc">
          We are looking for passionate builders, designers, and dreamers. 
          Whether you are a coding wizard or a design enthusiast, there is a place for you here.
        </p>
        
        <ul class="join__benefits">
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Access to exclusive workshops
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Mentorship from industry alumni
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Real-world project experience
          </li>
        </ul>
      </div>

      <!-- Form Side -->
      <div class="join__form-wrapper reveal" style="transition-delay: 0.1s">
        <form 
          class="join__form" 
          @submit.prevent="handleSubmit"
          action="https://formspree.io/f/mqakpeag" 
          method="POST"
        >
          <!-- Name -->
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Your Name"
              :class="{ 'has-error': errors.name }"
              @blur="validateField('name')"
            />
            <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="student@university.edu.cn"
              :class="{ 'has-error': errors.email }"
              @blur="validateField('email')"
            />
            <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <!-- Track -->
          <div class="form-group">
            <label for="track">Interested Track</label>
            <div class="select-wrapper">
              <select id="track" v-model="form.track">
                <option value="dev">Software Development</option>
                <option value="design">UI/UX Design</option>
                <option value="ai">AI & Algorithms</option>
                <option value="hardware">IoT & Hardware</option>
                <option value="media">New Media Operations</option>
              </select>
              <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          <!-- Intro -->
          <div class="form-group">
            <label for="intro">Self Intro</label>
            <textarea 
              id="intro" 
              v-model="form.intro" 
              rows="4"
              placeholder="Tell us about yourself and why you want to join..."
            ></textarea>
          </div>

          <!-- Actions -->
          <div class="form-actions">
            <button type="submit" class="btn btn--submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Apply Now</span>
              <span v-else>Sending...</span>
            </button>
            <p v-if="submitStatus" class="submit-status" :class="submitStatus.type">
              {{ submitStatus.message }}
            </p>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  track: 'dev',
  intro: ''
})

const errors = reactive({
  name: '',
  email: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

const validateField = (field: 'name' | 'email') => {
  if (field === 'name') {
    errors.name = form.name.length < 2 ? 'Name is too short.' : ''
  }
  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.email = !emailRegex.test(form.email) ? 'Invalid email format.' : ''
  }
}

const handleSubmit = async (e: Event) => {
  // Validate all
  validateField('name')
  validateField('email')
  
  if (errors.name || errors.email) return

  isSubmitting.value = true
  submitStatus.value = null

  // Simulate submission or use Formspree via fetch
  // Use Formspree fallback behavior:
  // If we wanted pure AJAX:
  try {
    const response = await fetch('https://formspree.io/f/mqakpeag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    
    if (response.ok) {
      submitStatus.value = { type: 'success', message: 'Application sent successfully!' }
      form.name = ''
      form.email = ''
      form.intro = ''
    } else {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    // Fallback to mailto if API fails (or dev mode without network)
    window.location.href = `mailto:contact@yunfeiyang.club?subject=Application from ${form.name}&body=${encodeURIComponent(JSON.stringify(form, null, 2))}`
    submitStatus.value = { type: 'success', message: 'Client opened. Please send the email.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.join-section {
  padding: 15vh 0;
  background: var(--bg);
  position: relative;
  z-index: 10;
}

.join__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

/* Content Side */
.join__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.text-accent {
  color: var(--accent);
}

.join__desc {
  font-size: 1.125rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  max-width: 50ch;
}

.join__benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.join__benefits li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text);
  font-weight: 500;
}

.join__benefits .icon {
  width: 20px;
  height: 20px;
  color: var(--accent);
}

/* Form Side */
.join__form-wrapper {
  background: var(--bg-elevated);
  padding: var(--space-md) var(--space-lg);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
}

.join__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  font-family: var(--font-display);
}

input, textarea, select {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: all 0.2s;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-glow);
}

input.has-error {
  border-color: #ef4444;
}

.error-msg {
  color: #ef4444;
  font-size: 0.75rem;
}

/* Custom Select */
.select-wrapper {
  position: relative;
}

.select-wrapper select {
  width: 100%;
  appearance: none;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--muted);
  pointer-events: none;
}

/* Submit Btn */
.btn--submit {
  width: 100%;
  padding: 1rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn--submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-status {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
}

.submit-status.success { color: #10b981; }
.submit-status.error { color: #ef4444; }

/* Responsive */
@media (max-width: 900px) {
  .join__container {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .join__form-wrapper {
    padding: var(--space-md);
  }
}
</style>
