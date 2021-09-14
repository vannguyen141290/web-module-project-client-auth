import React, { useEffect, useState } from 'react';
import Friend from './Friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';


export default function FriendList() {
  const [friends, setFriends] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setIsLoading(true)
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        setIsLoading(false)
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      })
  }


  return (
    isLoading
    ? <div style={{ fontSize: '3rem', padding: '50px', textAlign: 'center'}}>Loading friends list...</div>
    : <div id='friends-wrapper'>
      <div>List of Firends</div>
        {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
      </div>
  )
}

