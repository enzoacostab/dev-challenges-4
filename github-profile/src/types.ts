export interface ProfileType {
  avatar_url: string
  followers: string
  following: string
  location: string
  name: string
  bio: string
  [key: string]: string
}

export interface Repo {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  updated_at: Date
  html_url: string
  license: string | null
  [key: string]: string | Date | number | null

}