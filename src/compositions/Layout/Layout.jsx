import styled from 'styled-components';
import NavFooter from '../NavFooter/NavFooter';
import GlobalStyle from '../../global';
import DotDotDot from '../../assets/icons/Dot_Dot_Dot.png';
import { Button, Icon, Text } from '../../atoms';
import Drawer from '../Drawer/Drawer';

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
      <Drawer />
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
`;

const Main = styled.main`
  background: ${(props) => props.theme.colors.mainBg};
  padding: 8px;
  overflow: scroll;
  /* height: 100%; */
  flex-grow: 1;
`;

const Header = styled.header`
  height: 30px;
  padding: 3px 0px;
  background: ${(props) => props.theme.colors.headerBg};
  color: ${(props) => props.theme.colors.heading};
  align-items: center;
  text-align: center;
`;

