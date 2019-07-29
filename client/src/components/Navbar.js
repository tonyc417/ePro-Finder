import React from 'react';

const frontNav = () => {
    return (
        <div className="hero-image">
            <nav className="logoBar">
                <ul className="nav-links">
                    <li className="float-left"><a>eRecruit</a></li>
                    <li className="float-right"><a>Login or Sign Up</a></li>
                </ul>
            </nav>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><a>Home</a></li>
                    <li><a>New Members</a></li>
                    <li><a>Games</a></li>
                    <li><a>Find Clan</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default frontNav;