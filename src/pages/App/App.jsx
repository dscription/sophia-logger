import { ThemeProvider } from "styled-components";
import { prototype } from "../../themes/Themes";
import { Button, Card } from "../../atoms";
import {Route} from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={prototype}>
      <Route
        exact
        path="/"
        render={() => (
          <main>
            <Button color="danger">Basic: Danger</Button>
            <Button variant="outlined" color="danger">Variant: Outlined</Button>
            <Card>Hello</Card>
            {/* <button>testing</button> */}
          </main>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
