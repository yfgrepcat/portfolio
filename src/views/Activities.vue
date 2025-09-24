<template>
  <div class="activities-page">
    <v-container>
      <div class="activities-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="activities-title">{{ $t('sections.activities.title') }}</h1>
      </div>
      
      <div class="activities-content">
        <p class="activities-description">{{ $t('sections.activities.description') }}</p>
        
        <!-- Sports Achievements -->
        <div class="sports-section">
          <h2 class="section-title">Athletic Pursuits</h2>
          <div class="sports-grid">
            <div 
              v-for="(sport, index) in sportsActivities" 
              :key="index"
              class="sport-card"
              :class="`sport-card--${sport.type}`"
            >
              <div class="sport-image">
                <div class="sport-icon">
                  <v-icon :icon="sport.icon" size="50" color="white" />
                </div>
                <div class="sport-level">{{ sport.level }}</div>
              </div>
              <div class="sport-content">
                <h3 class="sport-name">{{ sport.name }}</h3>
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
                  <p class="values-text">{{ sport.values }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Creative Hobbies -->
        <div class="hobbies-section">
          <h2 class="section-title">Creative & Intellectual Pursuits</h2>
          <div class="hobbies-container">
            <div 
              v-for="(hobby, index) in creativeHobbies" 
              :key="index"
              class="hobby-card"
            >
              <div class="hobby-header">
                <div class="hobby-icon" :style="{ backgroundColor: hobby.color }">
                  <v-icon :icon="hobby.icon" size="32" color="white" />
                </div>
                <h3 class="hobby-title">{{ hobby.title }}</h3>
              </div>
              <div class="hobby-level">{{ hobby.level }}</div>
              <p class="hobby-description">{{ hobby.description }}</p>
              <div class="hobby-details">
                <div class="detail-item" v-for="detail in hobby.details" :key="detail.label">
                  <span class="detail-label">{{ detail.label }}:</span>
                  <span class="detail-value">{{ detail.value }}</span>
                </div>
              </div>
              <div class="hobby-impact">
                <strong>Personal impact:</strong>
                <p class="impact-text">{{ hobby.impact }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Leadership & Organization */
        <div class="leadership-section">
          <h2 class="section-title">Leadership & Team Building</h2>
          <div class="leadership-timeline">
            <div 
              v-for="(role, index) in leadershipRoles" 
              :key="index"
              class="leadership-item"
            >
              <div class="leadership-marker">
                <v-icon :icon="role.icon" size="24" color="white" />
              </div>
              <div class="leadership-content">
                <div class="leadership-header">
                  <h3 class="leadership-title">{{ role.title }}</h3>
                  <div class="leadership-period">{{ role.period }}</div>
                </div>
                <div class="leadership-organization">{{ role.organization }}</div>
                <p class="leadership-description">{{ role.description }}</p>
                <div class="leadership-responsibilities">
                  <strong>Key responsibilities:</strong>
                  <ul class="responsibilities-list">
                    <li v-for="responsibility in role.responsibilities" :key="responsibility">
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>
                <div class="leadership-skills">
                  <strong>Skills developed:</strong>
                  <div class="skills-tags">
                    <span 
                      v-for="skill in role.skills" 
                      :key="skill"
                      class="skill-tag"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Competitions & Challenges -->
        <div class="competitions-section">
          <h2 class="section-title">Competitions & Challenges</h2>
          <v-row>
            <v-col cols="12" md="6" v-for="(competition, index) in competitions" :key="index">
              <div class="competition-card">
                <div class="competition-badge">
                  <v-icon :icon="competition.icon" size="40" :color="competition.color" />
                  <div class="competition-rank">{{ competition.rank }}</div>
                </div>
                <div class="competition-content">
                  <h3 class="competition-name">{{ competition.name }}</h3>
                  <div class="competition-event">{{ competition.event }}</div>
                  <div class="competition-date">{{ competition.date }}</div>
                  <p class="competition-description">{{ competition.description }}</p>
                  <div class="competition-team" v-if="competition.teamSize">
                    <v-icon icon="mdi-account-group" size="16" />
                    <span>Team of {{ competition.teamSize }}</span>
                  </div>
                  <div class="competition-learning">
                    <strong>What I learned:</strong>
                    <p class="learning-text">{{ competition.learning }}</p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Personal Interests -->
        <div class="interests-section">
          <h2 class="section-title">Personal Interests & Balance</h2>
          <div class="interests-grid">
            <div 
              v-for="(interest, index) in personalInterests" 
              :key="index"
              class="interest-item"
            >
              <div class="interest-icon">
                <v-icon :icon="interest.icon" size="36" :color="interest.color" />
              </div>
              <h4 class="interest-title">{{ interest.title }}</h4>
              <p class="interest-description">{{ interest.description }}</p>
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

const sportsActivities = [
  {
    name: "Swimming",
    type: "water",
    level: "Competitive",
    duration: "8 years",
    icon: "mdi-swim",
    description: "Started swimming at age 12 and progressed to competitive level. Member of university swim team and regular participant in regional competitions.",
    achievements: [
      "Regional championships qualifier (2022, 2023)",
      "University team captain (2024)",
      "Personal best: 50m freestyle in 24.8s",
      "Completed 5km open water swim"
    ],
    values: "Swimming taught me discipline, time management, and the value of consistent practice. Early morning training sessions developed my work ethic and ability to push through mental barriers."
  },
  {
    name: "Rock Climbing",
    type: "adventure",
    level: "Intermediate",
    duration: "3 years",
    icon: "mdi-image-filter-hdr",
    description: "Discovered rock climbing during university and fell in love with both indoor and outdoor climbing. Regular participant in climbing club activities and outdoor expeditions.",
    achievements: [
      "Completed 5.10a outdoor routes",
      "V4 bouldering problems solved",
      "Led climbing expeditions for beginners",
      "Completed multi-pitch climbs in the Alps"
    ],
    values: "Climbing developed my problem-solving skills, risk assessment abilities, and trust in teammates. It taught me that sometimes you need to take calculated risks and that failure is part of learning."
  },
  {
    name: "Cycling",
    type: "endurance",
    level: "Recreational",
    duration: "5 years",
    icon: "mdi-bike",
    description: "Passionate about both road cycling and mountain biking. Use cycling for commuting, fitness, and exploring the beautiful French countryside.",
    achievements: [
      "Completed century ride (100km)",
      "Regular participant in local cycling events",
      "Bike commuter - 95% of local transport",
      "Mountain biking in Pyrenees"
    ],
    values: "Cycling represents my commitment to sustainable transport and environmental consciousness. It's also taught me endurance, route planning, and mechanical problem-solving."
  }
]

const creativeHobbies = [
  {
    title: "Photography",
    level: "Advanced Amateur",
    icon: "mdi-camera",
    color: "#9c27b0",
    description: "Passionate about landscape and urban photography. Love capturing the intersection of technology and nature, often photographing during travels and outdoor activities.",
    details: [
      { label: "Equipment", value: "Canon EOS R6, various lenses" },
      { label: "Favorite subjects", value: "Landscapes, architecture, travel" },
      { label: "Processing", value: "Lightroom, Photoshop" },
      { label: "Experience", value: "4 years" }
    ],
    impact: "Photography has improved my attention to detail and patience. It's also enhanced my travel experiences and helped me document my international exchanges and outdoor adventures."
  },
  {
    title: "Guitar Playing",
    level: "Intermediate",
    icon: "mdi-guitar-acoustic",
    color: "#ff5722",
    description: "Self-taught guitarist who enjoys playing both acoustic and electric guitar. Focus on rock, folk, and some classical pieces.",
    details: [
      { label: "Style", value: "Rock, Folk, Classical" },
      { label: "Learning method", value: "Self-taught + online courses" },
      { label: "Practice", value: "3-4 hours per week" },
      { label: "Experience", value: "6 years" }
    ],
    impact: "Guitar playing provides creative outlet and stress relief. It's improved my finger dexterity (helpful for coding!) and taught me the value of regular practice and gradual skill building."
  },
  {
    title: "Cooking & Baking",
    level: "Enthusiastic Home Cook",
    icon: "mdi-chef-hat",
    color: "#4caf50",
    description: "Love experimenting with different cuisines, especially inspired by my travels. Enjoy both everyday cooking and challenging baking projects.",
    details: [
      { label: "Specialties", value: "French pastry, Italian cuisine, Asian dishes" },
      { label: "Favorite challenge", value: "Sourdough bread baking" },
      { label: "Learning", value: "YouTube, cookbooks, practice" },
      { label: "Frequency", value: "Daily cooking, weekly baking" }
    ],
    impact: "Cooking connects me to different cultures and provides a creative, hands-on break from digital work. It's also practical life skill and way to bring people together."
  }
]

const leadershipRoles = [
  {
    title: "University Swimming Team Captain",
    organization: "ENSEEIHT Sports Club",
    period: "2024 - Present",
    icon: "mdi-trophy",
    description: "Leading a team of 25 swimmers, organizing training schedules, and representing the team in university sports council meetings.",
    responsibilities: [
      "Coordinate training schedules and team meetings",
      "Mentor new team members and develop talent",
      "Liaise with coaches and university administration",
      "Organize team-building events and competitions"
    ],
    skills: ["Team Leadership", "Communication", "Event Planning", "Conflict Resolution", "Mentoring"]
  },
  {
    title: "Climbing Club Vice-President",
    organization: "ENSEEIHT Adventure Sports",
    period: "2023 - 2024",
    icon: "mdi-mountain",
    description: "Helped grow the climbing club from 15 to 40+ members by organizing events, managing equipment, and ensuring safety protocols.",
    responsibilities: [
      "Organize weekly climbing sessions and outdoor trips",
      "Manage club equipment and safety protocols",
      "Coordinate with local climbing gyms and outdoor guides",
      "Train new members in climbing safety and techniques"
    ],
    skills: ["Safety Management", "Event Organization", "Teaching", "Risk Assessment", "Budget Management"]
  },
  {
    title: "Residence Hall Floor Representative",
    organization: "University Housing",
    period: "2022 - 2023",
    icon: "mdi-home",
    description: "Served as liaison between residents and housing administration, organizing community events and addressing student concerns.",
    responsibilities: [
      "Represent floor residents in housing meetings",
      "Organize social events and study groups",
      "Address roommate conflicts and housing issues",
      "Promote inclusive and supportive community"
    ],
    skills: ["Diplomacy", "Community Building", "Problem Solving", "Cultural Sensitivity", "Public Speaking"]
  }
]

const competitions = [
  {
    name: "Hackathon ENSEEIHT",
    event: "Annual 48-hour Programming Challenge",
    date: "March 2024",
    rank: "2nd Place",
    icon: "mdi-trophy",
    color: "#ff9800",
    teamSize: 4,
    description: "Developed an IoT-based energy monitoring system for student dormitories. Led the hardware integration while collaborating on software development.",
    learning: "This competition taught me how to work effectively under pressure, make quick technical decisions, and present complex ideas clearly to judges."
  },
  {
    name: "Regional Swimming Championships",
    event: "Occitanie Regional Championships",
    date: "June 2023",
    rank: "5th Place",
    icon: "mdi-medal",
    color: "#2196f3",
    description: "Competed in 50m and 100m freestyle events against top regional swimmers. Achieved personal best times in both events.",
    learning: "Competing at this level taught me mental preparation techniques, the importance of consistent training, and how to perform under pressure."
  },
  {
    name: "National Climbing Competition",
    event: "French University Climbing Championships",
    date: "October 2023",
    rank: "Top 16",
    icon: "mdi-trophy-variant",
    color: "#4caf50",
    description: "Represented ENSEEIHT in bouldering competition against climbers from universities across France.",
    learning: "This experience showed me the value of mental strength in sports and taught me how to analyze and adapt to new challenges quickly."
  },
  {
    name: "Photography Contest",
    event: "Student Life Photography Competition",
    date: "December 2023",
    rank: "1st Place",
    icon: "mdi-camera",
    color: "#9c27b0",
    description: "Won with a series documenting sustainable transportation on campus. Combined technical skill with environmental messaging.",
    learning: "This win validated my artistic vision and taught me how to use creativity to communicate important messages effectively."
  }
]

const personalInterests = [
  {
    title: "Travel & Culture",
    icon: "mdi-airplane",
    color: "#2196f3",
    description: "Love exploring new places, trying local foods, and learning about different cultures. Always planning the next adventure!"
  },
  {
    title: "Podcasts & Audiobooks",
    icon: "mdi-headphones",
    color: "#ff9800",
    description: "Enjoy learning through podcasts about technology, history, and personal development during commutes and workouts."
  },
  {
    title: "Board Games",
    icon: "mdi-dice-multiple",
    color: "#4caf50",
    description: "Strategy games enthusiast who organizes regular game nights. Love the social aspect and mental challenges."
  },
  {
    title: "Sustainable Living",
    icon: "mdi-leaf",
    color: "#8bc34a",
    description: "Continuously learning about and implementing more sustainable practices in daily life."
  },
  {
    title: "DIY & Repairs",
    icon: "mdi-tools",
    color: "#607d8b",
    description: "Enjoy fixing things, from bikes to electronics. Believe in the right to repair and learning how things work."
  },
  {
    title: "Nature & Hiking",
    icon: "mdi-tree",
    color: "#4caf50",
    description: "Regular hiker who finds peace and inspiration in nature. Love weekend trips to the Pyrenees and other mountain ranges."
  }
]
</script>

<style scoped>
.activities-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #54a0ff 100%);
  position: relative;
  overflow-x: hidden;
}

.activities-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
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
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.activities-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Sports Section */
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
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.sport-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0,0,0,0.2);
}

