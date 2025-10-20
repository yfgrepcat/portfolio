<template>
  <div class="engineering-page">
    <v-container>
      <div class="engineering-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="engineering-title">{{ $t('engineering.title') }}</h1>
      </div>
      
      <div class="engineering-content">
        <p class="engineering-description">{{ $t('engineering.description') }}</p>
        
        <!-- Engineering Journey -->
        <div class="journey-section">
          <h2 class="section-title">{{ $t('engineering.journey.title') }}</h2>
          <div class="timeline">
            <div 
              class="timeline-item" 
              v-for="(item, index) in journeyItems" 
              :key="index"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">{{ item.year }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-focus">{{ item.focus }}</p>
                <p class="timeline-description">{{ item.description }}</p>
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

        <!-- Projects Call to Action -->
        <div class="projects-cta">
          <h2 class="section-title">{{ $t('engineering.projectsCTA.title') }}</h2>
          <p class="projects-cta-text">{{ $t('engineering.projectsCTA.description') }}</p>
          <v-btn
            to="/projects"
            color="primary"
            size="large"
            variant="elevated"
            class="projects-btn"
            prepend-icon="mdi-code-braces"
          >
            {{ $t('engineering.projectsCTA.button') }}
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { EngineeringProject } from '@/types'

const { t, tm } = useI18n()

const journeyItems = computed(() => tm('engineering.journey.items') as EngineeringProject[])
</script>

<style scoped lang="scss">
.engineering-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
}

.engineering-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.engineering-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.engineering-description {
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

/* Journey Section */
.journey-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #4caf50;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #4caf50;
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

.timeline-date {
  color: #4caf50;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: rgba(0, 0, 0, 0.87);
}

.timeline-focus {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.timeline-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Domains Section */
.domains-section {
  margin-bottom: 4rem;
}

.domain-card {
  height: 100%;
  transition: transform 0.3s ease;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.domain-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.domain-icon {
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.domain-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
}

.domain-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: center;
}

.domain-topics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topic-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
}

.projects-cta {
  margin: 4rem auto 2rem;
  text-align: center;
  max-width: 700px;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.05), rgba(255, 193, 7, 0.1));
  border-radius: 16px;
}

.projects-cta-text {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.projects-btn {
  font-weight: 500;
  padding: 0.75rem 2rem;
  transition: transform 0.3s ease;
}

.projects-btn:hover {
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .engineering-title {
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
  
  .engineering-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>