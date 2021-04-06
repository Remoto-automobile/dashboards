import React from "react";
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

const initialUiState = {
  createOrderDialog: false,
  updateDataDialog: false,
  updateOrderStatus: false,
  productDataDialog: false,
  updatePriceDialog: false,
  updateProbabilityDialog: false,
  openMobileMenu: false,
};
const reducer = (state, action) => {
  switch (action) {
    case "openMobileMenu":
      return { ...state, openMobileMenu: true };
    case "closeMobileMenu":
      return { ...state, openMobileMenu: false };
    case "showCreateOrderDialog":
      return { ...state, createOrderDialog: true };
    case "hideCreateOrderDialog":
      return { ...state, createOrderDialog: false };
    case "showUpdateDataDialog":
      return { ...state, updateDataDialog: true };
    case "hideUpdateDataDialog":
      return { ...state, updateDataDialog: false };
    case "showUpdateOrderStatus":
      return { ...state, updateOrderStatus: true };
    case "hideUpdateOrderStatus":
      return { ...state, updateOrderStatus: false };
    case "showUpdateProductDialog":
      return { ...state, productDataDialog: true };
    case "hideUpdateProductDialog":
      return { ...state, productDataDialog: false };
    case "showUpdatePriceDialog":
      return { ...state, updatePriceDialog: true };
    case "hideUpdatePriceDialog":
      return { ...state, updatePriceDialog: false };
    case "showUpdateProbabilityDialog":
      return { ...state, updateProbabilityDialog: true };
    case "hideUpdateProbabilityDialog":
      return { ...state, updateProbabilityDialog: false };
    default:
      return {
        ...state,
        createOrderDialog: false,
        updateDataDialog: false,
        updateOrderStatus: false,
        productDataDialog: false,
        updatePriceDialog: false,
        updateProbabilityDialog: false,
        openMobileMenu: false,
      };
  }
};
export const UiContext = React.createContext();

function App() {
  const [ui, dispatch] = React.useReducer(reducer, initialUiState);

  return (
    <UiContext.Provider value={{ uiState: ui, uiDispatch: dispatch }}>
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
    </UiContext.Provider>
  );
}

export default App;
