import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function Login() {
  // const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  // const [user, setUser] = useState('');
  const { email,
    setEmail,
    password,
    setPassword,
    setRole,
  } = useContext(AppContext);
  const history = useHistory();

  const validateEmailAndPassword = () => {
    const isEmailValid = (email.includes('@')
        && (email.toLowerCase().includes('.com')));
    const lengthPassword = 6;
    const isPasswordValid = (password.length >= lengthPassword);
    return isEmailValid && isPasswordValid;
  };

  const idDisabled = validateEmailAndPassword();

  const newPath = (role) => {
    const redirectTo = role === 'customer' ? 'customer/products' : 'seller/orders';
    return redirectTo;
  };

  const loginPost = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      const { token, role } = data;
      setRole(role);
      localStorage.setItem('token', JSON.stringify(token));
      const path = newPath(role);
      history.push(path);
    } catch (err) {
      setError(true);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    loginPost();
  };

  const handleClickRegister = (event) => {
    event.preventDefault();
    history.push('/register');
  };

  return (
    <form>
      <div>
        <h1>Please sign in</h1>
        <input
          type="email"
          data-testid="common_login__input-email"
          placeholder="type your email"
          onChange={ ({ target: { value: nameEmail } }) => setEmail(nameEmail) }
          value={ email }
        />
      </div>
      <input
        type="password"
        data-testid="common_login__input-password"
        placeholder="type your password"
        onChange={ ({ target: { value: namePassword } }) => setPassword(namePassword) }
        value={ password }
      />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ !idDisabled }
        onClick={ handleClick }
      >
        LOGIN

      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ handleClickRegister }
      >
        Ainda não tenho conta

      </button>

      { error
      && <span data-testid="common_login__element-invalid-email">Email Invalido</span> }

    </form>

  );
}
