import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function LogOut(props) {
    const history = useHistory();
    useEffect(() => {
        axiosWithAuth()
        .post('/api/logout')
        .then(res => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            history.push('/')
        })
        .catch(err => console.log(err))

    }, [])

    return (
        <div></div>
    )
}

