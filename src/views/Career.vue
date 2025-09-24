<template>
  <div class="career-page">
    <v-container>
      <div class="career-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="career-title">{{ $t('sections.career.title') }}</h1>
      </div>
      
      <div class="career-content">
        <p class="career-description">{{ $t('sections.career.description') }}</p>
        
        <!-- Timeline -->
        <div class="timeline-section">
          <h2 class="section-title">Professional Timeline</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">{{ item.date }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-company">{{ item.company }}</p>
                <p class="timeline-description">{{ item.description }}</p>
                <div class="timeline-skills">
                  <v-chip 
                    v-for="skill in item.skills" 
                    :key="skill" 
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Grid -->
        <div class="skills-section">
          <h2 class="section-title">Technical Skills</h2>
          <v-row>
            <v-col cols="12" md="4" v-for="(category, index) in skillCategories" :key="index">
              <v-card class="skills-card" elevation="2">
                <v-card-text>
                  <div class="skill-icon">
                    <v-icon :icon="category.icon" size="32" :color="category.color" />
                  </div>
                  <h3 class="skill-category">{{ category.name }}</h3>
                  <div class="skill-list">
                    <div 
                      v-for="skill in category.skills" 
                      :key="skill.name"
                      class="skill-item"
                    >
                      <span class="skill-name">{{ skill.name }}</span>
                      <div class="skill-bar">
                        <div 
                          class="skill-progress" 
                          :style="{ width: skill.level + '%', backgroundColor: category.color }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Achievements -->
        <div class="achievements-section">
          <h2 class="section-title">Key Achievements</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="(achievement, index) in achievements" :key="index">
              <v-card class="achievement-card" elevation="2">
                <v-card-text>
                  <div class="achievement-icon">
                    <v-icon :icon="achievement.icon" size="40" color="primary" />
                  </div>
                  <h3 class="achievement-title">{{ achievement.title }}</h3>
                  <p class="achievement-description">{{ achievement.description }}</p>
                  <div class="achievement-metric" v-if="achievement.metric">
                    <span class="metric-value">{{ achievement.metric.value }}</span>
                    <span class="metric-label">{{ achievement.metric.label }}</span>
                  </div>
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const timeline = [
  {
    date: "2024",
    title: "Network Engineering Intern",
    company: "Tech Solutions Corp",
    description: "Implemented network security protocols and optimized infrastructure performance for enterprise clients.",
    skills: ["Cisco", "Python", "Network Security", "DevOps"]
  },
  {
    date: "2023",
    title: "Junior Developer",
    company: "StartupTech",
    description: "Developed automation scripts and contributed to cloud infrastructure migration projects.",
    skills: ["AWS", "Docker", "Linux", "Automation"]
  },
  {
    date: "2022",
    title: "IT Support Specialist",
    company: "University IT",
    description: "Provided technical support and maintained campus network infrastructure.",
    skills: ["Networking", "Troubleshooting", "System Admin"]
  }
]

const skillCategories = [
  {
    name: "DevOps & Cloud",
    icon: "mdi-cloud",
    color: "#2196f3",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 80 }
    ]
  },
  {
    name: "Networking",
    icon: "mdi-network",
    color: "#4caf50",
    skills: [
      { name: "Cisco", level: 90 },
      { name: "TCP/IP", level: 95 },
      { name: "VPN", level: 85 },
      { name: "Firewall", level: 80 }
    ]
  },
  {
    name: "Security",
    icon: "mdi-shield",
    color: "#ff9800",
    skills: [
      { name: "Penetration Testing", level: 75 },
      { name: "Cryptography", level: 70 },
      { name: "Risk Assessment", level: 80 },
      { name: "Compliance", level: 85 }
    ]
  }
]

const achievements = [
  {
    icon: "mdi-certificate",
    title: "Cisco Certified",
    description: "Achieved CCNA certification with distinction",
    metric: { value: "95%", label: "Score" }
  },
  {
    icon: "mdi-trophy",
    title: "Hackathon Winner",
    description: "First place in regional cybersecurity competition",
    metric: { value: "1st", label: "Place" }
  },
  {
    icon: "mdi-rocket",
    title: "Performance Improvement",
    description: "Optimized network performance for enterprise client",
    metric: { value: "40%", label: "Improvement" }
  },
  {
    icon: "mdi-account-group",
    title: "Team Leadership",
    description: "Led cross-functional team of 5 developers",
    metric: { value: "5", label: "Team Members" }
  }
]
</script>

<style scoped>
.career-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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

/* Timeline Styles */
.timeline-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
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
  margin-bottom: 2rem;
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
}

.timeline-date {
  color: #1976d2;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-company {
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

/* Skills Styles */
.skills-section {
  margin-bottom: 4rem;
}

.skills-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.skills-card:hover {
  transform: translateY(-4px);
}

.skill-icon {
  text-align: center;
  margin-bottom: 1rem;
}

.skill-category {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-name {
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s ease;
}

/* Achievements Styles */
.achievements-section {
  margin-bottom: 2rem;
}

.achievement-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-4px);
}

.achievement-icon {
  text-align: center;
  margin-bottom: 1rem;
}

.achievement-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
}

.achievement-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1rem;
}

.achievement-metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #1976d2;
}

.metric-label {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 600px) {
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
}
</style>