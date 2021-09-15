import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialState = {
    name: '',
    age: '',
    email: ''
}
export default function AddFriendForm() {
    const [ friend, setFriend ] = useState(initialState);
    const [ error, setError ] = useState('');
    const history = useHistory();

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
        if (friend.name === '' || friend.age === '' || friend.email === '') {
            setError('name, age and email are required fields')
        } else {
            axiosWithAuth()
            .post('/api/friends', friend)
            .then(res => {
                setFriend(initialState);
                history.push('/friends')
            })
            .catch(err => console.log(err))
        }

    }

    return (
        <div className='add-friend-form-container'>
            <form onSubmit={submit}>
                <label>Name
                    <input name='name' type='text' onChange={handleChange} value={friend.name}/>
                </label><br />
                <label>Age
                    <input name='age' type='text' onChange={handleChange} value={friend.age}/>
                </label><br />
                <label>Email
                    <input name='email' type='text' onChange={handleChange} value={friend.email}/>
                </label><br />
                <button>add to friends list</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
};
