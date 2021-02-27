import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_SPACECENTERS } from "../../api/queries/SpaceCenter/getAllSpaceCenters";
import { SpaceCenterType } from "../../types/spaceCenterType";

function SpaceCenterList() {
  const { error, loading, data } = useQuery(GET_SPACECENTERS);
  const [spaceCenters, setSpaceCenters] = useState<SpaceCenterType[]>([]);
  useEffect(() => {
    if (data) {
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);

  return (
    <div>       
      {spaceCenters && spaceCenters.map((spaceCenter:SpaceCenterType) => {
        return <h1 key={spaceCenter.id}> {spaceCenter.name}</h1>;
      })} 
    </div>
  );
}

export default SpaceCenterList;