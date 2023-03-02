import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      </Switch>
    </AppProvider>
  );
}

export default App;
