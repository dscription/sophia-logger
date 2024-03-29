import styled from "styled-components";
import NavFooter from "../NavFooter/NavFooter";
import Drawer from "../Drawer/Drawer";

const Layout = ({ title, children, user }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
      <Drawer user={user} />
      <NavFooter />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto auto;
  grid-template-areas:
    "header"
    "main"
    "drawer"
    "footer";
`;

const Main = styled.main`
  grid-area: main;
  background: ${(props) => props.theme.colors.mainBg};
  padding: 8px;
  overflow: auto;
`;

const Header = styled.header`
  grid-area: header;
  /* height: 30px; */
  padding: 3px 0px;
  background: ${(props) => props.theme.colors.headerBg};
  color: ${(props) => props.theme.colors.heading};
  align-items: center;
  text-align: center;
`;
