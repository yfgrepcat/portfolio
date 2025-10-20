<template>
  <div class="projects-page">
    <v-container>
      <div class="projects-header">
        <v-btn 
          icon="mdi-arrow-left" 
          @click="$router.push('/')"
          class="back-btn"
        />
        <h1 class="projects-title">{{ $t('projects.title') }}</h1>
      </div>
      
      <p class="projects-description">{{ $t('projects.description') }}</p>
      
      <!-- Category Filter -->
      <div class="filter-section">
        <v-chip-group
          v-model="selectedCategory"
          class="category-filters"
          mandatory
          selected-class="category-active"
        >
          <v-chip
            filter
            value="all"
            variant="elevated"
            color="primary"
            class="filter-chip"
          >
            {{ $t('projects.filters.all') }}
          </v-chip>
          <v-chip
            v-for="category in categories"
            :key="category"
            filter
            :value="category"
            variant="elevated"
            color="primary"
            class="filter-chip"
          >
            {{ $t(`projects.filters.${category}`) }}
          </v-chip>
        </v-chip-group>
      </div>
      
      <!-- Featured Project -->
      <div v-if="featuredProject" class="featured-project">
        <v-card class="featured-card" elevation="4">
          <v-row no-gutters>
            <v-col cols="12" md="7">
              <v-carousel
                v-if="featuredProject.gallery && featuredProject.gallery.length > 0"
                height="500"
                hide-delimiter-background
                show-arrows="hover"
                class="featured-carousel"
              >
                <v-carousel-item
                  v-for="(image, i) in featuredProject.gallery"
                  :key="i"
                  :src="image.src"
                  cover
                >
                  <div class="image-caption">{{ image.caption }}</div>
                </v-carousel-item>
              </v-carousel>
              <div v-else class="featured-placeholder">
                <v-img 
                  :src="featuredProject.image || 'https://picsum.photos/seed/featured/800/500'" 
                  height="500" 
                  cover
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <div class="featured-content">
                <div class="featured-badge">{{ $t('projects.featuredLabel') }}</div>
                <h2 class="featured-title">{{ featuredProject.title }}</h2>
                <div class="featured-meta">
                  <div class="featured-category">
                    {{ Array.isArray(featuredProject.category) 
                      ? featuredProject.category[0]
                      : featuredProject.category }}
                  </div>
                  <div class="featured-date">{{ featuredProject.date }}</div>
                </div>
                <div class="featured-tags">
                  <v-chip
                    v-for="tech in featuredProject.technologies"
                    :key="tech"
                    size="small"
                    variant="tonal"
                    color="primary"
                    class="tech-chip"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
                <p class="featured-description">{{ featuredProject.description }}</p>
                <h3 class="featured-section-title">{{ $t('projects.highlights') }}</h3>
                <ul class="featured-highlights">
                  <li v-for="highlight in featuredProject.highlights" :key="highlight">
                    {{ highlight }}
                  </li>
                </ul>
                <div v-if="featuredProject.challenge" class="featured-challenge">
                  <h3 class="featured-section-title">{{ $t('projects.challenge') }}</h3>
                  <p>{{ featuredProject.challenge }}</p>
                </div>
                <div v-if="featuredProject.solution" class="featured-solution">
                  <h3 class="featured-section-title">{{ $t('projects.solution') }}</h3>
                  <p>{{ featuredProject.solution }}</p>
                </div>
                <div class="featured-links">
                  <v-btn
                    v-for="link in featuredProject.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    :prepend-icon="link.icon"
                    variant="outlined"
                    color="primary"
                    class="link-btn"
                  >
                    {{ link.text }}
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
      
      <!-- Projects Grid -->
      <div class="projects-grid">
        <v-row>
          <v-col
            v-for="(project, index) in filteredProjects"
            :key="index"
            cols="12"
            sm="6"
            lg="4"
            class="project-col"
          >
            <v-card 
              class="project-card" 
              elevation="2"
              @click="openProjectDialog(project)"
            >
              <v-img 
                :src="project.image || `https://picsum.photos/seed/${project.title}/800/500`" 
                height="200"
                cover
                class="project-image"
              >
                <div class="project-overlay">
                  <div class="project-category">
                    {{ Array.isArray(project.category) 
                      ? project.category[0]
                      : project.category }}
                  </div>
                </div>
              </v-img>
              <v-card-text class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-date">{{ project.date }}</div>
                <p class="project-description">{{ truncateText(project.description, 120) }}</p>
                <div class="project-technologies">
                  <v-chip
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    size="x-small"
                    variant="tonal"
                    color="primary"
                    class="tech-chip"
                  >
                    {{ tech }}
                  </v-chip>
                  <v-chip
                    v-if="project.technologies.length > 3"
                    size="x-small"
                    variant="tonal"
                    color="grey"
                    class="tech-chip"
                  >
                    +{{ project.technologies.length - 3 }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
      
      <!-- Project Detail Dialog -->
      <v-dialog
        v-model="projectDialog"
        max-width="900"
        class="project-dialog"
      >
        <v-card v-if="selectedProject" class="dialog-card">
          <v-btn icon="mdi-close" class="dialog-close" @click="projectDialog = false"></v-btn>
          
          <v-carousel
            v-if="selectedProject.gallery && selectedProject.gallery.length > 0"
            hide-delimiter-background
            show-arrows="hover"
            height="400"
            class="dialog-carousel"
          >
            <v-carousel-item
              v-for="(image, i) in selectedProject.gallery"
              :key="i"
              :src="image.src"
              cover
            >
              <div class="dialog-caption">{{ image.caption }}</div>
            </v-carousel-item>
          </v-carousel>
          <v-img 
            v-else
            :src="selectedProject.image || `https://picsum.photos/seed/${selectedProject.title}/800/500`" 
            height="300"
            cover
          ></v-img>
          
          <v-card-text class="dialog-content">
            <div class="dialog-header">
              <h2 class="dialog-title">{{ selectedProject.title }}</h2>
              <div class="dialog-meta">
                <div class="dialog-category">
                  {{ Array.isArray(selectedProject.category) 
                    ? selectedProject.category[0]
                    : selectedProject.category }}
                </div>
                <div class="dialog-date">{{ selectedProject.date }}</div>
              </div>
              <div class="dialog-tags">
                <v-chip
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  size="small"
                  variant="tonal"
                  color="primary"
                  class="tech-chip"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </div>
            
            <div class="dialog-body">
              <p class="dialog-description">{{ selectedProject.description }}</p>
              
              <div v-if="selectedProject.challenge" class="dialog-challenge">
                <h3 class="dialog-section-title">{{ $t('projects.challenge') }}</h3>
                <p>{{ selectedProject.challenge }}</p>
              </div>
              
              <div v-if="selectedProject.solution" class="dialog-solution">
                <h3 class="dialog-section-title">{{ $t('projects.solution') }}</h3>
                <p>{{ selectedProject.solution }}</p>
              </div>
              
              <div class="dialog-highlights">
                <h3 class="dialog-section-title">{{ $t('projects.highlights') }}</h3>
                <ul>
                  <li v-for="highlight in selectedProject.highlights" :key="highlight">
                    {{ highlight }}
                  </li>
                </ul>
              </div>
              
              <div v-if="selectedProject.learnings" class="dialog-learnings">
                <h3 class="dialog-section-title">{{ $t('projects.learnings') }}</h3>
                <p>{{ selectedProject.learnings }}</p>
              </div>
              
              <div class="dialog-links">
                <v-btn
                  v-for="link in selectedProject.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  :prepend-icon="link.icon"
                  variant="outlined"
                  color="primary"
                  class="link-btn"
                >
                  {{ link.text }}
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// Use Vue I18n
const { t, tm } = useI18n()
const router = useRouter()

// Get translated data
const projectItems = computed(() => {
  const items = tm('projects.items')
  return Array.isArray(items) ? items : []
})

// State
const selectedCategory = ref('all')
const projectDialog = ref(false)
const selectedProject = ref(null)

// Derive categories from projects
const categories = computed(() => {
  const categorySet = new Set()
  
  projectItems.value.forEach(project => {
    if (Array.isArray(project.category)) {
      project.category.forEach(cat => categorySet.add(cat))
    } else {
      categorySet.add(project.category)
    }
  })
  
  return Array.from(categorySet)
})

// Filter projects by selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projectItems.value.filter(project => !project.featured)
  }
  
  return projectItems.value.filter(project => {
    if (!project.featured) {
      if (Array.isArray(project.category)) {
        return project.category.includes(selectedCategory.value)
      } else {
        return project.category === selectedCategory.value
      }
    }
    return false
  })
})

