import React from 'react';
import { ThemeProvider } from 'styled-components';
import { prototype } from '../../themes/Themes';
import { Button, Card, Text } from '../../atoms';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../compositions/Layout/Layout';

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
            <Card variant="image" src="https://picsum.photos/300/200">
              With Image
            </Card>
            <Text size="large">Large Paragraph Text</Text>
            <Text size="medium">Medium Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            <Text size="small">Small Paragraph Text</Text>
            
          </Layout>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
