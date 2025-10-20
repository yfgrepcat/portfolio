<template>
  <section class="hero">
    <v-container class="hero__container">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="8" class="text-center">
          <!-- Blog Button -->
          <!-- <v-btn
            color="secondary"
            variant="elevated"
            size="large"
            prepend-icon="mdi-web"
            class="blog-btn mt-4"
            block
          >
            {{ $t('hero.blog.label') }}
          </v-btn> -->

          <!-- Profile -->
          <div class="hero__profile">
            <v-avatar size="120" class="hero__avatar">
              <div class="hero__avatar-content">
                <span class="hero__initials">YF</span>
              </div>
            </v-avatar>
            <div class="hero__status">
              <div class="hero__status-indicator" />
              <span class="hero__status-text">{{ $t('hero.status') }}</span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="hero__content">
            <h1 class="hero__name">{{ $t('hero.name') }}</h1>
            <h2 class="hero__title">{{ $t('hero.title') }}</h2>
            <p class="hero__description">{{ $t('hero.description') }}</p>
            
            <!-- Skills -->
            <div class="hero__skills">
              <span class="hero__skill">DevOps</span>
              <span class="hero__skill">Network</span>
              <span class="hero__skill">Security</span>
            </div>
          </div>
          
          <!-- Additional Buttons -->
          <div class="additional-buttons mt-6">
            <div class="cv-buttons">
              <v-btn
                color="primary"
                variant="tonal"
                size="large"
                prepend-icon="mdi-file-document"
                class="cv-btn mr-2"
                :href="$t('hero.cv.english')"
                target="_blank"
              >
                {{ $t('hero.cv.englishLabel') }}
              </v-btn>
              
              <v-btn
                color="primary"
                variant="tonal"
                size="large"
                prepend-icon="mdi-file-document"
                class="cv-btn"
                :href="$t('hero.cv.french')"
                target="_blank"
              >
                {{ $t('hero.cv.frenchLabel') }}
              </v-btn>
            </div>

            <!-- Actions -->
            <div class="hero__actions">
              <v-btn
                color="primary"
                size="large"
                class="hero__btn-primary"
                href="mailto:work@francoispro.com"
                prepend-icon="mdi-send"
              >
                {{ $t('hero.buttons.contact') }}
              </v-btn>
              
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                class="hero__btn-secondary"
                href="#sections"
                prepend-icon="mdi-eye"
              >
                {{ $t('hero.buttons.work') }}
              </v-btn>
            </div>

          </div>
          
          <!-- Language Toggle -->
          <div class="hero__language">
            <v-btn-toggle 
              v-model="currentLang" 
              mandatory 
              class="hero__language-toggle"
              color="primary"
              density="compact"
            >
              <v-btn 
                @click="setLocale('en')" 
                size="small"
                :class="{ 'hero__language-btn--active': locale === 'en' }"
              >
                EN
              </v-btn>
              <v-btn 
                @click="setLocale('fr')" 
                size="small"
                :class="{ 'hero__language-btn--active': locale === 'fr' }"
              >
                FR
              </v-btn>
            </v-btn-toggle>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="hero__scroll">
            <v-btn
              icon="mdi-chevron-down"
              variant="text"
              size="small"
              class="hero__scroll-btn"
              href="#sections"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Use Vue I18n
const { locale, t } = useI18n()

const currentLang = computed(() => locale.value === 'en' ? 0 : 1)

const setLocale = (lang: 'en' | 'fr') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  console.log('Language changed to:', lang)
}

onMounted(() => {
  // Load saved language from localStorage
  const saved = localStorage.getItem('locale') as 'en' | 'fr'
  if (saved && (saved === 'en' || saved === 'fr')) {
    locale.value = saved
  }
  console.log('Hero component mounted with language:', locale.value)
})
</script>

<style scoped>
/* Keep all your existing styles - they're perfect! */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%);
  display: flex;
  align-items: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234285f4' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.hero__container {
  position: relative;
  z-index: 1;
}

/* Profile Section */
.hero__profile {
  margin-bottom: 3rem;
  animation: slideUp 0.8s ease-out;
}

.hero__avatar {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.hero__avatar:hover {
  transform: scale(1.05);
}

.hero__avatar-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1976d2, #2196f3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__initials {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hero__status-indicator {
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero__status-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
}

/* Content Section */
.hero__content {
  margin-bottom: 3rem;
}

.hero__name {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
  animation: slideUp 0.8s ease-out 0.2s both;
}

.hero__title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1.5rem;
  animation: slideUp 0.8s ease-out 0.4s both;
}

.hero__description {
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.6);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  animation: slideUp 0.8s ease-out 0.6s both;
}

.hero__skills {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  animation: slideUp 0.8s ease-out 0.8s both;
  flex-wrap: wrap;
}

.hero__skill {
  padding: 0.5rem 1rem;
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Actions Section */
.hero__actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: slideUp 0.8s ease-out 1s both;
  flex-wrap: wrap;
}

.hero__btn-primary,
.hero__btn-secondary {
  min-width: 160px;
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero__btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(25, 118, 210, 0.3);
}

.hero__btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(25, 118, 210, 0.15);
}

/* Additional Buttons Section - Updated */
.additional-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out 1s both;
}

.cv-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.cv-btn {
  min-width: 180px;
  font-weight: 500;
}

.blog-btn {
  width: 100%;
  max-width: 400px;
  background-color: #4caf50 !important;
  color: white !important;
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
}

/* Language Section */
.hero__language {
  margin-bottom: 2rem;
  animation: slideUp 0.8s ease-out 1.2s both;
}

.hero__language-toggle {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hero__language-btn--active {
  background: #1976d2 !important;
  color: white !important;
}

/* Scroll Section */
.hero__scroll {
  animation: slideUp 0.8s ease-out 1.4s both;
}

.hero__scroll-btn {
  color: rgba(0, 0, 0, 0.6);
  animation: bounce 2s infinite;
}

.hero__scroll-btn:hover {
  color: #1976d2;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

/* Responsive Design */
@media (max-width: 600px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero__btn-primary,
  .hero__btn-secondary {
    width: 100%;
    max-width: 280px;
  }
  
  .hero__skills {
    justify-content: center;
  }

  .cv-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cv-btn {
    width: 100%;
    max-width: 280px;
    margin-bottom: 0.75rem;
  }
  
  .blog-btn {
    max-width: 240px;
  }
}

@media (min-width: 960px) {
  .hero__actions {
    gap: 2rem;
  }
}
</style>