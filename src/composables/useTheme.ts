import { computed } from 'vue'

const theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#424242',
    accent: '#2196f3',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  }
} as const

export function useTheme() {
  const cssVariables = computed(() => ({
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent,
    '--color-text-primary': theme.colors.text.primary,
    '--color-text-secondary': theme.colors.text.secondary,
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--border-radius-sm': theme.borderRadius.sm,
    '--border-radius-md': theme.borderRadius.md,
    '--border-radius-lg': theme.borderRadius.lg,
    '--border-radius-xl': theme.borderRadius.xl
  }))

  return {
    theme,
    cssVariables
  }
}