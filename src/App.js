import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import globalStyles from "./globalStyles";
import Appbar from "./components/client/pageLayout/Appbar";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
