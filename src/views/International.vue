<template>
  <div class="international-page">
    <v-container>
      <div class="international-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="international-title">{{ $t('international.title') }}</h1>
      </div>
      
      <div class="international-content">
        <p class="international-description">{{ $t('international.description') }}</p>

        <!-- Language Proficiency -->
        <div class="languages-section">
          <h2 class="section-title">{{ $t('international.languages.title') }}</h2>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="(lang, index) in languageItems" 
              :key="index"
            >
              <v-card class="language-card" elevation="2">
                <v-card-text>
                  <div class="language-header">
                    <span class="language-flag">{{ lang.flag }}</span>
                    <div class="language-info">
                      <h3 class="language-name">{{ lang.language }}</h3>
                      <p class="language-level">{{ lang.level }}</p>
                    </div>
                  </div>
                  
                  <div class="proficiency-bar">
                    <v-progress-linear
                      :model-value="lang.proficiency"
                      color="success"
                      height="8"
                      rounded
                    />
                    <div class="proficiency-label">{{ lang.proficiency }}%</div>
                  </div>
                  
                  <p class="language-description">{{ lang.description }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- International Experiences -->
        <div class="experiences-section">
          <h2 class="section-title">{{ $t('international.experiences.title') }}</h2>
          <p class="overview-description">{{ $t('international.overview.description') }}</p>
          <div class="timeline">
            <div 
              class="timeline-item" 
              v-for="(item, index) in experienceItems" 
              :key="index"
            >
              <div class="timeline-marker">
                <span class="timeline-flag">{{ item.flag }}</span>
              </div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <div class="timeline-year">{{ item.year }}</div>
                  <div class="timeline-type">{{ item.type }}</div>
                </div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-location">📍 {{ item.location }}</p>
                <p class="timeline-duration">⏱️ {{ item.duration }}</p>
                <p class="timeline-description">{{ item.description }}</p>
                
                <div class="highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    <li v-for="highlight in item.highlights" :key="highlight">
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
                
                <div class="timeline-skills">
                  <v-chip 
                    v-for="skill in item.skills" 
                    :key="skill" 
                    size="small"
                    variant="outlined"
                    color="success"
                  >
                    {{ skill }}
                  </v-chip>
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

const { t, tm } = useI18n()

// Get translated data
const overviewStats = computed(() => tm('international.overview.stats'))
const experienceItems = computed(() => tm('international.experiences.items'))
const languageItems = computed(() => tm('international.languages.items'))
const culturalInsights = computed(() => tm('international.cultural.insights'))

// Map interaction
const showCountryInfo = (country: string) => {
  console.log(`Showing info for ${country}`)
  // You can add a modal or tooltip here showing country-specific information
}

onMounted(() => {
  console.log('International component mounted')
  console.log('Experience items count:', experienceItems.value.length)
  console.log('Language items count:', languageItems.value.length)
})
</script>

<style scoped>
.international-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
}

.international-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.international-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.international-description {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 3rem;
  text-align: center;
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
}

/* Overview Stats */
.overview-section {
  margin-bottom: 4rem;
}

.overview-description {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.stats-row {
  margin-top: 2rem;
}

.stat-card {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #4caf50;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.4;
}

/* Experiences Timeline */
.experiences-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  padding-left: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #4caf50;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -3rem;
  top: 0.5rem;
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  border: 3px solid #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.timeline-flag {
  font-size: 1.5rem;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.timeline-year {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4caf50;
}

.timeline-type {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
}

.timeline-location, .timeline-duration {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.highlights {
  margin-bottom: 1rem;
}

.highlights h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
}

.highlights ul {
  padding-left: 1.2rem;
}

.highlights li {
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Languages Section */
.languages-section {
  margin-bottom: 4rem;
}

.language-card {
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.language-card:hover {
  transform: translateY(-2px);
}

.language-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.language-flag {
  font-size: 2rem;
}

.language-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: rgba(0, 0, 0, 0.87);
}

.language-level {
  color: #4caf50;
  font-weight: 500;
  font-size: 0.9rem;
}

.proficiency-bar {
  position: relative;
  margin-bottom: 1rem;
}

.proficiency-label {
  position: absolute;
  right: 0;
  top: -1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
}

.language-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
}

/* Map Section */
.map-section {
  margin-bottom: 4rem;
}

.map-description {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
}

.map-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.map-container {
  position: relative;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
}

.embedded-map {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.country-pins {
  position: relative;
  width: 100%;
  height: 100%;
}

.country-pin {
  position: absolute;
  pointer-events: all;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.country-pin:hover {
  transform: scale(1.2);
}

.country-pin .flag {
  font-size: 1.8rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.pin-label {
  background: rgba(255, 255, 255, 0.95);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.25rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  color: rgba(0, 0, 0, 0.8);
}

/* Approximate positions for European countries */
.france { top: 60%; left: 45%; }
.germany { top: 40%; left: 55%; }
.spain { top: 75%; left: 35%; }
.italy { top: 70%; left: 55%; }

/* Cultural Insights */
.cultural-section {
  margin-bottom: 4rem;
}

.cultural-description {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.insight-card {
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.insight-card:hover {
  transform: translateY(-4px);
}

.insight-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
}

.insight-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
}

.insight-impact h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4caf50;
}

.insight-impact p {
  line-height: 1.5;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 768px) {
  .international-title {
    font-size: 2rem;
  }
  
  .timeline {
    padding-left: 2rem;
  }
  
  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .timeline-flag {
    font-size: 1.2rem;
  }
  
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .map-container {
    height: 280px;
  }
  
  .country-pin .flag {
    font-size: 1.4rem;
  }
}
</style>