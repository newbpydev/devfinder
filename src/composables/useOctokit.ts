import { Octokit } from 'octokit'
import { ref } from 'vue'
import type { Github, HttpError } from '@/types/github'


export const useOctokit = () => {
  const user = ref<Github>()
  const isLoading = ref(false)
  const error = ref<HttpError | null>()

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
      error.value = null
    } catch (e) {
      console.log(e instanceof Error)
      error.value = e as HttpError

      console.log({ e })
    } finally {
      isLoading.value = false
      console.log(user.value)
    }
  }

  return { getUser, user, isLoading, error }
}
