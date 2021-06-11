import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Client from "./components/pages/client/Layout";
import Admin from "./components/pages/admin/Layout";
import Home from "./Home";

import Api from "./context/Api";

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
  // selectedSideitem: 'dashboard'
};
const initialSidebarState = { selected: "dashboard" };

const uiReducer = (state, action) => {
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

const sidebarReducer = (state, action) => {
  switch (action) {
    case "dashboard":
      return { ...state, selected: "dashboard" };
    case "c_profile":
      return { ...state, selected: "c_profile" };
    case "c_fixMyCar":
      return { ...state, selected: "c_fixMyCar" };
    case "c_carInfo":
      return { ...state, selected: "c_carInfo" };
    case "c_help":
      return { ...state, selected: "c_help" };
    case "a_products":
      return { ...state, selected: "a_products" };
    case "a_users":
      return { ...state, selected: "a_users" };
    case "a_notification":
      return { ...state, selected: "a_notification" };
    case "a_couponCode":
      return { ...state, selected: "a_couponCode" };
    case "a_help":
      return { ...state, selected: "a_help" };
    default:
      return { ...state };
  }
};
export const UiContext = React.createContext();
export const SidebarContext = React.createContext();

function App() {
  const [ui, dispatch] = React.useReducer(uiReducer, initialUiState);
  const [sidebar, sidebarDispatch] = React.useReducer(
    sidebarReducer,
    initialSidebarState
  );

  return (
    <Api>
      <UiContext.Provider value={{ uiState: ui, uiDispatch: dispatch }}>
        <SidebarContext.Provider
          value={{ sidebarState: sidebar, sidebarDispatch: sidebarDispatch }}
        >
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
        </SidebarContext.Provider>
      </UiContext.Provider>
    </Api>
  );
}

export default App;
