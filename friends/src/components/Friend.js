import React from 'react'


export default function Friend({friend}) {
    return (
        <div className='friend-card'>
            <h3>Name: <span style={{ fontStyle: 'italic' }}>{friend.name}</span></h3>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
        </div>
    )
}

