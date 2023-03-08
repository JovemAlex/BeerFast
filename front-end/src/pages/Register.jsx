import React, { useContext, useState /* useEffect */ } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function Register() {
  // const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  // const [user, setUser] = useState('');

  const { email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    // setRole,
  } = useContext(AppContext);
  const history = useHistory();

  const validateEmailAndPassword = () => {
    const isEmailValid = (email.includes('@')
        && (email.toLowerCase().includes('.com')));

    const lengthPassword = 6;
    const isPasswordValid = (password.length >= lengthPassword);

    const lengthName = 12;
    const isNameValid = (name.length >= lengthName);

    return isEmailValid && isPasswordValid && isNameValid;
  };

  const idDisabled = validateEmailAndPassword();

  const validateUser = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = { name, email, password };
      const { data } = await axios.post('http://localhost:3001/register', dataToSend);
      localStorage.setItem('user', JSON.stringify(data));
      // setUser({ ...data, role: 'customer' });
      // setRole('customer');
      history.push('/customer/products');
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
        onChange={ ({ target: { value: nameUser } }) => setName(nameUser) }
        value={ name }
      />
      <h2>Email:</h2>
      <input
        type="email"
        data-testid="common_register__input-email"
        placeholder="seu-email@site.com.br"
        onChange={ ({ target: { value: nameEmail } }) => setEmail(nameEmail) }
        value={ email }
      />
      <h2>Senha:</h2>
      <input
        type="password"
        data-testid="common_register__input-password"
        onChange={ ({ target: { value: namePassword } }) => setPassword(namePassword) }
        value={ password }
      />

      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ !idDisabled }
        onClick={ validateUser }
      >
        CADASTRAR

      </button>

      { error
      && <span data-testid="common_register__element-invalid_register">Invalid</span> }

    </form>
  );
}
