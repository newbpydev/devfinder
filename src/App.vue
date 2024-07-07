<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue'
import SearchForm from '@/components/SearchForm.vue'
import UserCard from '@/components/UserCard.vue'
import { onMounted, ref } from 'vue'

const isDark = ref(false)
// const { prefersDarkMode, updateColorScheme } = useColorScheme()


onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = mediaQuery.matches
})

const handleThemeChange = () => {
  isDark.value = !isDark.value
}

</script>

<template>
  <main :class="['main container', isDark ? 'dark-mode' : '']">
    <TheHeader :is-dark="isDark" @theme-change="handleThemeChange" />

    <SearchForm />

    <UserCard />
  </main>
</template>

<style scoped>
.main {

}


</style>
//:root {
//  --color-text: var(--color-tertiary);
//  --color-background: var(--color-background-light);
//  --color-foreground: var(--color-surface-light);
//  --color-logo: var(--color-logo-light);
//  --color-heading: var(--color-heading-light);
//}
//
//@media (prefers-color-scheme: dark) {
//  :root {
//    --color-background: var(--color-background-dark);
//    --color-text: var(--color-text-white);
//    --color-foreground: var(--color-surface-dark);
//    --color-logo: var(--color-logo-dark);
//    --color-heading: var(--color-heading-dark);
//  }
//}
