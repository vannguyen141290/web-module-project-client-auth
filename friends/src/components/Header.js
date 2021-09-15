import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function Header(props) {
    const usernameDisplay = localStorage.getItem('username');

    return (
        <header className="navBar-wrapper">
            <div className='navBar'>
                <div className='logo'>
                    <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>Welcome to my Friends List</Link>
                </div>

                <ul className='nav-bar_nav'>
                    <li className='nav-bar_navItem home'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav-bar_navItem friendList'>
                        <Link to='/friends'>Friends List</Link>
                    </li>
                    {<li className='nav-bar_navItem login'>
                        <Link to='/login'>Log in</Link>
                    </li> }
                    {<li className='nav-bar_navItem logout'>
                        <Link to='/logout'>Log out</Link>
                    </li> }
                    {usernameDisplay && <li className='nav-bar_navItem username'>Logged in as <span style={{textDecoration: 'underline'}}>{usernameDisplay}</span></li>}
                </ul>

            </div>
        </header>

    )
}

