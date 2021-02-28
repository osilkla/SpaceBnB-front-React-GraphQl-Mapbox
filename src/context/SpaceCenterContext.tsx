import  { createContext, useState } from 'react'

const SpaceCenterContext = createContext(null)

export const SpaceCenterContextProvider = props => {
  const [currentSpaceCenter, setCurrentSpaceCenter] = useState(0);
  return (
    <SpaceCenterContext.Provider value={[currentSpaceCenter, setCurrentSpaceCenter]}>
      {props.children}
    </SpaceCenterContext.Provider>
  );
};
export default SpaceCenterContext