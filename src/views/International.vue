<template>
  <div class="international-page">
    <v-container>
      <div class="international-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="international-title">{{ $t('sections.international.title') }}</h1>
      </div>
      
      <div class="international-content">
        <p class="international-description">{{ $t('sections.international.description') }}</p>
        
        <!-- World Map Section -->
        <div class="map-section">
          <h2 class="section-title">My International Journey</h2>
          <div class="world-map">
            <div class="map-container">
              <div class="country-pins">
                <div 
                  v-for="(location, index) in visitedCountries" 
                  :key="index"
                  class="country-pin"
                  :style="location.position"
                  @click="selectedCountry = location"
                >
                  <div class="pin-dot"></div>
                  <div class="pin-label">{{ location.country }}</div>
                </div>
              </div>
              <!-- Simple world map representation -->
              <div class="map-background">
                <div class="continent europe"></div>
                <div class="continent asia"></div>
                <div class="continent africa"></div>
                <div class="continent america"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Exchange Programs -->
        <div class="exchanges-section">
          <h2 class="section-title">Exchange Programs & Study Abroad</h2>
          <div class="exchange-cards">
            <div 
              v-for="(exchange, index) in exchanges" 
              :key="index"
              class="exchange-card"
            >
              <div class="exchange-flag">{{ exchange.flag }}</div>
              <div class="exchange-content">
                <h3 class="exchange-university">{{ exchange.university }}</h3>
                <div class="exchange-location">{{ exchange.city }}, {{ exchange.country }}</div>
                <div class="exchange-period">{{ exchange.period }}</div>
                <p class="exchange-description">{{ exchange.description }}</p>
                <div class="exchange-focus">
                  <strong>Focus Areas:</strong>
                  <div class="focus-tags">
                    <span 
                      v-for="focus in exchange.focus" 
                      :key="focus"
                      class="focus-tag"
                    >
                      {{ focus }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Language Proficiency -->
        <div class="languages-section">
          <h2 class="section-title">Multilingual Communication</h2>
          <div class="language-grid">
            <div 
              v-for="(language, index) in languages" 
              :key="index"
              class="language-item"
            >
              <div class="language-header">
                <div class="language-flag">{{ language.flag }}</div>
                <div class="language-info">
                  <h4 class="language-name">{{ language.name }}</h4>
                  <div class="language-level">{{ language.level }}</div>
                </div>
              </div>
              <div class="proficiency-bar">
                <div 
                  class="proficiency-fill"
                  :style="{ 
                    width: language.proficiency + '%',
                    backgroundColor: language.color 
                  }"
                ></div>
              </div>
              <div class="language-certifications">
                <v-chip 
                  v-for="cert in language.certifications" 
                  :key="cert"
                  size="x-small"
                  variant="outlined"
                  :color="language.color"
                >
                  {{ cert }}
                </v-chip>
              </div>
            </div>
          </div>
        </div>

        <!-- Cultural Immersion -->
        <div class="culture-section">
          <h2 class="section-title">Cultural Immersion & Global Perspectives</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="(experience, index) in culturalExperiences" :key="index">
              <div class="culture-card">
                <div class="culture-image">
                  <v-icon :icon="experience.icon" size="40" :color="experience.color" />
                </div>
                <div class="culture-content">
                  <h3 class="culture-title">{{ experience.title }}</h3>
                  <div class="culture-location">{{ experience.location }}</div>
                  <p class="culture-description">{{ experience.description }}</p>
                  <div class="culture-insights">
                    <div class="insight-label">Key Insights:</div>
                    <ul class="insights-list">
                      <li v-for="insight in experience.insights" :key="insight">{{ insight }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Global Network -->
        <div class="network-section">
          <h2 class="section-title">International Network</h2>
          <div class="network-stats">
            <div class="stat-card">
              <div class="stat-number">25</div>
              <div class="stat-label">Countries Visited</div>
              <div class="stat-icon">🌍</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">150+</div>
              <div class="stat-label">International Contacts</div>
              <div class="stat-icon">👥</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">8</div>
              <div class="stat-label">University Partners</div>
              <div class="stat-icon">🎓</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">4</div>
              <div class="stat-label">Languages Spoken</div>
              <div class="stat-icon">🗣️</div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const selectedCountry = ref(null)

const visitedCountries = [
  { country: "France", position: { top: "35%", left: "48%" } },
  { country: "Germany", position: { top: "32%", left: "52%" } },
  { country: "Switzerland", position: { top: "38%", left: "51%" } },
  { country: "Spain", position: { top: "42%", left: "45%" } },
  { country: "UK", position: { top: "28%", left: "46%" } }
]

const exchanges = [
  {
    university: "Technical University of Munich",
    city: "Munich",
    country: "Germany",
    flag: "🇩🇪",
    period: "Fall 2024 (Current)",
    description: "Specializing in advanced network engineering and Industry 4.0 technologies. Collaborating with German students on IoT infrastructure projects.",
    focus: ["5G Networks", "Industry 4.0", "Smart Manufacturing", "German Engineering"]
  },
  {
    university: "ETH Zurich",
    city: "Zurich", 
    country: "Switzerland",
    flag: "🇨🇭",
    period: "Summer 2023",
    description: "Intensive cybersecurity summer program with international cohort. Developed multilingual security frameworks for global enterprises.",
    focus: ["Cybersecurity", "International Compliance", "Multilingual Systems", "Research Methods"]
  }
]

const languages = [
  {
    name: "French",
    level: "Native Speaker",
    proficiency: 100,
    color: "#e74c3c",
    flag: "🇫🇷",
    certifications: ["Native"]
  },
  {
    name: "English",
    level: "Professional Proficiency",
    proficiency: 95,
    color: "#3498db",
    flag: "🇬🇧",
    certifications: ["TOEFL 110", "Cambridge C2"]
  },
  {
    name: "German",
    level: "Intermediate Plus", 
    proficiency: 75,
    color: "#f39c12",
    flag: "🇩🇪",
    certifications: ["Goethe B2", "DSH-2"]
  },
  {
    name: "Spanish",
    level: "Conversational",
    proficiency: 60,
    color: "#e67e22",
    flag: "🇪🇸",
    certifications: ["DELE B1"]
  }
]

const culturalExperiences = [
  {
    title: "German Engineering Culture",
    location: "Munich, Germany",
    icon: "mdi-cog",
    color: "#ff9800",
    description: "Immersed in the precision and systematic approach of German engineering methodologies.",
    insights: [
      "Importance of thorough documentation and standardization",
      "Collaborative decision-making in technical teams",
      "Balance between innovation and reliability"
    ]
  },
  {
    title: "Swiss Innovation Ecosystem",
    location: "Zurich, Switzerland", 
    icon: "mdi-lightbulb",
    color: "#2196f3",
    description: "Experienced the Swiss approach to research, innovation, and international collaboration.",
    insights: [
      "Multicultural teamwork in research environments",
      "Precision in project management and execution",
      "Integration of sustainability in tech solutions"
    ]
  },
  {
    title: "European Academic Networks",
    location: "Various EU Cities",
    icon: "mdi-school",
    color: "#9c27b0",
    description: "Participated in pan-European academic conferences and student exchanges.",
    insights: [
      "Diverse approaches to engineering education",
      "Importance of cross-cultural communication",
      "European perspectives on technology ethics"
    ]
  },
  {
    title: "International Tech Communities",
    location: "Virtual & Physical Meetups",
    icon: "mdi-account-group",
    color: "#4caf50",
    description: "Active participation in international technology communities and hackathons.",
    insights: [
      "Global trends in network engineering",
      "Cultural differences in problem-solving approaches",
      "Building trust in multicultural teams"
    ]
  }
]
</script>

<style scoped>
.international-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: white;
}

