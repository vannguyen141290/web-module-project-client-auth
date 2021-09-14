import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../src/components/Header';
import Home from './components/Home';
import FriendList from './components/FriendList';
import LogIn from '../src/components/LogIn';


function App() {


  return (
    <div className="App">

      <Header />

      <main>
        <div className='context-wrapper'>
          <Switch>
            <Route path='/login' component={LogIn} />
            <Route path='/friends' component={FriendList} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </main>

    </div>
  );
}

export default App;
