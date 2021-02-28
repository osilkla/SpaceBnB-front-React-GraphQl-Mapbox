import React, { useContext } from "react";
import Card from "../common/Card";
import styled from "styled-components";
import SpaceTripLink from "../common/Link";
import SpaceCenterContext from "../../context/SpaceCenterContext";

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

const SpaceCenterItem = ({spaceCenter}) => {
  const [currentSpaceCenter, setCurrentSpaceCenter] = useContext(SpaceCenterContext);

  if(!spaceCenter){
    return <div>...Loading</div>
  } 
  return (
    <div onMouseEnter={()=>setCurrentSpaceCenter(spaceCenter)} onMouseLeave={()=>setCurrentSpaceCenter(null)}>
      <Card>       
        <Title>{spaceCenter.name}</Title>
        <SubTitle>{spaceCenter.planet.name}</SubTitle>
        <Footer>
          <SpaceTripLink to={`/spaceCenter/${spaceCenter.id}`}>See All Flights</SpaceTripLink>
        </Footer>
      </Card>
    </div>
  );
}

export default SpaceCenterItem;

