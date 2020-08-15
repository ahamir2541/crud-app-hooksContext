import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import { GlobalProvider } from './Context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
};

export default App;