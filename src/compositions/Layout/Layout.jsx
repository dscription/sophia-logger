import styled from 'styled-components';
import NavFooter from '../NavFooter/NavFooter';
import GlobalStyle from '../../global';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Location</h1>
      </Header>
      <Main>{children}</Main>
      <NavFooter />
      <GlobalStyle />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.main`
  background: ${props => props.theme.colors.mainBg};
  padding: 8px;
  height: auto;
  overflow: scroll;
`;

const Header = styled.header`
  height: 30px;
  padding: 3px 0px;
  background: ${props => props.theme.colors.headerBg};
  color: ${props => props.theme.colors.heading}
  align-items: center;
  text-align: center;
`;
