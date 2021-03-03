import { createContext, useContext, useState } from 'react'
import { SpaceCenterType } from '../types/spaceCenterType';

type SpaceCenterContextType = [SpaceCenterType | undefined, (sp: SpaceCenterType) => void]

const SpaceCenterContext = createContext<SpaceCenterContextType>([undefined, () => undefined])

export const SpaceCenterContextProvider = props => {

  const [currentSpaceCenterSelected, setCurrentSpaceCenterSelected] = useState<SpaceCenterType | undefined>(undefined);

  return (
    <SpaceCenterContext.Provider value={[currentSpaceCenterSelected, setCurrentSpaceCenterSelected]}>
      {props.children}
    </SpaceCenterContext.Provider>
  );
};

export const useCurrentSpaceCenter = () => useContext(SpaceCenterContext)

export default SpaceCenterContext