import React from "react";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="navBar-wrapper">
            <div className='navBar'>
                <div className='logo'>
                    <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>Welcome to my Friends List</Link>
                </div>

                <ul className='nav-bar_nav'>
                    <li className='nav-bar_navItem friendList'>
                        <Link to='/friends'>Friends List</Link>
                    </li>
                    <li className='nav-bar_navItem login'>
                        <Link to='/login'>Log in</Link>
                    </li>
                </ul>

            </div>
        </header>

    )
}

