import { PaginationInfoType } from './paginationInfoType'
import { PlanetType } from './planetType'

export type SpaceCenterType = {
  id: string
  uid: string
  name: string
  description?: string
  latitude?: number
  longitude?: number
  planet: PlanetType
}

export type SpaceCenterListType = {
  pagination: PaginationInfoType
  nodes: [SpaceCenterType]
}