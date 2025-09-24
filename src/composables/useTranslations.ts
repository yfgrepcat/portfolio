import { ref, computed, readonly } from 'vue'

// Types for better TypeScript support
export interface TranslationKeys {
  hero: {
    name: string
    title: string
    description: string
    buttons: {
      contact: string
      work: string
    }
  }
  about: {
    title: string
    description1: string
    description2: string
    education: {
      title: string
      school: string
      program: string
    }
  }
  sections: {
    title: string
    career: {
      title: string
      description: string
      highlights: string[]
    }
    engineering: {
      title: string
      description: string
      highlights: string[]
    }
    international: {
      title: string
      description: string
      highlights: string[]
    }
    sustainability: {
      title: string
      description: string
      highlights: string[]
    }
    activities: {
      title: string
      description: string
      highlights: string[]
    }
    explore: string
  }
  contact: {
    title: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      send: string
    }
  }
}

export type Language = 'en' | 'fr'

// Centralized translations with full type safety
const translations: Record<Language, TranslationKeys> = {
  en: {
    hero: {
      name: "Yoann FRANCOIS",
      title: "Network Engineering Student",
      description: "Passionate about network infrastructure, cybersecurity, and emerging technologies. Currently studying at ENSEEIHT, building the future of digital communications.",
      buttons: {
        contact: "Get In Touch",
        work: "View My Work"
      }
    },
    about: {
      title: "About Me",
      description1: "I'm Yoann FRANCOIS, a dedicated networking student at ENSEEIHT, passionate about building robust and secure network infrastructures.",
      description2: "Currently focusing on network protocols, cybersecurity, and cloud technologies, I'm always eager to learn and implement cutting-edge solutions.",
      education: {
        title: "Education",
        school: "ENSEEIHT",
        program: "Network Engineering • 2023-2025"
      }
    },
    sections: {
      title: "Explore My Journey",
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
      },
      explore: "Explore"
    },
    contact: {
      title: "Get In Touch",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
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
      }
    },
    about: {
      title: "À Propos",
      description1: "Je suis Yoann FRANCOIS, étudiant en réseaux à l'ENSEEIHT, passionné par la construction d'infrastructures réseau robustes et sécurisées.",
      description2: "Actuellement concentré sur les protocoles réseau, la cybersécurité et les technologies cloud, je suis toujours désireux d'apprendre et d'implémenter des solutions de pointe.",
      education: {
        title: "Formation",
        school: "ENSEEIHT",
        program: "Ingénierie Réseaux • 2023-2025"
      }
    },
    sections: {
      title: "Explorez Mon Parcours",
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
      },
      explore: "Explorer"
    },
    contact: {
      title: "Me Contacter",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le Message"
      }
    }
  }
}

// Global reactive state
const currentLanguage = ref<Language>('en')

export function useTranslations() {
  // Get nested translation value using dot notation
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  // Get array translations (for highlights, etc.)
  const tArray = (key: string): string[] => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found`)
        return []
      }
    }
    
    return Array.isArray(value) ? value : []
  }

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    // Save to localStorage for persistence
    localStorage.setItem('preferred-language', lang)
  }

  // Initialize from localStorage
  const initializeLanguage = () => {
    const saved = localStorage.getItem('preferred-language') as Language
    if (saved && (saved === 'en' || saved === 'fr')) {
      currentLanguage.value = saved
    }
  }

  const locale = readonly(currentLanguage)

  return {
    t,
    tArray,
    setLanguage,
    initializeLanguage,
    locale,
    availableLanguages: ['en', 'fr'] as const
  }
}