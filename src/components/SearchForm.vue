<script lang="ts" setup>
import { ref } from 'vue'
import type { HttpError } from '@/types/github'

defineProps<{
  isLoading: boolean
  error: HttpError | null | undefined
}>()

const emit = defineEmits<{
  search: [value: string]
}>()

const userName = ref()

const handleSubmit = async () => {
  emit('search', userName.value)
}
</script>

<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <img alt="search icon" class="search-form__icon" src="/images/icon-search.svg" />

    <input
      v-model="userName"
      class="search-form__input"
      placeholder="Search GitHub username..."
      type="text"
    />
    <span v-if="error" class="error-message">{{ error.status === 404 ? 'No results' : '' }}</span>

    <button :disabled="isLoading" class="search-form__btn" type="submit">
      {{ isLoading ? 'Loading' : 'Search' }}
    </button>
  </form>
</template>

<style scoped>
.search-form {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  background-color: var(--color-foreground);
  margin-bottom: 1.6rem;
  border-radius: var(--border-radius-outter);
  box-shadow: 0 16px 30px -10px rgb(0, 0, 0, 0.25);

  @media (min-width: 48em) {
    padding: 0.95rem 1rem 0.95rem 3.2rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 90em) {
  }

  & .search-form__icon {
    display: inline-block;
    height: 2rem;
    width: auto;
    margin-right: 0.9rem;

    @media (min-width: 48em) {
      height: 2.4rem;
      margin-right: 2.4rem;
    }
  }

  & .search-form__input {
    width: 100%;
    line-height: 2.5;
    margin-right: 0.7rem;
    z-index: 2;

    &:focus {
      outline: none;
    }

    @media (min-width: 48em) {
      font-size: 1.8rem;
    }
  }

  & .error-message {
    position: absolute;
    font-weight: bold;
    right: 10rem;
    color: #f74646;

    @media (min-width: 48em) {
      right: 13rem;
    }

    @media (min-width: 90em) {
      right: 14rem;
    }
  }

  & .search-form__btn {
    justify-self: end;
    color: var(--color-text-white);
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1.25rem 1.6rem;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-inner);
    transition: all 0.2s;

    &:hover {
      background-color: #60abff;
    }

    &:disabled {
      background-color: #60abff;
      cursor: wait;
    }

    @media (min-width: 48em) {
      font-size: 1.6rem;
      padding: 1.3rem 2.4rem;
    }
  }
}
</style>
