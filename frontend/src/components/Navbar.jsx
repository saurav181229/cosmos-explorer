import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setActiveSection}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand text-info fw-bold" to="/">
          🔭 Cosmos Explorer
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
          <button className="btn btn-link nav-link" onClick={() => setActiveSection('apod')}>APOD</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link" onClick={() => setActiveSection('mars')}>Mars</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link" onClick={() => setActiveSection('neo')}>NEO</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link" onClick={() => setActiveSection('search')}>Search</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link" onClick={() => setActiveSection('ai')}>Ask the cosmos</button>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
