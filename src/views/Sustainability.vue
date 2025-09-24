<template>
  <div class="sustainability-page">
    <v-container>
      <div class="sustainability-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="sustainability-title">{{ $t('sections.sustainability.title') }}</h1>
      </div>
      
      <div class="sustainability-content">
        <p class="sustainability-description">{{ $t('sections.sustainability.description') }}</p>
        
        <!-- Personal Values -->
        <div class="values-section">
          <h2 class="section-title">My Values & Commitment</h2>
          <div class="values-grid">
            <div 
              v-for="(value, index) in personalValues" 
              :key="index"
              class="value-card"
            >
              <div class="value-icon">
                <v-icon :icon="value.icon" size="40" :color="value.color" />
              </div>
              <h3 class="value-title">{{ value.title }}</h3>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </div>
        </div>

        <!-- Community Service -->
        <div class="service-section">
          <h2 class="section-title">Community Service & Helping Others</h2>
          <div class="service-timeline">
            <div 
              v-for="(service, index) in communityService" 
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
                    <v-icon icon="mdi-heart" size="16" color="#e91e63" />
                    <span>{{ highlight }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Environmental Awareness -->
        <div class="environment-section">
          <h2 class="section-title">Environmental Consciousness & Small Actions</h2>
          <div class="environment-grid">
            <div 
              v-for="(action, index) in environmentalActions" 
              :key="index"
              class="environment-card"
            >
              <div class="environment-image">
                <v-icon :icon="action.icon" size="48" :color="action.color" />
              </div>
              <div class="environment-content">
                <h3 class="environment-title">{{ action.title }}</h3>
                <p class="environment-description">{{ action.description }}</p>
                <div class="environment-examples">
                  <div class="examples-label">Practical examples:</div>
                  <div class="examples-list">
                    <span 
                      v-for="example in action.examples" 
                      :key="example"
                      class="example-tag"
                    >
                      {{ example }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Educational Initiatives -->
        <div class="education-section">
          <h2 class="section-title">Education & Mentoring</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="(initiative, index) in educationalInitiatives" :key="index">
              <div class="education-card">
                <div class="education-header">
                  <v-icon :icon="initiative.icon" size="32" :color="initiative.color" />
                  <h3 class="education-title">{{ initiative.title }}</h3>
                </div>
                <div class="education-target">{{ initiative.target }}</div>
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
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Sustainable Practices -->
        <div class="practices-section">
          <h2 class="section-title">Personal Sustainable Practices</h2>
          <div class="practices-container">
            <div 
              v-for="(practice, index) in sustainablePractices" 
              :key="index"
              class="practice-item"
            >
              <div class="practice-icon">
                <v-icon :icon="practice.icon" size="28" :color="practice.color" />
              </div>
              <div class="practice-content">
                <h4 class="practice-title">{{ practice.title }}</h4>
                <p class="practice-description">{{ practice.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const personalValues = [
  {
    icon: "mdi-account-heart",
    title: "Empathy & Inclusion",
    description: "Believing that technology should serve everyone, especially those who need it most. I strive to make my work accessible and inclusive.",
    color: "#e91e63"
  },
  {
    icon: "mdi-earth",
    title: "Environmental Responsibility",
    description: "Understanding that small actions add up. I try to be mindful of my environmental impact in both personal and professional choices.",
    color: "#4caf50"
  },
  {
    icon: "mdi-school",
    title: "Knowledge Sharing",
    description: "Believing that education and mentoring can break cycles of inequality. I enjoy helping others learn and grow.",
    color: "#2196f3"
  },
  {
    icon: "mdi-handshake",
    title: "Community Building",
    description: "Understanding that meaningful change happens through collaboration and building strong, supportive communities.",
    color: "#ff9800"
  }
]

const communityService = [
  {
    title: "Digital Accessibility Volunteer",
    organization: "Local Disability Support Center",
    duration: "2023 - Present",
    icon: "mdi-wheelchair-accessibility",
    description: "Helping individuals with disabilities learn to use technology and adapt digital tools to their needs. This work has taught me patience, creativity, and the importance of inclusive design.",
    lessons: [
      "The importance of patience and adaptive communication",
      "How small technical adjustments can make huge differences",
      "That accessibility benefits everyone, not just those with disabilities"
    ],
    highlights: [
      "Helped 15+ individuals learn basic computer skills",
      "Created simplified tutorials for screen reader software",
      "Learned sign language basics to better communicate"
    ]
  },
  {
    title: "High School Mentoring Program",
    organization: "ENSEEIHT Outreach Initiative",
    duration: "2022 - Present",
    icon: "mdi-account-supervisor",
    description: "Mentoring high school students from underrepresented backgrounds who are interested in engineering. Focus on building confidence and providing guidance on educational pathways.",
    lessons: [
      "How to explain complex concepts in simple terms",
      "The impact of representation and role models",
      "That listening is often more important than advising"
    ],
    highlights: [
      "Mentored 8 students over 2 years",
      "3 mentees successfully entered engineering programs",
      "Organized campus visits and hands-on workshops"
    ]
  },
  {
    title: "Senior Citizens Technology Support",
    organization: "Local Community Center",
    duration: "2021 - 2022",
    icon: "mdi-account-supervisor-circle",
    description: "Teaching elderly community members how to use smartphones, video calling, and basic internet services to stay connected with family, especially during COVID-19.",
    lessons: [
      "The value of human connection and technology's role in maintaining it",
      "How to break down complex processes into simple steps",
      "That age is never a barrier to learning"
    ],
    highlights: [
      "Helped 25+ seniors connect with family remotely",
      "Created easy-to-follow visual guides",
      "Formed lasting friendships across generations"
    ]
  }
]

const environmentalActions = [
  {
    title: "Sustainable Computing",
    description: "Making conscious choices about technology use and encouraging others to think about the environmental impact of our digital habits.",
    icon: "mdi-laptop",
    color: "#4caf50",
    examples: [
      "Extending laptop lifespan",
      "Proper e-waste disposal",
      "Energy-efficient coding",
      "Digital minimalism"
    ]
  },
  {
    title: "Campus Green Initiatives",
    description: "Participating in and promoting small-scale environmental improvements within the university community.",
    icon: "mdi-school",
    color: "#2196f3",
    examples: [
      "Organizing carpools",
      "Promoting bike usage",
      "Reducing paper consumption",
      "Encouraging reusable containers"
    ]
  },
  {
    title: "Mindful Consumption",
    description: "Making thoughtful choices about what I buy, use, and discard, while encouraging others to consider their consumption patterns.",
    icon: "mdi-recycle",
    color: "#ff9800",
    examples: [
      "Buying second-hand electronics",
      "Repairing instead of replacing",
      "Sharing resources with peers",
      "Minimizing single-use items"
    ]
  }
]

const educationalInitiatives = [
  {
    title: "Code for Good Workshops",
    target: "Middle & High School Students",
    icon: "mdi-code-tags",
    color: "#2196f3",
    description: "Organizing programming workshops that teach basic coding skills while highlighting how technology can be used to solve social and environmental problems.",
    activities: [
      "Teaching Scratch programming with environmental themes",
      "Creating simple apps for community problems",
      "Discussing ethics in technology development",
      "Encouraging girls and underrepresented minorities in STEM"
    ],
    reflection: "These workshops reminded me why I fell in love with programming in the first place - the ability to create solutions that help people. Seeing young students light up when they realize they can build something meaningful is incredibly rewarding."
  },
  {
    title: "Tech Literacy for All",
    target: "Adults with Learning Difficulties",
    icon: "mdi-human-greeting",
    color: "#9c27b0",
    description: "Volunteering with a local organization to help adults with learning difficulties develop basic digital literacy skills for employment and daily life.",
    activities: [
      "One-on-one tutoring sessions",
      "Creating customized learning materials",
      "Teaching job-relevant computer skills",
      "Building confidence with technology"
    ],
    reflection: "This experience taught me that everyone learns differently and at their own pace. It's made me a more patient teacher and helped me appreciate the diverse ways people process information."
  }
]

const sustainablePractices = [
  {
    title: "Mindful Transportation",
    description: "Using public transport, cycling, or walking when possible. Carpooling for longer trips.",
    icon: "mdi-bus",
    color: "#4caf50"
  },
  {
    title: "Digital Minimalism",
    description: "Being intentional about technology use, avoiding unnecessary upgrades, and maintaining devices well.",
    icon: "mdi-cellphone",
    color: "#2196f3"
  },
  {
    title: "Waste Reduction",
    description: "Minimizing food waste, using reusable containers, and properly sorting recycling.",
    icon: "mdi-delete",
    color: "#ff9800"
  },
  {
    title: "Energy Consciousness",
    description: "Being mindful of electricity usage, using energy-efficient settings, and unplugging devices.",
    icon: "mdi-lightning-bolt",
    color: "#ffc107"
  },
  {
    title: "Local & Seasonal",
    description: "Supporting local businesses when possible and being mindful of seasonal food choices.",
    icon: "mdi-store",
    color: "#8bc34a"
  },
  {
    title: "Sharing Economy",
    description: "Borrowing, lending, and sharing resources with friends and community members.",
    icon: "mdi-share-variant",
    color: "#9c27b0"
  }
]
</script>

<style scoped>
.sustainability-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
  position: relative;
}

.sustainability-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  color: white;
}

.sustainability-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
}

/* Values Section */
.values-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.value-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-3px);
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
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
  color: white;
}

