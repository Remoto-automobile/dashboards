import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Client from "./components/pages/client/Layout";
import Admin from "./components/pages/admin/Layout";
import Home from "./Home";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "#2f2f2f",
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <div> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/client">
            <Client />
          </Route>
        </Switch>
        {/* </div> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
