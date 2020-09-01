import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                useContext
            </Link>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/login"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            className="nav-link"
                            activeClassName="active"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
