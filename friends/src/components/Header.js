import React from "react";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="navBar-wrapper">
            <div className='navBar'>
                <div className='logo'>
                    Welcome to my Friends List
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

