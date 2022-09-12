import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { prototype } from "../../themes/Themes";
import { Route } from "react-router-dom";
import Curiosity from "../Curiosity/Curiosity";
import Landing from "../Landing/Landing";
import Menu from "../Menu/Menu";
import GlobalStyle from "../../global";
import * as userService from "../../services/userService";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await userService.getCurrentUser().then((user) => setUser(user));
  };

  return (
    <ThemeProvider theme={prototype}>
      {user && (
        <Route
          exact
          path="/curiosity"
          render={() => <Curiosity user={user} />}
        />
      )}

      <Route exact path="/menu" render={() => <Menu />} />
      <Route exact path="/" render={() => (user ? <Menu /> : <Landing />)} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
