import React from "react";
import MapGL from "../components/common/Map";
import SpaceCenterList from "../components/SpaceCenterList";
import styled from "styled-components";
import Header from "../components/common/Header";
import { useQuery } from "@apollo/client";
import { GET_ALLSPACECENTERS } from "../api/queries/SpaceCenter/getAllSpaceCenters";
import { SpaceCenterContextProvider } from "../context/SpaceCenterContext";

const Container = styled.div`
  display: flex;
  max-height: 100vh;
  @media (max-width: 720px) {   
    flex-direction: column;  
  }
}
`;
const Aside = styled.aside`
  flex:1;
`;
const MainContent = styled.main`
  flex:3;
  height:100vh;  

`;

const Home = () => {
  const { error, loading, data: spaceCenters } = useQuery(GET_ALLSPACECENTERS);

  if (error) {
    return <div>An error occured</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  const _spaceCenters = spaceCenters.spaceCenters.nodes

  return (
    <>
      <Container>
        <SpaceCenterContextProvider>
          <Aside>
            <Header>SPACE TRIPS</Header>
            <SpaceCenterList spaceCenters={_spaceCenters} />
          </Aside>
          <MainContent>
            <MapGL spaceCenters={_spaceCenters} />
          </MainContent>
        </SpaceCenterContextProvider>
      </Container>
    </>
  );
}

export default Home;