.sport-card--water .sport-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.sport-card--adventure .sport-image {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.sport-card--endurance .sport-image {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
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
  border-left: 4px solid #3498db;
}

.values-text {
  margin-top: 0.5rem;
  color: #2c3e50;
  font-style: italic;
  line-height: 1.5;
}

/* Creative Hobbies */
.hobbies-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.hobbies-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.hobby-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hobby-card:hover {
  transform: translateY(-5px);
}

.hobby-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.hobby-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.hobby-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.hobby-level {
  color: #ffd700;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hobby-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hobby-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.detail-label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.detail-value {
  color: white;
  font-weight: 600;
}

.hobby-impact {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.impact-text {
  margin-top: 0.5rem;
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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.leadership-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.leadership-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.leadership-marker {
  position: absolute;
  left: 0;
  top: 1rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 2;
}

.leadership-content {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.leadership-period {
  color: #ffd700;
  font-weight: 500;
  font-size: 0.9rem;
}

.leadership-organization {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 1rem;
}

.leadership-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.responsibilities-list {
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.responsibilities-list li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.leadership-skills {
  color: rgba(255, 255, 255, 0.9);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Competitions */
.competitions-section {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.competition-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.competition-card:hover {
  transform: translateY(-5px);
}

.competition-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 15px;
}

.competition-rank {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.competition-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.competition-event {
  color: #7f8c8d;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.competition-date {
  color: #95a5a6;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.competition-description {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.competition-team {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.competition-learning {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  border-left: 4px solid #e74c3c;
}

.learning-text {
  margin-top: 0.5rem;
  color: #2c3e50;
  font-style: italic;
  line-height: 1.5;
}

/* Personal Interests */
.interests-section {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.interest-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.interest-item:hover {
  transform: translateY(-3px);
}

.interest-icon {
  margin-bottom: 1rem;
}

.interest-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.interest-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .sports-grid {
    grid-template-columns: 1fr;
  }
  
  .hobbies-container {
    grid-template-columns: 1fr;
  }
  
  .leadership-timeline::before {
    left: 15px;
  }
  
  .leadership-item {
    padding-left: 60px;
  }
  
  .leadership-marker {
    width: 45px;
    height: 45px;
    left: -7.5px;
  }
  
  .leadership-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .interests-grid {
    grid-template-columns: 1fr;
  }
  
  .sport-card {
    margin: 0;
  }
}
</style>