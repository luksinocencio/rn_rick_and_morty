type OriginProps = {
  name: string
  url: string
}

type LocationProps = {
  name: string
  url: string
}

export type CharacterProps = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginProps
  location: LocationProps
  image: string
  episode: string[]
  url: string
  created: string
}
