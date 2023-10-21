import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./../context/app.context";

const Header = () => {
  const { logged } = useContext(AppContext);

  return (
    <header className="header">
      <div className="name">
        <h1>House Shop</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="javascript:void(0)">Offer</a>
          </li>
          <li>
            <a href="javascript:void(0)">About Us</a>
          </li>
          <li>
            <a href="javascript:void(0)">Contact</a>
          </li>
          <li>
            <Link to="login">Log in</Link>
          </li>

          <li>
            {logged && (
              <li className="admin">
                <Link to="admin">Admin</Link>
              </li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
