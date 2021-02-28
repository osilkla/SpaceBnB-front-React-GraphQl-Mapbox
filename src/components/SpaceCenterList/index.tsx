import React from "react";
import { SpaceCenterType } from "../../types/spaceCenterType";
import SpaceCenterItem from "../SpaceCenterItem";
import styled from "styled-components";

const ScrollList = styled.div`
    max-height: 100vh;
    overflow-y: scroll;
`;


function SpaceCenterList({spaceCenters}) {
  return (
    <ScrollList>       
      {spaceCenters && spaceCenters.map((spaceCenter:SpaceCenterType) => {
        return(
          <div key={spaceCenter.id}>
            <SpaceCenterItem  spaceCenter={spaceCenter}/>
          </div>
          );
      })} 
    </ScrollList>
  );
}

export default SpaceCenterList;