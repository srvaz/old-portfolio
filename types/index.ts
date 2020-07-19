export type Author = {
  id: number
  firstName: string
  lastName: string
  age: number
  sex: string
  description: string
  career: string
}

export type Skill = {
  cover: string
  description: string
  icon: string
  label: string
  link?: string
  name: string
  recommenderProfiles?: RecommenderProfile[]
}

export type RecommenderProfile = {
  name: string
  avatar: string
}
