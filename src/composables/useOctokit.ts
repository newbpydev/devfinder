import { Octokit } from 'octokit'
import { ref } from 'vue'
import type { Github, HttpError } from '@/types/github'
import { DEFAULT_USER } from '@/data'

export const useOctokit = () => {
  const user = ref<Github>(DEFAULT_USER)
  const isLoading = ref(false)
  const error = ref<HttpError | null>()

  const octokit = new Octokit({
    auth: import.meta.env.GITHUB_AUTH_TOKEN
  })

  const getUser = async (username: string) => {
    try {
      isLoading.value = true
      if (!username) {
        throw new Error('username can not be empty')
      }

      const res = await octokit.request('GET /users/{username}/', {
        username: username
      })
      user.value = res.data
      error.value = null
    } catch (e) {
      error.value = e as HttpError
    } finally {
      isLoading.value = false
    }
  }

  return { getUser, user, isLoading, error }
}
