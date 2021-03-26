import axios from 'axios'
import User, { StarredRepository } from '../interfaces/User'

const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 0
})

export async function fetchStarredRepos (username: string): Promise<StarredRepository[]> {
  const response = await api.get<StarredRepository[]>(`users/${username}/starred`)

  return response.data
}

export async function fetchUser (username: string): Promise<User> {
  const response = await api.get<User>(`users/${username}`)

  const user = response.data

  user.starred = await fetchStarredRepos(username)

  return user
}
