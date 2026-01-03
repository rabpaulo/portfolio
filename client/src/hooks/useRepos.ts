import { useState, useEffect } from 'react'
import type { Repo } from '../types/Repo'
import { gitHubService } from '../services/githubService'

export const useRepos = (username: string, limit: number = 5) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await gitHubService.fetchUserRepos(username, limit)
        setRepos(data)
      } catch (err) {
        setError('Failed to load repos')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username, limit])

  return { repos, loading, error }
}