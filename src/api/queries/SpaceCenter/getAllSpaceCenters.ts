import { gql } from '@apollo/client';
export const GET_ALLSPACECENTERS = gql`
query GetSpaceCenters {
  spaceCenters {
    nodes{
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
  }
}`

