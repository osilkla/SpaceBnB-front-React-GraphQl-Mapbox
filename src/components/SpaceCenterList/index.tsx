import React from "react";
import { SpaceCenterType } from "../../types/spaceCenterType";
import SpaceCenterItem from "../SpaceCenterItem";
import styled from "styled-components";

const ScrollList = styled.ul`
    ${props => props.takeViewportHeight} 
    max-height: calc(100vh - 88px);
    overflow-y: scroll;
    list-style-type: none;
    padding: 0;
    margin: 0;    
    @media (min-width: 720px) {   
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      } 
    }
    @media (max-width: 720px) {   
      display: flex; 
      overflow-y:hidden;
    }
`;

const NoData = styled.p`
   text-align:center;
`;

export interface SpaceCenterListProps {
  spaceCenters: Array<SpaceCenterType>;
}

function SpaceCenterList({ spaceCenters }: SpaceCenterListProps) {
  if (spaceCenters.length === 0) {
    return <NoData>No space centers available</NoData>;
  }
  return (
    <ScrollList>
      {spaceCenters && spaceCenters.map((spaceCenter: SpaceCenterType) => {
        return (
          <li key={`list-${spaceCenter.id}`}>
            <SpaceCenterItem spaceCenter={spaceCenter} />
          </li>
        );
      })}
    </ScrollList>
  );
}

export default SpaceCenterList;