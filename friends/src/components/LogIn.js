import React, { useState } from 'react';
import axios from 'axios';

export default function LogIn() {
    const [state, setState] = useState({
        credential: {
            username: '',
            password: ''
        }

    })

    const handleChange = e => {
        setState({
            ...state,
            credential: {
                ...state.credential,
                [e.target.name]: e.target.value
            }
        })
    }

    const submit = e => {
        e.preventDefault();
        //send POST request to receive JWT Token from API
        //handle the token in App
        // axios.post('http://localhost:5000/api/login',)
    }

console.log(state)

    return (
        <div className='login-form-container'>
            <h1>Welcome</h1>
            <form id='login-form' onSubmit={submit}>
                <label>Username
                    <input name='username' type='text' value={state.credential.username} onChange={handleChange} />
                </label>
                <label>Password
                    <input name='password' type='text' value={state.credential.password} onChange={handleChange} />
                </label> <br />
                <button>Log in</button>
            </form>
        </div>
    )
}
