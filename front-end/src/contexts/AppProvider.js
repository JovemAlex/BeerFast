import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextApp = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
  }), [email, password, setEmail, setPassword]);

  return (
    <AppContext.Provider value={ contextApp }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
