export interface StarredRepository {
  id: number,
  name: string,
  full_name: string,
  html_url: string,
  description: string,
  watchers: number,
  forks: number,
  language: string,
}

export default interface User {
  login: string,
  avatar_url: string,
  html_url: string,
  name: string,
  blog: string,
  location: string,
  bio: string,
  starred: StarredRepository[]
}
