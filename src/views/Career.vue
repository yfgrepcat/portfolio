<template>
  <div class="career-page">
    <v-container>
      <div class="career-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="career-title">{{ $t('career.title') }}</h1>
      </div>
      
      <div class="career-content">
        <p class="career-description">{{ $t('career.description') }}</p>
        
        <!-- Current Position -->
        <div class="current-section">
          <h2 class="section-title">{{ $t('career.current.title') }}</h2>
          <v-card class="current-card" elevation="4">
            <v-card-text>
              <div class="current-header">
                <div class="current-info">
                  <h3 class="current-position">{{ $t('career.current.position') }}</h3>
                  <p class="current-company">{{ $t('career.current.company') }}</p>
                  <p class="current-duration">{{ $t('career.current.duration') }}</p>
                </div>
                <v-icon icon="mdi-briefcase" size="48" color="#1976d2" />
              </div>
              <p class="current-description">{{ $t('career.current.description') }}</p>
              
              <h4 class="responsibilities-title">Key Responsibilities:</h4>
              <ul class="responsibilities-list">
                <li v-for="responsibility in currentResponsibilities" :key="responsibility">
                  {{ responsibility }}
                </li>
              </ul>
              
              <div class="technologies">
                <h4 class="technologies-title">Technologies:</h4>
                <div class="tech-chips">
                  <v-chip 
                    v-for="tech in currentTechnologies" 
                    :key="tech"
                    color="primary"
                    variant="outlined"
                    size="small"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- Experience Timeline -->
        <div class="experience-section">
          <h2 class="section-title">{{ $t('career.experience.title') }}</h2>
          <div class="timeline">
            <div 
              class="timeline-item" 
              v-for="(item, index) in experienceItems" 
              :key="index"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <div class="timeline-year">{{ item.year }}</div>
                  <div class="timeline-type">{{ item.type }}</div>
                </div>
                <h3 class="timeline-position">{{ item.position }}</h3>
                <p class="timeline-company">{{ item.company }}</p>
                <p class="timeline-duration">{{ item.duration }}</p>
                <p class="timeline-description">{{ item.description }}</p>
                
                <div class="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li v-for="achievement in item.achievements" :key="achievement">
                      {{ achievement }}
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

        <!-- Skills Section -->
        <div class="skills-section">
          <h2 class="section-title">{{ $t('career.skills.title') }}</h2>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              v-for="(category, index) in skillCategories" 
              :key="index"
            >
              <v-card class="skill-card" elevation="2">
                <v-card-text>
                  <h3 class="skill-category-title">{{ category.name }}</h3>
                  <div class="skill-items">
                    <v-chip 
                      v-for="skill in category.items" 
                      :key="skill"
                      variant="tonal"
                      color="primary"
                      size="small"
                      class="skill-chip"
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Certifications -->
        <div class="certifications-section">
          <h2 class="section-title">{{ $t('career.certifications.title') }}</h2>
          <v-row>
            <v-col 
              cols="12" 
              md="4" 
              v-for="(cert, index) in certificationItems" 
              :key="index"
            >
              <v-card class="cert-card" elevation="2">
                <v-card-text>
                  <div class="cert-header">
                    <v-icon 
                      :icon="cert.status === 'Completed' || cert.status === 'Terminé' ? 'mdi-check-circle' : 'mdi-clock'" 
                      :color="cert.status === 'Completed' || cert.status === 'Terminé' ? 'success' : 'warning'" 
                      size="24"
                    />
                    <div class="cert-status">{{ cert.status }}</div>
                  </div>
                  <h3 class="cert-name">{{ cert.name }}</h3>
                  <p class="cert-issuer">{{ cert.issuer }}</p>
                  <p class="cert-date">{{ cert.date }}</p>
                  <p class="cert-description">{{ cert.description }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
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
const currentResponsibilities = computed(() => tm('career.current.responsibilities'))
const currentTechnologies = computed(() => tm('career.current.technologies'))
const experienceItems = computed(() => tm('career.experience.items'))
const skillCategories = computed(() => tm('career.skills.categories'))
const certificationItems = computed(() => tm('career.certifications.items'))

onMounted(() => {
  console.log('Career component mounted')
  console.log('Experience items count:', experienceItems.value.length)
  console.log('Skill categories count:', skillCategories.value.length)
})
</script>

<style scoped>
.career-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e3f2fd 0%, #f1f8e9 100%);
}

.career-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.career-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.career-description {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 3rem;
  text-align: center;
}

.back-btn {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 2rem;
  text-align: center;
}

/* Current Position */
.current-section {
  margin-bottom: 4rem;
}

.current-card {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.current-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.current-position {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.5rem;
}

.current-company {
  font-size: 1.1rem;
  color: #1976d2;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.current-duration {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.current-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.responsibilities-title, .technologies-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.87);
}

.responsibilities-list {
  margin-bottom: 1.5rem;
  padding-left: 1.2rem;
}

.responsibilities-list li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Experience Timeline */
.experience-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1976d2;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #1976d2;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
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
  color: #1976d2;
}

.timeline-type {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.timeline-position {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
}

.timeline-company {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.timeline-duration {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.timeline-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.achievements {
  margin-bottom: 1rem;
}

.achievements h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
}

.achievements ul {
  padding-left: 1.2rem;
}

.achievements li {
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Skills Section */
.skills-section {
  margin-bottom: 4rem;
}

.skill-card {
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.skill-category-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-chip {
  margin-bottom: 0.5rem;
}

/* Certifications */
.certifications-section {
  margin-bottom: 4rem;
}

.cert-card {
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.cert-status {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.3;
}

.cert-issuer {
  color: #1976d2;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.cert-description {
  line-height: 1.5;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .career-title {
    font-size: 2rem;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
  
  .current-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>