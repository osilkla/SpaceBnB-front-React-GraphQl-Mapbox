import React, { useEffect, useState } from "react";
import MapGL from "../components/common/Map";
import SpaceCenterList from "../components/SpaceCenterList";
import styled from "styled-components";
import Header from "../components/common/Header";
import { SpaceCenterType } from "../types/spaceCenterType";
import { useQuery } from "@apollo/client";
import { GET_ALLSPACECENTERS } from "../api/queries/SpaceCenter/getAllSpaceCenters";
import { SpaceCenterContextProvider } from "../context/SpaceCenterContext";

const Container = styled.div`
  display: flex;
`;
const Aside = styled.aside`
  flex:1;
`;
const MainContent = styled.div`
  flex:3;
`;

const Home = () => {
  const { error, loading, data } = useQuery(GET_ALLSPACECENTERS);
  const [spaceCenters, setSpaceCenters] = useState<SpaceCenterType[]>([]);

  useEffect(() => {
    if (data) {
      const _spaceCenters = data.spaceCenters.nodes;
      setSpaceCenters(_spaceCenters );    
    }
  }, [data]);

  if(!spaceCenters){
    return <div>Loading...</div>
  }
  return (
    <>      
      <Container>  
      <SpaceCenterContextProvider>      
        <Aside> 
           <Header text={'SPACE TRIPS'}/>             
           <SpaceCenterList spaceCenters={spaceCenters}/>
        </Aside>
        <MainContent>
          <MapGL spaceCenters={spaceCenters}/>
        </MainContent>
        </SpaceCenterContextProvider>
      </Container>
    </>
  );
}

export default Home;