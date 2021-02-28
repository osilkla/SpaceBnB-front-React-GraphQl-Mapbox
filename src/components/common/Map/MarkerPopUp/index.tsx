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
const MarkerPopUp = ({text}) => {
  return (
    <StyledMarker>
      <SpacePicture/>
        {text}
    </StyledMarker>
  );
}

export default MarkerPopUp;


