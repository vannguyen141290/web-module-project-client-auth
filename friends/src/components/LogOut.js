import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function LogOut(props) {
    const { push } = useHistory();
    axiosWithAuth()
        .post('/api/logout')
        .then(res => {
            localStorage.removeItem('token');
            localStorage.removeItem('username')
            props.setIsLoggedIn(false);
            push('/')
        })
        .catch(err => console.log(err))

    return (
        <div></div>
    )
}