.service-duration {
  color: #ffd700;
  font-weight: 500;
  font-size: 0.9rem;
}

.service-organization {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 1rem;
}

.service-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-impact {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.impact-list {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.impact-list li {
  margin-bottom: 0.25rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
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
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

/* Environmental Actions */
.environment-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.environment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.environment-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.environment-card:hover {
  transform: translateY(-5px);
}

.environment-image {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
}

.environment-content {
  padding: 1.5rem 2rem 2rem;
}

.environment-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1b5e20;
  margin-bottom: 1rem;
}

.environment-description {
  color: #424242;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.examples-label {
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.examples-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.example-tag {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Educational Initiatives */
.education-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.education-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
}

.education-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.education-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.education-target {
  color: #ffd700;
  font-weight: 500;
  margin-bottom: 1rem;
}

.education-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.activities-label {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.activities-list {
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.activities-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.education-reflection {
  color: rgba(255, 255, 255, 0.9);
}

.reflection-text {
  margin-top: 0.5rem;
  font-style: italic;
  line-height: 1.5;
}

/* Sustainable Practices */
.practices-section {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.practices-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.practice-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.practice-item:hover {
  transform: translateY(-3px);
}

.practice-icon {
  flex-shrink: 0;
}

.practice-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.practice-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .service-item {
    flex-direction: column;
    text-align: center;
  }
  
  .service-header {
    flex-direction: column;
    text-align: center;
  }
  
  .practice-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>