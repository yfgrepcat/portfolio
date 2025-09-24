import { createI18n } from 'vue-i18n'

// Import translations directly
const messages = {
  en: {
    hero: {
      name: "Yoann FRANCOIS",
      title: "Network Engineering Student", 
      description: "Passionate about network infrastructure, cybersecurity, and emerging technologies. Currently studying at ENSEEIHT, building the future of digital communications.",
      buttons: {
        contact: "Get In Touch",
        work: "View My Work"
      },
      status: "Automating networks at Airbus thanks to SPIE ICS"
    },
    sections: {
      title: "Explore My Journey",
      subtitle: "Discover the different aspects of my academic and professional development",
      explore: "Explore",
      career: {
        title: "Career Development",
        description: "Professional experiences, internships, and career progression in network engineering.",
        highlights: ["Internships", "Projects", "Skills"]
      },
      engineering: {
        title: "Engineering Course",
        description: "Academic curriculum, technical courses, and engineering fundamentals at ENSEEIHT.",
        highlights: ["Coursework", "Labs", "Research"]
      },
      international: {
        title: "International Mobility",
        description: "Study abroad programs, cultural exchanges, and global perspectives.",
        highlights: ["Exchange", "Languages", "Culture"]
      },
      sustainability: {
        title: "Sustainability & Civic Engagement",
        description: "Environmental initiatives, community involvement, and social responsibility projects.",
        highlights: ["Green Tech", "Volunteer", "Impact"]
      },
      activities: {
        title: "Sport & Other Activities",
        description: "Athletic achievements, hobbies, and extracurricular activities that shape my character.",
        highlights: ["Sports", "Hobbies", "Leadership"]
      }
    }
  },
  fr: {
    hero: {
      name: "Yoann FRANCOIS",
      title: "Étudiant Ingénieur Réseaux",
      description: "Passionné par l'infrastructure réseau, la cybersécurité et les technologies émergentes. Actuellement étudiant à l'ENSEEIHT, je construis l'avenir des communications numériques.", 
      buttons: {
        contact: "Me Contacter",
        work: "Voir Mon Travail"
      },
      status: "Automatise la gestion du réseau chez Airbus via SPIE ICS"
    },
    sections: {
      title: "Explorez Mon Parcours",
      subtitle: "Découvrez les différents aspects de mon développement académique et professionnel",
      explore: "Explorer",
      career: {
        title: "Développement Professionnel",
        description: "Expériences professionnelles, stages et progression de carrière en ingénierie réseau.",
        highlights: ["Stages", "Projets", "Compétences"]
      },
      engineering: {
        title: "Cursus Ingénieur",
        description: "Curriculum académique, cours techniques et fondamentaux d'ingénierie à l'ENSEEIHT.",
        highlights: ["Cours", "TP", "Recherche"]
      },
      international: {
        title: "Mobilité Internationale",
        description: "Programmes d'échange, échanges culturels et perspectives globales.",
        highlights: ["Échange", "Langues", "Culture"]
      },
      sustainability: {
        title: "Durabilité & Engagement Civique",
        description: "Initiatives environnementales, implication communautaire et projets de responsabilité sociale.",
        highlights: ["Tech Verte", "Bénévolat", "Impact"]
      },
      activities: {
        title: "Sport & Autres Activités",
        description: "Réussites sportives, loisirs et activités extrascolaires qui façonnent mon caractère.",
        highlights: ["Sports", "Loisirs", "Leadership"]
      }
    }
  }
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})