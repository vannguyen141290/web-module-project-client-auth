import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div className='homepage'>
            {(props.isLoggedIn)
                ? (<div className='homepage-content' style={{ color: 'white', fontSize: '2.5rem'}}>Welcome to my webpage</div>)
                : (
                    <div className='homepage-content'>
                        <div>
                            Log in to see friend list !
                        </div>
                        <Link to='/login'>Log in</Link>
                    </div>
                )
            }
        </div>
    )
}

