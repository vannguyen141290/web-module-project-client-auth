import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='homepage'>
            <div className='homepage-content'>
                <div>
                    Log in to see friend list !
                </div>
                <Link to='/login'>Log in</Link>
            </div>
        </div>
    )
}

