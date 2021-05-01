import { ThemeProvider } from "styled-components";
import { prototype } from "../../themes/Themes";
import { Button, Card, Text } from "../../atoms";
import { Route } from "react-router-dom";
import GlobalStyle from "../../global";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={prototype}>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <main>
              <Button color="danger">Basic: Danger</Button>
              <Button variant="outlined" color="danger">
                Variant: Outlined
              </Button>
              <Card>Hello</Card>
              {/* <button>testing</button> */}
              <Text size="large">Large Paragraph Text</Text>
              <Text size="medium">Medium Paragraph Text</Text>
              <Text size="small">Small Paragraph Text</Text>
              <h1>Heading</h1>
              <h2>SubHeading</h2>
            </main>
            <GlobalStyle />
          </>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
