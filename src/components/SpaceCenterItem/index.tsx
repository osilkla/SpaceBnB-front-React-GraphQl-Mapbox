import React, { useEffect, useRef } from "react";
import Card from "../common/Card";
import styled from "styled-components";
import SpaceTripLink from "../common/Link";
import { useCurrentSpaceCenter } from "../../context/SpaceCenterContext";
import RocketIcon from "../common/RocketIcon";

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #4E4E4E;
  padding-left: 1.5em;
  padding-top: 2rem;
`;
const SubTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  padding-left: 2em;
`;
const Footer = styled.footer`
  background: #333333;
  width:100%;
  color:#FAFAFB;
  height:50px;
  bottom:0;
  position:absolute;
  text-align:center;
  text-transform:uppercase;
  line-height:50px;
  &:hover{
    color: #F9CB1C;  
   }
`;


const SpaceCenterItem = ({ spaceCenter }) => {
  const spaceCenterRef = useRef<HTMLDivElement>(null);
  const [currentSpaceCenterSelected, setCurrentSpaceCenterSelected] = useCurrentSpaceCenter();

  useEffect(() => {
    if (currentSpaceCenterSelected && spaceCenter.uid === currentSpaceCenterSelected.uid) {
      spaceCenterRef.current.scrollIntoView();
    }
  }, [currentSpaceCenterSelected, spaceCenter.uid]);

  return (
    <div
      ref={spaceCenterRef}
      onClick={() => setCurrentSpaceCenterSelected(spaceCenter)}
    >
      <Card>
        <Title>{spaceCenter.name}</Title>
        <SubTitle>{spaceCenter.planet.name}</SubTitle>
        <RocketIcon />
        <Footer>
          <SpaceTripLink to={`/spaceCenter/${spaceCenter.uid}`}>See All Flights</SpaceTripLink>
        </Footer>
      </Card>
    </div>
  );
}

export default SpaceCenterItem;

