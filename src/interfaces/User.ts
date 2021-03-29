export interface StarredRepository {
  id: number,
  full_name: string,
  html_url: string,
  description: string,
  watchers: number,
  forks: number,
  language: string,
}

export default interface User {
  login: string,
  html_url: string,
  name: string,
  avatar_url: string | undefined,
  blog: string | undefined,
  location: string | undefined,
  bio: string | undefined,
  starred: StarredRepository[]
}
