import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../src/components/Header';
import Home from './components/Home';
import FriendList from './components/FriendList';
import LogIn from '../src/components/LogIn';
import LogOut from './components/LogOut';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem('token'))
  // }, [])

  console.log(isLoggedIn)

  return (
    <div className="App">

      <Header isLoggedIn={isLoggedIn} />

      <main>
        <div className='context-wrapper'>
          <Switch>

            <Route path='/login'>
              <LogIn />
            </Route>

            <PrivateRoute path='/logout'>
              <LogOut />
            </PrivateRoute>

            <PrivateRoute path='/friends' component={FriendList} />

            <PrivateRoute path='/add' component={AddFriendForm} />

            <Route path='/'>
              <Home />
            </Route>

          </Switch>
        </div>
      </main>

    </div>
  );
}

export default App;
