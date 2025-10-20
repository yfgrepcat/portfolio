<template>
  <div class="activities-page">
    <v-container>
      <div class="activities-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="activities-title">{{ $t('activities.title') }}</h1>
      </div>
      
      <div class="activities-content">
        <p class="activities-description">{{ $t('activities.description') }}</p>

        <!-- Sports Achievements -->
        <div class="sports-section">
          <h2 class="section-title">{{ $t('activities.athletic.title') }}</h2>
          <p class="section-description">{{ $t('activities.athletic.description') }}</p>
          <div class="sports-grid">
            <div 
              v-for="(sport, index) in athleticItems" 
              :key="index"
              class="sport-card"
            >
              <div class="sport-image" :style="{ background: `linear-gradient(135deg, ${sport.color}, ${adjustColor(sport.color, -30)})` }">
                <div class="sport-icon">
                  <v-icon :icon="sport.icon" size="50" color="white" />
                </div>
                <div class="sport-level">{{ sport.level }}</div>
              </div>
              <div class="sport-content">
                <h3 class="sport-name">{{ sport.sport }}</h3>
                <div class="sport-duration">{{ sport.duration }}</div>
                <p class="sport-description">{{ sport.description }}</p>
                <div class="sport-achievements">
                  <div class="achievements-label">Achievements:</div>
                  <ul class="achievements-list">
                    <li v-for="achievement in sport.achievements" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <div class="sport-values">
                  <strong>What it taught me:</strong>
                  <p class="values-text">{{ sport.impact }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Creative & Personal Interests -->
        <div class="creative-section">
          <h2 class="section-title">{{ $t('activities.creative.title') }}</h2>
          <div class="creative-grid">
            <div 
              v-for="(interest, index) in creativeItems" 
              :key="index"
              class="creative-card"
            >
              <div class="creative-header">
                <div class="creative-icon" :style="{ backgroundColor: interest.color }">
                  <v-icon :icon="interest.icon" size="32" color="white" />
                </div>
                <div class="creative-info">
                  <h3 class="creative-title">{{ interest.title }}</h3>
                  <div class="creative-category">{{ interest.category }}</div>
                </div>
              </div>
              <p class="creative-description">{{ interest.description }}</p>
              <div class="creative-highlights">
                <strong>Highlights:</strong>
                <ul class="highlights-list">
                  <li v-for="highlight in interest.highlights" :key="highlight">{{ highlight }}</li>
                </ul>
              </div>
              <div class="creative-connection">
                <strong>Connection to engineering:</strong>
                <p class="connection-text">{{ interest.connection }}</p>
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
const overviewStats = computed(() => tm('activities.overview.stats'))
const athleticItems = computed(() => tm('activities.athletic.items'))
const creativeItems = computed(() => tm('activities.creative.items'))
const leadershipItems = computed(() => tm('activities.leadership.items'))
const philosophyPrinciples = computed(() => tm('activities.philosophy.principles'))

// Utility function to adjust color brightness
const adjustColor = (color: string, amount: number) => {
  const usePound = color[0] === "#"
  const col = usePound ? color.slice(1) : color
  const num = parseInt(col, 16)
  let r = (num >> 16) + amount
  let g = (num >> 8 & 0x00FF) + amount
  let b = (num & 0x0000FF) + amount
  r = r > 255 ? 255 : r < 0 ? 0 : r
  g = g > 255 ? 255 : g < 0 ? 0 : g
  b = b > 255 ? 255 : b < 0 ? 0 : b
  return (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0')
}

onMounted(() => {
  console.log('Activities component mounted')
  console.log('Athletic items count:', athleticItems.value.length)
  console.log('Creative items count:', creativeItems.value.length)
})
</script>

<style scoped>
.activities-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
  position: relative;
}

.activities-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234caf50' fill-opacity='0.02'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.activities-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.activities-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.activities-description {
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

.section-description {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* Overview Section */
.overview-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
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
  background: white;
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

/* Sports Section - Keep the awesome aesthetics */
.sports-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.sport-card {
  background: white;
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.sport-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0,0,0,0.2);
}

.sport-image {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.sport-icon {
  margin-right: 1rem;
}

.sport-level {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.sport-content {
  padding: 2rem;
}

.sport-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.sport-duration {
  color: #7f8c8d;
  font-weight: 500;
  margin-bottom: 1rem;
}

.sport-description {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements-label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.achievements-list {
  color: #34495e;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

.achievements-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.sport-values {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
}

.values-text {
  margin-top: 0.5rem;
  color: #2c3e50;
  font-style: italic;
  line-height: 1.5;
}

/* Creative Section */
.creative-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.creative-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.creative-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.creative-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.creative-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
 
.creative-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.creative-info {
  flex: 1;
}

.creative-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.creative-category {
  color: #4caf50;
  font-weight: 500;
  font-size: 0.9rem;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  display: inline-block;
}

.creative-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.creative-highlights {
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
}

.highlights-list {
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.highlights-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

.creative-connection {
  background: rgba(76, 175, 80, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
}

.connection-text {
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
  font-style: italic;
  line-height: 1.5;
}

/* Leadership Timeline */
.leadership-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.leadership-timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.leadership-timeline::before {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #4caf50;
}

.leadership-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 4rem;
}

.leadership-marker {
  position: absolute;
  left: 0;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  background: #4caf50;
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  z-index: 2;
}

.leadership-content {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.leadership-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.leadership-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.25rem;
  font-weight: 600;
}

.leadership-period {
  color: #4caf50;
  font-weight: 500;
  font-size: 0.9rem;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.leadership-organization {
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-bottom: 1rem;
}

.leadership-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.responsibilities-list, .outcomes-list {
  color: rgba(0, 0, 0, 0.6);
  padding-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.responsibilities-list li, .outcomes-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.leadership-skills {
  color: rgba(0, 0, 0, 0.7);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-chip {
  margin-bottom: 0.5rem;
}

/* Philosophy Section */
.philosophy-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.philosophy-description {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.philosophy-card {
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
}

.philosophy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.philosophy-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
}

.philosophy-principle {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.philosophy-application {
  background: rgba(76, 175, 80, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
}

.application-text {
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
  font-style: italic;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .activities-title {
    font-size: 2rem;
  }
  
  .sports-grid {
    grid-template-columns: 1fr;
  }
  
  .creative-grid {
    grid-template-columns: 1fr;
  }
  
  .leadership-timeline::before {
    left: 1rem;
  }
  
  .leadership-item {
    padding-left: 3rem;
  }
  
  .leadership-marker {
    width: 2.5rem;
    height: 2.5rem;
    left: -0.25rem;
  }
  
  .leadership-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .creative-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>