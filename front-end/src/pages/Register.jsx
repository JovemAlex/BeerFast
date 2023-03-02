import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../contexts/AppContext';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('');
  const { email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  } = useContext(AppContext);

  const validate = () => {
    const max = 6;
    const min = 12;
    if (/\S+@\S+\.\S+/.test(email) && password.length >= max && name.length < min) {
      return setDisabled(false);
    }
    setError(false);
    return setDisabled(true);
  };

  const validateUser = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/register', { name, email, password, role: 'costumer' });
      setUser({ ...data, role: 'costumer' });
      console.log(user);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <form>
      <h2>Nome:</h2>
      <input
        type="name"
        data-testid="common_register__input-name"
        placeholder="Seu nome"
        onChange={ ({ target }) => { setName(target.value); validate(); } }
        value={ name }
      />
      <h2>Email:</h2>
      <input
        type="email"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
        onChange={ ({ target }) => { setEmail(target.value); validate(); } }
        value={ email }
      />
      <h2>Senha:</h2>
      <input
        type="password"
        data-testid="common_register__input-password"
        onChange={ ({ target }) => { setPassword(target.value); validate(); } }
        value={ password }
      />

      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ disabled }
        onClick={ validateUser }
      >
        CADASTRAR

      </button>

      { error
      && <span data-testid="common_register__element-invalid_register">Invalid</span> }

    </form>
  );
}
