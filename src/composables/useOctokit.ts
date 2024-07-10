import { Octokit } from 'octokit'
import { onMounted, onUpdated, ref } from 'vue'
import type { Github } from '@/types/github'


export const useOctokit = () => {
  const user = ref<Github>()
  const isLoading = ref(false)
  const error = ref()

  const octokit = new Octokit({
    auth: import.meta.env.GITHUB_AUTH_TOKEN
  })

  const getUser = async (username: string) => {
    try {
      isLoading.value = true
      const res = await octokit.request('GET /users/{username}/', {
        username: username
      })
      user.value = res.data
    } catch (e) {
      console.log(e)
      error.value = e
    } finally {
      isLoading.value = false
      console.log(user.value)
    }
  }

  onMounted(async () => {
    // await getUser('newbpydev')
  })

  onUpdated(() => {
    console.log('on updated 💥')
    console.log(user.value)
  })

  return { getUser, user, isLoading, error }
}