.international-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 3rem;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

/* World Map Section */
.map-section {
  margin-bottom: 4rem;
}

.world-map {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.map-container {
  position: relative;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
}

.country-pin {
  position: absolute;
  cursor: pointer;
  z-index: 10;
}

.pin-dot {
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  animation: pulse 2s infinite;
}

.pin-label {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.country-pin:hover .pin-label {
  opacity: 1;
}

/* Exchange Programs */
.exchanges-section {
  margin-bottom: 4rem;
}

.exchange-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.exchange-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  transition: transform 0.3s ease;
}

.exchange-card:hover {
  transform: translateY(-5px);
}

.exchange-flag {
  font-size: 4rem;
  flex-shrink: 0;
}

.exchange-content {
  flex: 1;
}

.exchange-university {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.exchange-location {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.exchange-period {
  color: #ffd700;
  font-weight: 600;
  margin-bottom: 1rem;
}

.exchange-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.exchange-focus {
  color: rgba(255, 255, 255, 0.9);
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.focus-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: white;
}

/* Languages Section */
.languages-section {
  margin-bottom: 4rem;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.language-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.language-level {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.proficiency-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.proficiency-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.8s ease;
}

.language-certifications {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Cultural Experiences */
.culture-section {
  margin-bottom: 4rem;
}

.culture-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.culture-card:hover {
  transform: translateY(-5px);
}

.culture-image {
  text-align: center;
  margin-bottom: 1rem;
}

.culture-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
}

.culture-location {
  text-align: center;
  color: #ffd700;
  font-weight: 500;
  margin-bottom: 1rem;
}

.culture-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.culture-insights {
  color: rgba(255, 255, 255, 0.9);
}

.insight-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.insights-list {
  list-style: none;
  padding: 0;
}

.insights-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.insights-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffd700;
}

/* Network Stats */
.network-section {
  margin-bottom: 2rem;
}

.network-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.stat-icon {
  font-size: 2rem;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Responsive */
@media (max-width: 768px) {
  .exchange-card {
    flex-direction: column;
    text-align: center;
  }
  
  .language-grid {
    grid-template-columns: 1fr;
  }
  
  .map-container {
    height: 200px;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
}
</style>