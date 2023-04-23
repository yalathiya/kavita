import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Kavita-bg-clear.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="This is logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=nature">
            <h5>NATURE</h5>
          </Link>
          <Link className="link" to="/?cat=love">
            <h5>LOVE</h5>
          </Link>
          <Link className="link" to="/?cat=longing">
            <h5>LONGING</h5>
          </Link>
          <Link className="link" to="/?cat=pastoral">
            <h5>PASTORAL</h5>
          </Link>
          <Link className="link" to="/?cat=spiritual">
            <h5>SPIRITUAL</h5>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Publish
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
