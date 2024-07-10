<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue'
import SearchForm from '@/components/SearchForm.vue'
import UserCard from '@/components/UserCard.vue'
import { onMounted, ref } from 'vue'
import { useOctokit } from '@/composables/useOctokit'

const isDark = ref(false)
const { getUser, user } = useOctokit()

onMounted(async () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = mediaQuery.matches
  await getUser('octocat')
})

const handleThemeChange = () => {
  isDark.value = !isDark.value
}

const handleSearch = async (user: string) => {
  await getUser(user)
}
</script>

<template>
  <main :class="['main container', isDark ? 'dark-mode' : '']">
    <TheHeader :is-dark="isDark" @theme-change="handleThemeChange" />
    <SearchForm @search="handleSearch" />
    <UserCard :key=" user ? user.id : 'octocat'" :user="user" />
  </main>
</template>

<style scoped>
.main {
  margin: 0 auto;
}
</style>
