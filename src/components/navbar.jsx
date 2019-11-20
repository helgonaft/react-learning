import React, { Component } from 'react';

// stateless functional component - need to pass props as a parameter or use destructuring
const NavBar = ({ totalCounters }) => {
    console.log('Navbar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
         );
}

export default NavBar;
