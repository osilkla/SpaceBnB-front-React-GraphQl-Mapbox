import styled from 'styled-components';

const Container = styled.div`
  background: #FFFFFF; 
  width: 100%;
  height: 88px;
  position: sticky;
  filter: drop-shadow(0px 0px 8px rgba(51, 51, 51, 0.10));
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 88px;
  letter-spacing: 3.69231px;
  text-transform: uppercase;
  color: #333333;
  padding-left: 1em;
  margin:0;
`;

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps)=> {
  return (
    <Container>       
      <Title>{children}</Title>
    </Container>
  );
}

export default Header;