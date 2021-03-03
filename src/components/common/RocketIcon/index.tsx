import styled from "styled-components";

const Icon = styled.img`
  position:absolute;
  width:30px;
  top:25px;
  right:25px;
`;
const RocketIcon = () => <Icon src={'Rocket.png'} alt={'icon-rocket'}/>
export default RocketIcon;