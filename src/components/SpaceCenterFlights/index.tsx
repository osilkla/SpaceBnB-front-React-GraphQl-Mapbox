import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { GET_SPACECENTER } from "../../api/queries/SpaceCenter/getSpaceCenter";
import { Link, useParams } from "react-router-dom";


const SpaceCenterFlights:FunctionComponent= () => {
 const { spaceCenterId } = useParams<Record<string, string | undefined>>()
  
  const { data, loading, error } = useQuery(GET_SPACECENTER, { variables: { spaceCenterId:spaceCenterId } }
  );

  if(!data){
    return <div>...Loading</div>
  } 
  return (
    <div>       
      <h1>{data.spaceCenter.name}, Houston speaking, do you copy ?</h1>
      <Link to={'/'}>Go back to safe place</Link>
    </div>
  );
}

export default SpaceCenterFlights;