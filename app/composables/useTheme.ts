
import { ref } from 'vue'

export const useTheme = () => {
    const theme = useState<'dark' | 'light'>('theme', () => 'dark')

    // Initialize theme (client-side only)
    const init = () => {
        if (import.meta.server) return

        // 1. Check local storage
        const saved = localStorage.getItem('yfy-theme') as 'dark' | 'light' | null
        // 2. Check system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        // Determine theme (Default to dark if no preference)
        const effectiveTheme = saved || (prefersDark ? 'dark' : 'light')

        theme.value = effectiveTheme
        applyTheme(effectiveTheme)
    }

    // Toggle theme
    const toggle = () => {
        const next = theme.value === 'dark' ? 'light' : 'dark'
        theme.value = next

        applyTheme(next)

        // Persist
        if (import.meta.client) {
            localStorage.setItem('yfy-theme', next)
        }
    }

    // Apply to DOM
    const applyTheme = (t: 'dark' | 'light') => {
        if (import.meta.server) return

        const html = document.documentElement
        if (t === 'light') {
            html.classList.add('light-mode')
        } else {
            html.classList.remove('light-mode')
        }
    }

    return { theme, init, toggle }
}
