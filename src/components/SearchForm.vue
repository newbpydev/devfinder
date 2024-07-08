<script lang="ts" setup>


</script>

<template>
  <form action="" class="search-form">
    <img alt="search icon" class="search-form__img" src="/images/icon-search.svg">
    <input class="search-form__input" placeholder="Search GitHub username..." type="text">
    <button class="search-form__btn" type="submit">Search</button>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  padding: .7rem .7rem .7rem 1.6rem;
  background-color: var(--color-foreground);
  margin-bottom: 1.6rem;
  border-radius: var(--border-radius-outter);

  @media (min-width: 48em) {
    margin-bottom: 2.4rem;
  }

  & .search-form__img {
    display: inline-block;
    height: 2rem;
    margin-right: .9rem;

    @media (min-width: 48em) {
      height: 2.4rem;
    }
  }

  & .search-form__input {
    width: 18.4rem;
    line-height: 2.5;
    margin-right: auto;

    &:focus {
      outline: none;
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
    transition: all .2s;

    &:hover {
      background-color: #60ABFF;
    }
  }
}

</style>
