import { gql } from '@apollo/client';
export const GET_SPACECENTERS = gql`
query GetSpaceCenters {
  spaceCenters {
    nodes{
      id
      name
      description
      latitude
      longitude
    }
  }
}`

