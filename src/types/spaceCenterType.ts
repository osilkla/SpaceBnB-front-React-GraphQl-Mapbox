import {PaginationInfoType} from './paginationInfoType'

export type SpaceCenterType ={
  id: string
  uid: string
  name: string
  description?: string
  latitude?: number
  longitude?: number
 // planet: Planet!
}

export type SpaceCenterListType ={
  pagination: PaginationInfoType
  nodes: [SpaceCenterType]
}