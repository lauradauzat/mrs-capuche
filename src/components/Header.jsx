/**
 * Header component.
 */

import React, { useEffect, useState } from "react";

function Header() {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
      <header className={`navigation fixed-top header ${
          small ? "small" : ""
        }`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand font-tertiary h3" href="index.html">
          <img id="logo-header" src="/src/assets/images/logo_white.png" alt="Logo Mrs Capuche" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                A Propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}



export default Header;
