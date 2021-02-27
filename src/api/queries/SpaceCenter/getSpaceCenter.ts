import { gql } from '@apollo/client';
export const GET_SPACECENTER = gql`
query GetSpaceCenter($spaceCenterId: ID!) {
  spaceCenter(id: $spaceCenterId) {
    id
    name
    description
    latitude
    longitude
    planet{
      id
      name
    }    
  }
}`

