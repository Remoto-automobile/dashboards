import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
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
