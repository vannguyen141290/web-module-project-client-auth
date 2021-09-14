import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function LogIn() {
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        },
        isLogIn: false,
        error: ''
    })

    const { push } = useHistory();

    const handleChange = e => {
        setState({
            ...state,
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const submit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/login', state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                push('/')
            })
            .catch(err => {
                setState({
                    ...state,
                    error: err.response.data.error
                })
            })
    }

    console.log(state)

    return (
        <div className='login-form-container'>
            <h1>Welcome</h1>
            <form id='login-form' onSubmit={submit}>
                <label>Username
                    <input
                        name='username'
                        type='text'
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password
                    <input
                        name='password'
                        type='text'
                        value={state.credentials.password}
                        onChange={handleChange}
                    />
                </label> <br />
                <p style={{ color: "red" }}>{state.error}</p>
                <button>Log in</button>
            </form>

        </div>
    )
}
