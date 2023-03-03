import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Products from './pages/Products';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route exact path="/seller/orders" component={ Orders } />
        <Route exact path="/customer/products" component={ Products } />
      </Switch>
    </AppProvider>
  );
}

export default App;
