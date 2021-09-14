import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div className='homepage'>
            {props.isLoggedIn
                ? <div className='homepage-content' style={{color: 'white', fontSize: '2.8rem', width: '600px'}}>Welcome to the Webpage</div>
                : <div className='homepage-content'>
                    <div>
                        Log in to see friend list !
                    </div>
                    <Link to='/login'>Log in</Link>
                </div>
            }

        </div>
    )
}