// Get the featured project
const featuredProject = computed(() => {
  return projectItems.value.find(project => project.featured) || null
})

// Methods
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

const openProjectDialog = (project) => {
  selectedProject.value = project
  projectDialog.value = true
}

onMounted(() => {
  console.log('Projects component mounted')
  console.log('Total projects:', projectItems.value.length)
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
}

.projects-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.back-btn {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}

.projects-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
}

.projects-description {
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
}

/* Filter Section */
.filter-section {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.filter-chip {
  margin: 0.25rem;
  font-weight: 500;
}

.category-active {
  background-color: #2196f3 !important;
  color: white !important;
}

/* Featured Project */
.featured-project {
  margin-bottom: 3rem;
}

.featured-card {
  border-radius: 16px;
  overflow: hidden;
}

.featured-carousel,
.featured-placeholder {
  height: 100%;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.75rem;
  font-size: 0.9rem;
}

.featured-content {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.featured-badge {
  display: inline-block;
  background: #2196f3;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.featured-category {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.featured-date {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-chip {
  margin-bottom: 0.25rem;
}

.featured-description {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.featured-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}

.featured-highlights {
  color: rgba(0, 0, 0, 0.7);
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.featured-highlights li {
  margin-bottom: 0.5rem;
}

.featured-challenge,
.featured-solution {
  margin-bottom: 1.5rem;
}

.featured-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;
}

/* Projects Grid */
.projects-grid {
  margin-top: 2rem;
}

.project-col {
  display: flex;
}

.project-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.project-image {
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.project-category {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.project-content {
  padding: 1.25rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-date {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.project-description {
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Dialog Styles */
.project-dialog {
  border-radius: 16px;
  overflow: hidden;
}

.dialog-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.dialog-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
}

.dialog-carousel {
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.dialog-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.75rem;
  font-size: 0.9rem;
}

.dialog-content {
  padding: 1.5rem;
}

.dialog-header {
  margin-bottom: 1.5rem;
}

.dialog-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1rem;
}

.dialog-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.dialog-category {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.dialog-date {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.dialog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dialog-description {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.dialog-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}

.dialog-challenge,
.dialog-solution,
.dialog-highlights,
.dialog-learnings {
  margin-bottom: 1.5rem;
}

.dialog-highlights ul {
  padding-left: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
}

.dialog-highlights li {
  margin-bottom: 0.5rem;
}

.dialog-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .featured-content {
    padding: 1.5rem;
  }
  
  .featured-title {
    font-size: 1.5rem;
  }
  
  .dialog-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  .projects-title {
    font-size: 2rem;
  }
  
  .featured-badge {
    font-size: 0.7rem;
  }
  
  .featured-links {
    flex-direction: column;
  }
  
  .featured-links .link-btn {
    width: 100%;
  }
  
  .dialog-links {
    flex-direction: column;
  }
  
  .dialog-links .link-btn {
    width: 100%;
  }
}
</style>