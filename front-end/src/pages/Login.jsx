import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const { /* email, */
    // setEmail,
    password,
    setPassword,
    setName,
    setRole,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    const validateEmailAndPassword = () => {
      const isEmailValid = (email.includes('@')
          && (email.toLowerCase().includes('.com')));
      const lengthPassword = 6;
      const isPasswordValid = (password.length >= lengthPassword);
      setDisabled(isEmailValid && isPasswordValid);
      // return isEmailValid && isPasswordValid;
    };
    validateEmailAndPassword();
  }, [password, email]);

  // const idDisabled = validateEmailAndPassword();

  useEffect(() => {
    if (user !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      setName(user.name);
    }
  }, [user, setName]);

  const newPath = (role) => {
    if (role === 'customer') {
      return 'customer/products';
    } if (role === 'seller') {
      return 'seller/orders';
    } if (role === 'administrator') {
      return 'admin/manage';
    }
    throw new Error('Rota não encontrada');
  };

  useEffect(() => {
    const verifyLogin = async () => {
      const storagedUser = JSON.parse(localStorage.getItem('user'));
      if (storagedUser) {
        const path = newPath(storagedUser.role);
        history.push(path);
      }
    };
    verifyLogin();
  }, [history]);

  const loginPost = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      setUser(data);
      const path = newPath(data.role);
      setRole(data.role);
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
        disabled={ !disabled }
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
