import React from 'react';
import { NavLink, Link } from 'react-bootstrap';

const NavBarComponent = () => {
  return (
    <div className="navbar-nav navbar-expand-lg navbar-light bg-light">
        <NavLink
            to="/"
            exact
            >
            About
        </NavLink>
        <NavLink 
            to="/projects"
            exact
            >
          Projects
        </NavLink>
        <NavLink 
            to="/blogs"
            exact
            >
            Blogs
        </NavLink>
        <Link>
        <a href=
          "https://docs.google.com/document/d/19zFdYFqQNTxBDGIn7qVYPMQWJRZM5ePV8UnaA7_bIY4/edit"
          >
          Resume  
          </a>
          </Link>
        <a href=
           "https://github.com/jamescross813"
            >
            GitHub
        </a>
        <a href=
           "https://www.linkedin.com/in/jamescross813/"
            >
            LinkdIn
        </a>
    </div>
  );
};

export default NavBarComponent;
