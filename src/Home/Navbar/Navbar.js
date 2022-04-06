import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="row gx-50">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand navbar-headline"
            to="/"
            style={{
              border: "1px solid white",
              padding: "110px",
              borderRadius: "8px",
              height: "190px"
            }}
          >
            Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav me-auto mb-2 fs-5 link-parent mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/topic">
                  Topic
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/country">
                  Country
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/sector">
                  Sector
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/region">
                  Region
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/pestle">
                  Pestle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/source">
                  Source
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/endYear">
                  End year
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/city">
                  City
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/addNewData">
                  Add new Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/deleteData">
                  Delete Data
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <button
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {/* <Link className="navbar-brand navbar-headline">
                  Data Visualization Filtering Dashboard
                </Link> */}
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


