<script lang="ts" setup>
// import MoonIcon from '@/assets/images/icon-moon.svg'
// import SunIcon from '@/assets/images/icon-sun.svg'
import IconMoon from '@/components/IconMoon.vue'
import IconSun from '@/components/IconSun.vue'

defineProps<{ isDark: boolean }>()
defineEmits<{
  themeChange: [value: boolean]
}>()
</script>

<template>
  <header class="logo-container">
    <span class="logo">devfinder</span>

    <button :class="['btn-theme', isDark ? 'dark-mode' : '']" type="button" @click="$emit('themeChange', isDark)">
      <span>{{ isDark ? 'LIGHT' : 'DARK' }}</span>
      <IconSun v-if="isDark" class="icon" />
      <IconMoon v-else class="icon" />
    </button>
  </header>
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.6rem;

  & .logo {
    font-size: 2.6rem;
    font-weight: bold;
    color: #222731;
  }

  &:has(.btn-theme.dark-mode) .logo {
    color: var(--color-text-white);
  }

  & .btn-theme {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: inherit;
    line-height: 2.5;
    font-weight: bold;
    transition: all .2s ease;

    & span {
      letter-spacing: 2.5px;
    }

    &:hover {
      color: #222731;
    }

    &.dark-mode:hover {
      color: #90A4D4;
    }

    & .icon * {
      transition: all .2s ease;
    }

    &:hover .icon * {
      fill: #222731;
    }

    &.dark-mode:hover .icon * {
      fill: #90A4D4;
    }


  }
}
</style>
