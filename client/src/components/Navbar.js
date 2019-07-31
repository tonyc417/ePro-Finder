import React from 'react';
import { Link } from 'react-router-dom';

const frontNav = () => {
    return (
        <div className="hero-image">
            <nav className="logoBar">
                <ul className="nav-links">
                    <Link to="/">
                        <li className="float-left">eRecruit</li>
                    </Link>
                    <Link to="/register">
                        <li className="float-right">Login or Sign Up</li>
                    </Link>
                </ul>
            </nav>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/newmem">
                        <li>New Members</li>
                    </Link>
                    <Link to="/games">
                        <li>Games</li>
                    </Link>
                    <Link to="/clans">
                        <li>Find Clan</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default frontNav;