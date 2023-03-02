import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/login" component={ Login } />
      </Switch>
    </AppProvider>
  );
}

export default App;
