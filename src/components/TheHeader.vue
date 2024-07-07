<script lang="ts" setup>

defineProps<{ isDark: boolean }>()
defineEmits<{
  themeChange: [value: boolean]
}>()
</script>

<template>
  <header>
    <div class="logo-container">
      <span class="logo">devfinder</span>
      <button type="button" @click="$emit('themeChange', isDark)" v-text="isDark ? 'Light' : 'Dark'"></button>
    </div>
  </header>
</template>

<style scoped>

</style>
