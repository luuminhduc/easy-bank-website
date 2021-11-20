import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import CloseNav from "../../assets/images/icon-close.svg";
import Menu from "../../assets/images/icon-hamburger.svg";
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`header ${showNav ? "nav_active" : ""}`}>
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>

      {/* Navbar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <button className="btn_main">Request Invite</button>

      <img
        onClick={() => setShowNav(false)}
        src={CloseNav}
        alt=""
        className="nav_btn close_nav"
      />
      <img
        onClick={() => setShowNav(true)}
        src={Menu}
        alt=""
        className="nav_btn menu"
      />
    </div>
  );
};

export default Header;
