import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALLSPACECENTERS } from "../../api/queries/SpaceCenter/getAllSpaceCenters";
import { SpaceCenterType } from "../../types/spaceCenterType";
import SpaceCenterItem from "../SpaceCenterItem";

function SpaceCenterList() {
  const { error, loading, data } = useQuery(GET_ALLSPACECENTERS);
  const [spaceCenters, setSpaceCenters] = useState<SpaceCenterType[]>([]);
  useEffect(() => {
    if (data) {
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);

  return (
    <div>       
      {spaceCenters && spaceCenters.map((spaceCenter:SpaceCenterType) => {
        return(
          <div key={spaceCenter.id}>
            <SpaceCenterItem  spaceCenter={spaceCenter}/>
          </div>
          ) ;
      })} 
    </div>
  );
}

export default SpaceCenterList;