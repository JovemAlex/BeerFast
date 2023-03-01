import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </AppProvider>
  );
}

export default App;
