import { onMounted, onUpdated, ref } from 'vue'

export function useColorScheme() {
  const prefersDarkMode = ref(false)
  // const updateColorScheme = (e?: boolean) => {
  const updateColorScheme = (e?: MediaQueryListEvent) => {
    // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches
    const isDarkMode = e ? e.matches : window.matchMedia('(prefers-color-scheme: dark').matches
    // console.log({ isDarkMode, prefersDarkMode })
    prefersDarkMode.value = isDarkMode

    // document.documentElement.style.setProperty('--color-text', isDarkMode ?
    // 'var(--color-text-dark)' : 'var(--color-tertiary')
    // document.documentElement.style.setProperty('--color-background', isDarkMode ?
    // 'var(--color-background-dark)' : 'var(--color-background-light')
    // document.documentElement.style.setProperty('--color-foreground', isDarkMode ?
    // 'var(--color-surface-dark)' : 'var(--color-surface-light')
    // document.documentElement.style.setProperty('--color-logo', isDarkMode ?
    // 'var(--color-logo-dark)' : 'var(--color-logo-light')
    // document.documentElement.style.setProperty('--color-heading', isDarkMode ?
    // 'var(--color-heading-dark)' : 'var(--color-heading-light')
  }


  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    updateColorScheme()
    mediaQuery.addEventListener('change', updateColorScheme)
  })

  onUpdated(() => {
    console.log({ prefersDarkMode })
  })

  return {
    prefersDarkMode,
    updateColorScheme
  }
}
