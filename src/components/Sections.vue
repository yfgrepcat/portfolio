<template>
  <section id="sections" class="sections">
    <v-container class="sections__container">
      <div class="sections__header">
        <h2 class="sections__title">{{ $t('sections.title') }}</h2>
        <p class="sections__subtitle">{{ $t('sections.subtitle') }}</p>
      </div>
      
      <div class="sections__grid">
        <div 
          v-for="(section, index) in sections" 
          :key="index"
          class="sections__col"
          @click="navigateToSection(section.route)"
        >
          <v-card 
            class="sections__card"
            :class="`sections__card--${section.id}`"
            elevation="8"
            hover
          >
            <div class="sections__card-overlay">
              <div class="sections__card-content">
                <v-icon 
                  :icon="section.icon" 
                  size="48" 
                  color="white" 
                  class="sections__card-icon"
                />
                <h3 class="sections__card-title">{{ $t(`sections.${section.id}.title`) }}</h3>
                <p class="sections__card-description">{{ $t(`sections.${section.id}.description`) }}</p>
                <v-btn 
                  variant="outlined" 
                  color="white"
                  class="sections__card-btn"
                >
                  {{ $t('sections.explore') }}
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const sections = [
  {
    id: 'career',
    route: '/career',
    icon: 'mdi-briefcase-variant'
  },
  {
    id: 'engineering',
    route: '/engineering',
    icon: 'mdi-cog'
  },
  {
    id: 'international',
    route: '/international',
    icon: 'mdi-earth'
  },
  {
    id: 'sustainability',
    route: '/sustainability',
    icon: 'mdi-leaf'
  },
  {
    id: 'activities',
    route: '/activities',
    icon: 'mdi-run'
  }
]

const navigateToSection = (route: string) => {
  router.push(route)
}
</script>

<style scoped>
.sections {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.sections__container {
  max-width: 1200px;
}

.sections__header {
  text-align: center;
  margin-bottom: 3rem;
}

.sections__title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
}

.sections__subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.6);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.sections__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.sections__col {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  cursor: pointer;
}

.sections__col:nth-child(1) { animation-delay: 0.1s; }
.sections__col:nth-child(2) { animation-delay: 0.2s; }
.sections__col:nth-child(3) { animation-delay: 0.3s; }
.sections__col:nth-child(4) { animation-delay: 0.4s; }
.sections__col:nth-child(5) { animation-delay: 0.5s; }

.sections__card {
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.sections__card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.sections__card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.sections__card--career .sections__card-overlay {
  background: linear-gradient(135deg, rgba(63, 81, 181, 0.9), rgba(33, 150, 243, 0.8));
}

.sections__card--engineering .sections__card-overlay {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.9), rgba(139, 195, 74, 0.8));
}

.sections__card--international .sections__card-overlay {
  background: linear-gradient(135deg, rgba(233, 30, 99, 0.9), rgba(156, 39, 176, 0.8));
}

.sections__card--sustainability .sections__card-overlay {
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.9), rgba(255, 193, 7, 0.8));
}

.sections__card--activities .sections__card-overlay {
  background: linear-gradient(135deg, rgba(244, 67, 54, 0.9), rgba(233, 30, 99, 0.8));
}

.sections__card-content {
  width: 100%;
}

.sections__card-icon {
  margin-bottom: 1rem;
}

.sections__card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.sections__card-description {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.sections__card-btn {
  font-weight: 500;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .sections__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sections__title {
    font-size: 2rem;
  }
}
</style>