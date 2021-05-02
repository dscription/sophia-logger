import styled from 'styled-components';
import NavFooter from '../NavFooter/NavFooter';
import GlobalStyle from '../../global';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Location</h1>
      </Header>
      <Main>{children}</Main>
      <NavFooter />
      <GlobalStyle />
    </>
  );
};

export default Layout;

const Main = styled.main`
  background: ${props => props.theme.colors.mainBg};
  padding: 8px;
`;

const Header = styled.header`
  height: 30px;
  padding: 3px 0px;
  background: ${props => props.theme.colors.headerBg};
  align-items: center;
  text-align: center;
`;
