import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { SidebarContext } from "./App";

function Home() {
  const Sidebar = React.useContext(SidebarContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Select below to view dashboard</p>
        <Link
          to="/client"
          style={{ margin: 30, fontDecoration: "none", color: "white" }}
        >
          Client Dashboard
        </Link>
        <Link
          onClick={() => {
            Sidebar.sidebarDispatch("a_products");
          }}
          to="/admin"
          style={{ margin: 30, fontDecoration: "none", color: "white" }}
        >
          Admin Dashboard
        </Link>
      </header>
    </div>
  );
}

export default Home;
