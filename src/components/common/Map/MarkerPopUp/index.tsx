import styled from 'styled-components';

const StyledMarker = styled.div`
    height:150px;
    width:250px;
    text-align:center;
`;
const SpacePicture = styled.div`
    height:130px;
    background-image: url(${process.env.PUBLIC_URL + '/space.jpg'});
`;

export interface MarkerPopupProps {
  children: React.ReactNode;
}
const MarkerPopUp = ({ children }: MarkerPopupProps) => {
  return (
    <StyledMarker>
      <SpacePicture/>
      {children}
    </StyledMarker>
  );
}

export default MarkerPopUp;


