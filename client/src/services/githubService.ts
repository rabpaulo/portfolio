import type { Repo } from '../types/Repo'

export class GitHubService {
  private baseUrl = 'https://api.github.com'

  async fetchUserRepos(username: string, limit: number = 5): Promise<Repo[]> {
    const response = await fetch(`${this.baseUrl}/users/${username}/repos`)
    if (!response.ok) {
      throw new Error('Failed to fetch repos')
    }
    const data = await response.json()
    return data.slice(0, limit)
  }
}

export const gitHubService = new GitHubService()