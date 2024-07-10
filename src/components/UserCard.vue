<script lang="ts" setup>
import { computed } from 'vue'

import LocationIcon from '@/assets/images/icon-location.svg'
import WebsiteIcon from '@/assets/images/icon-website.svg'
import TwitterIcon from '@/assets/images/icon-twitter.svg'
import CompanyIcon from '@/assets/images/icon-company.svg'
import type { Github } from '@/types/github'

const { user } = defineProps<{
  user: Github | undefined
  // user: Ref<Github | undefined>
}>()

console.log({ user })

const defaultBioDesc =
  // 'This profile has no bio'
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'
const notAvailable = 'Not Available'
const joinedDate = computed(() => {
  console.log(!!user?.created_at)
  if (user) {
    const date = new Date(user.created_at)
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
      .format(date)
      .replace(',', '')
      .split(' ')
    const day = formattedDate[1]
    const month = formattedDate[0]
    const year = formattedDate[2]
    console.log(day, month, year)
    return `${day} ${month} ${year}`
  } else {
    return null
  }
})
</script>

<template>
  <article v-if="user" :key="user.id" class="user-card">
    <header class="header">
      <img
        :alt="`avatar of ${user.name}`"
        :src="user.avatar_url ?? ''"
        :title="user.name ?? ''"
        class="avatar"
      />

      <div class="info">
        <div class="user-name">
          <h1>{{ user.name }}</h1>
          <p>@{{ user.login }}</p>
        </div>
        <p class="created-date">Joined {{ joinedDate }}</p>
      </div>
    </header>

    <div class="content">
      <p class="bio">
        {{ user.bio ?? defaultBioDesc }}
      </p>

      <div class="stats">
        <div class="stat">
          <span>Repos</span>
          <h2>{{ user.public_repos }}</h2>
        </div>
        <div class="stat">
          <span>Followers</span>
          <h2>{{ user.followers }}</h2>
        </div>
        <div class="stat">
          <span>Following</span>
          <h2>{{ user.following }}</h2>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div :class="['link', !user.location ? 'unavailable' : '']">
        <LocationIcon />
        <span>{{ user.location ?? notAvailable }}</span>
      </div>
      <a
        :class="['link', !user.blog ? 'unavailable' : '']"
        :href="user.blog ?? '#'"
        target="_blank"
      >
        <WebsiteIcon />
        <span>{{ !user.blog || user.blog.length === 0 ? notAvailable : user.blog }}</span>
      </a>
      <a
        :class="['link', !user.twitter_username ? 'unavailable' : '']"
        :href="user.twitter_username ?? '#'"
        target="_blank"
      >
        <!--      <a  :href="user.twitter_username ? `https:` : '#'" :class="['link', !user.location ? 'unavailable' : '' ]">-->
        <TwitterIcon />
        <span>{{ user.twitter_username ?? notAvailable }}</span>
      </a>
      <a
        :class="['link', !user.company ? 'unavailable' : '']"
        :href="user.html_url ?? '#'"
        target="_blank"
      >
        <CompanyIcon />
        <span>{{ user.company ?? notAvailable }}</span>
      </a>
    </footer>
  </article>
</template>

<style scoped>
.user-card {
  position: relative;
  padding: 3.2rem 2.4rem 4.8rem;
  border-radius: var(--border-radius-outter);
  background: var(--color-foreground);
  box-shadow: 0 16px 30px -10px rgb(0, 0, 0, 0.25);

  @media (min-width: 48em) {
    padding: 4rem;
  }

  @media (min-width: 90em) {
    padding: 4.8rem 4.8rem 4.8rem 20.2rem;
  }

  & .header {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 3.3rem;

    @media (min-width: 48em) {
      margin-bottom: 2.4rem;
    }

    @media (min-width: 90em) {
      margin-bottom: 2rem;
    }

    & .avatar {
      display: block;
      width: 7rem;
      height: auto;
      border-radius: 99rem;

      @media (min-width: 48em) {
        width: 11.7rem;
      }

      @media (min-width: 90em) {
        position: absolute;
        left: 4.8rem;
        top: 4.8rem;
      }
    }

    & .info {

      @media (min-width: 90em) {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      & .user-name {
        margin-bottom: 0.6rem;

        @media (min-width: 48em) {
          margin-bottom: .4rem;
        }


        & h1 {
          font-size: 1.6rem;
          font-weight: bold;
          color: var(--color-heading);

          @media (min-width: 48em) {
            font-size: 2.6rem;
            margin-bottom: .1rem;
          }

          @media (min-width: 90em) {
            margin-bottom: .2rem;
          }
        }

        & p {
          color: var(--color-primary);

          @media (min-width: 48em) {
            font-size: 1.6rem;
          }
        }
      }

      & .created-date {
        color: var(--color-date);

        @media (min-width: 90em) {
          margin-top: .8rem;
        }
      }
    }
  }

  & .content {
    & .bio {
      line-height: 2.5rem;
      margin-bottom: 2.7rem;

      @media (min-width: 48em) {
        margin-bottom: 3.2rem;
      }
    }

    & .stats {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      background-color: var(--color-background);
      border-radius: var(--border-radius-inner);
      padding: 1.85rem 1.45rem;
      margin-bottom: 2.7rem;

      @media (min-width: 48em) {
        padding: 1.6rem 3.2rem;
        justify-content: normal;
        text-align: left;
        margin-bottom: 3rem;
      }

      @media (min-width: 90em) {
        margin-bottom: 3.7rem;
      }

      & .stat {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        @media (min-width: 48em) {
          &:first-child {
            margin-right: 10rem;
          }

          &:last-child {
            margin-left: 8.2rem;
          }
        }

        span {
          font-size: 1.1rem;

          @media (min-width: 48em) {
            font-size: 1.3rem;
          }
        }

        h2 {
          color: var(--color-heading);
          font-weight: bold;
          font-size: 1.6rem;

          @media (min-width: 48em) {
            font-size: 2.2rem;
          }
        }
      }
    }
  }

  & .footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    gap: 1.6rem;

    @media (min-width: 48em) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.9rem;

      & > *:nth-child(2) {
        grid-column: 1;
      }

      & > *:nth-child(4) {
        grid-column: 2;
      }
    }

    & .link {
      display: flex;
      align-items: center;
      gap: 1.3rem;

      &:hover {
        text-decoration: underline;
      }


      &.unavailable {
        opacity: 0.5;

        & svg * {
          fill: var(--color-text);
        }
      }
    }
  }
}

</style>

<style>
body:has(main.dark-mode) .link svg * {
  fill: var(--color-text-white);
}
</style>
