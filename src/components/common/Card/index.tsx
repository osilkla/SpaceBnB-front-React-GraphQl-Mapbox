import styled from "styled-components";

const Container = styled.div`
  background: #FFFFFF;
  border-radius: 2px;
  width: 400px;
  height: 200px;
  position: relative;
  filter: drop-shadow(0px 4px 8px rgba(51, 51, 51, 0.10));
  margin:10px;
  &:hover{
    filter: drop-shadow(0px 4px 8px rgba(51, 51, 51, 0.323317));
  }
  @media (max-width: 720px) {   
    width: 300px;
    height: 150px;
  }
`;

export interface CardProps {
  children: React.ReactNode;
}
const Card = ({children}: CardProps) => {
  return (
    <Container>       
      {children}
    </Container>
  );
}

export default Card;