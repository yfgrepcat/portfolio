<template>
  <div class="sustainability-page">
    <v-container>
      <div class="sustainability-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="sustainability-title">{{ $t('sustainability.title') }}</h1>
      </div>
      
      <div class="sustainability-content">
        <p class="sustainability-description">{{ $t('sustainability.description') }}</p>


        <!-- Educational Initiatives -->
        <div class="education-section">
          <h2 class="section-title">{{ $t('sustainability.education.title') }}</h2>
          <p class="section-intro">{{ $t('sustainability.education.intro') }}</p>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              v-for="(initiative, index) in educationItems" 
              :key="index"
            >
              <v-card class="education-card" elevation="2">
                <v-card-text>
                  <div class="education-header">
                    <v-icon :icon="initiative.icon" size="32" :color="initiative.color" />
                    <div class="education-info">
                      <h3 class="education-title">{{ initiative.title }}</h3>
                      <div class="education-target">{{ initiative.target }}</div>
                    </div>
                  </div>
                  <p class="education-description">{{ initiative.description }}</p>
                  <div class="education-activities">
                    <div class="activities-label">Activities:</div>
                    <ul class="activities-list">
                      <li v-for="activity in initiative.activities" :key="activity">{{ activity }}</li>
                    </ul>
                  </div>
                  <div class="education-reflection">
                    <strong>Personal reflection:</strong>
                    <p class="reflection-text">{{ initiative.reflection }}</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Sustainable Practices -->
        <div class="practices-section">
          <h2 class="section-title">{{ $t('sustainability.practices.title') }}</h2>
          <div class="practices-grid">
            <v-card 
              v-for="(practice, index) in practiceItems" 
              :key="index"
              class="practice-card"
              elevation="1"
            >
              <v-card-text class="practice-content">
                <div class="practice-icon">
                  <v-icon :icon="practice.icon" size="28" :color="practice.color" />
                </div>
                <div class="practice-text">
                  <h4 class="practice-title">{{ practice.title }}</h4>
                  <p class="practice-description">{{ practice.description }}</p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>

        <!-- Community Service -->
        <div class="service-section">
          <h2 class="section-title">{{ $t('sustainability.community.title') }}</h2>
          <div class="service-timeline">
            <div 
              v-for="(service, index) in communityItems" 
              :key="index"
              class="service-item"
            >
              <div class="service-icon">
                <v-icon :icon="service.icon" size="24" color="white" />
              </div>
              <div class="service-content">
                <div class="service-header">
                  <h3 class="service-title">{{ service.title }}</h3>
                  <div class="service-duration">{{ service.duration }}</div>
                </div>
                <div class="service-organization">{{ service.organization }}</div>
                <p class="service-description">{{ service.description }}</p>
                <div class="service-impact">
                  <strong>What I learned:</strong>
                  <ul class="impact-list">
                    <li v-for="lesson in service.lessons" :key="lesson">{{ lesson }}</li>
                  </ul>
                </div>
                <div class="service-highlights">
                  <div 
                    v-for="highlight in service.highlights" 
                    :key="highlight"
                    class="highlight-item"
                  >
                    <v-icon icon="mdi-heart" size="16" color="#4caf50" />
                    <span>{{ highlight }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Initiative, Practice, Service } from '@/types'

const { t, tm } = useI18n()

const educationItems = computed(() => tm('sustainability.education.items') as Initiative[])
const practiceItems = computed(() => tm('sustainability.practices.items') as Practice[])
const communityItems = computed(() => tm('sustainability.community.items') as Service[])

onMounted(() => {
  console.log('Education items count:', educationItems.value.length)
  console.log('Practice items count:', practiceItems.value.length)
  console.log('Community items count:', communityItems.value.length)
})
</script>

<style scoped>
.sustainability-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
  position: relative;
}

.sustainability-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234caf50' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.sustainability-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.sustainability-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.sustainability-description {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.back-btn {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Values Section */
.values-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.value-card {
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.value-icon {
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
  text-align: center;
}

.value-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  text-align: center;
}

/* Community Service */
.service-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.service-timeline {
  max-width: 900px;
  margin: 0 auto;
}

.service-item {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: #4caf50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.service-content {
  flex: 1;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
}

.service-duration {
  color: #4caf50;
  font-weight: 500;
  font-size: 0.9rem;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.service-organization {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-bottom: 1rem;
}

.service-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-impact {
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
}

.impact-list {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.impact-list li {
  margin-bottom: 0.25rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  line-height: 1.4;
}

.service-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
}

/* Environmental Actions */
.environment-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.environment-card {
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
}

.environment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.environment-icon {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: rgba(76, 175, 80, 0.05);
  border-radius: 16px;
}

.environment-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
  text-align: center;
}

.environment-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.examples-label {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.75rem;
  text-align: center;
}

.examples-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.example-chip {
  margin-bottom: 0.5rem;
}

/* Educational Initiatives */
.education-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.education-card {
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.education-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.education-info {
  flex: 1;
}

.education-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.education-target {
  color: #4caf50;
  font-weight: 500;
  font-size: 0.9rem;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  display: inline-block;
}

.education-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.activities-label {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.activities-list {
  color: rgba(0, 0, 0, 0.6);
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.activities-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.education-reflection {
  color: rgba(0, 0, 0, 0.7);
}

.reflection-text {
  margin-top: 0.5rem;
  font-style: italic;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
}

/* Sustainable Practices */
.practices-section {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.practice-card {
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
}

.practice-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.practice-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem !important;
}

.practice-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.practice-text {
  flex: 1;
}

.practice-title {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.practice-description {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .sustainability-title {
    font-size: 2rem;
  }
  
  .service-item {
    flex-direction: column;
    text-align: center;
  }
  
  .service-header {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .education-header {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .practice-content {
    flex-direction: column;
    text-align: center;
  }
  
  .practices-grid {
    grid-template-columns: 1fr;
  }
}
</style>