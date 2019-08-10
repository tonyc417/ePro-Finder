import React from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './auth/RegisterUser';

const frontNav = () => {
    return (
        <div className="hero-image">
            <nav className="logoBar">
                <ul className="nav-links">
                    <Link to="/">
                        <li className="float-left">eRecruit</li>
                    </Link>
                    <RegisterModal />
                </ul>
            </nav>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
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