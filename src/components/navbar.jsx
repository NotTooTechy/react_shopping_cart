import React from 'react';

// Statless Functional Component
//object destrucuring const NavBar = (props) => {
const NavBar = ({totalCounters}) => {
  console.log('NavBar - Rendered');
  return(
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar{" "}
          <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </nav>
 );
};

export default NavBar;
