import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route exact path="/customer/checkout" component={ Checkout } />
      </Switch>
    </AppProvider>
  );
}

export default App;
