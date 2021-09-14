import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../src/components/Header';
import FriendList from './components/FriendList';
import LogIn from '../src/components/LogIn'

function App() {


  return (
    <div className="App">

      <Header />

      <main>
        <div className='context-wrapper'>
          <Switch>

            <Route path='/friends'>
              <Redirect to='/' />
            </Route>

            <Route path='/login'>
              <LogIn />
            </Route>

            <Route path='/'>
              <FriendList />
            </Route>

          </Switch>
        </div>
      </main>

    </div>
  );
}

export default App;
