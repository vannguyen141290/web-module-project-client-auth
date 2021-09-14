import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../src/components/Header';
import Home from './components/Home';
import FriendList from './components/FriendList';
import LogIn from '../src/components/LogIn';
import LogOut from './components/LogOut';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">

      <Header isLoggedIn={isLoggedIn} />

      <main>
        <div className='context-wrapper'>
          <Switch>

            <Route path='/login'>
              <LogIn setIsLoggedIn={setIsLoggedIn}/>
            </Route>

            <Route path='/logout'>
              <LogOut setIsLoggedIn={setIsLoggedIn} />
            </Route>

            <PrivateRoute path='/friends' component={FriendList} />

            <Route path='/'>
              <Home isLoggedIn={isLoggedIn} />
            </Route>

          </Switch>
        </div>
      </main>

    </div>
  );
}

export default App;
