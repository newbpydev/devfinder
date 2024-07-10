<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue'
import SearchForm from '@/components/SearchForm.vue'
import UserCard from '@/components/UserCard.vue'
import { onMounted, onUpdated, ref } from 'vue'
import { useOctokit } from '@/composables/useOctokit'

const isDark = ref(false)
const { getUser, user, isLoading, error } = useOctokit()

onMounted(async () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = mediaQuery.matches
  await getUser('octocat')

})

onUpdated(() => {
  console.log(error)

})

const handleThemeChange = () => {
  isDark.value = !isDark.value
}

const handleSearch = async (name: string) => {
  await getUser(name)
}
</script>

<template>
  <main :class="['main container', isDark ? 'dark-mode' : '']">
    <TheHeader :is-dark="isDark" @theme-change="handleThemeChange" />
    <SearchForm :error="error" :is-loading="isLoading" @search="handleSearch" />
    <UserCard :key="user ? user.id : 'octocat'" :user="user" />
  </main>
</template>

<style scoped>
.main {
  margin: 0 auto;
}
</style>
