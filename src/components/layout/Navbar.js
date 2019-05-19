import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div>
      <div className="bloque blue">
        <nav className="nav-wrapper blue">
          <div className="container">
            <Link to="/" className="brand-logo">
              ZAAREA
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
          </div>
        </nav>
      </div>
      <div className="bloque red">
        <nav className="nav-wrapper red">
          <div className="container">
            <Link to="/" className="brand-logo">
              ZAAREA
            </Link>
          </div>
        </nav>
      </div>
      <div className="bloque green">
        <nav className="nav-wrapper green">
          <div className="container">
            <Link to="/" className="brand-logo">
              ZAAREA
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
