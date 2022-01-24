import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>File Upload And Download</h1>
            <nav>
                <NavLink activeclassname="active" to="/">
                    Home
                </NavLink>
                <NavLink activeclassname="active" to="/list">
                    Files List
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;