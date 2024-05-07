import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              BotCollection
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/bots">
              YourBotArmy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;