import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link

export default function Navbar({ title, aboutUs, mode, toggleMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> {/* Updated path */}
                {aboutUs}
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className={`btn btn-${mode === "light" ? "dark" : "light"} mx-2`}
              onClick={toggleMode}
              aria-label={`Enable ${mode === "light" ? "Dark" : "Light"} Mode`}
            >
              Enable {mode === "light" ? "Dark" : "Light"} Mode
            </button>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Website Title",
  aboutUs: "About Us",
};
