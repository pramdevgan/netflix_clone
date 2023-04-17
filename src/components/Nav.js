import React, { useState, useEffect } from "react";
import "./Nav.css";
const Netflix_Logo = "https://i.imgur.com/FN6pz5Z.png";
const Avatar = "https://i.imgur.com/4tl1bmf.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => "");
    };
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Netflix_Logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={Avatar} alt="Avator Icon" />
    </div>
  );
}

export default Nav;
