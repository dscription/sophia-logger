import { ThemeProvider } from "styled-components";
import { prototype } from "../../themes/Themes";
import { Button, Card, Text } from "../../atoms";
import { Route } from "react-router-dom";
import GlobalStyle from "../../global";
import React from "react";
import styled from "styled-components";

// Layout component should manage responsive resizing, will need media queries eventually.
const Layout = styled.main`
  padding: 10px;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={prototype}>
      <Route
        exact
        path="/"
        render={() => (
          <Layout>
            <Button color="danger">Basic: Danger</Button>
            <Button variant="outlined" color="danger">
              Variant: Outlined
            </Button>
            <Card>Hello</Card>
            <Card variant="image" src="https://picsum.photos/300/200">With Image</Card>
            <Text size="large">Large Paragraph Text</Text>
            <Text size="medium">Medium Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            <h1>Heading</h1>
            <h2>SubHeading</h2>
            <GlobalStyle />
          </Layout>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
