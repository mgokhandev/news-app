import React from "react";
import "./index.css";

export const Navbar = () => {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">Bumdle</h2>
        <nav>
          <ul>
            <li>
              <a href="/home">News</a>
            </li>
            <li>
              <a href="/home">Explore</a>
            </li>
            <li>
              <a href="/home">Sport</a>
            </li>
            <li>
              <a href="/home">Life</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="/home">Log in</a>
            </li>
            <li>
              <a href="/home">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
