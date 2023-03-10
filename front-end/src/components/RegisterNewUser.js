import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function RegisterNewUser() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const validateNameEmailAndPassword = () => {
      const isEmailValid = (email.includes('@')
        && (email.toLowerCase().includes('.com')));

      const lengthPassword = 6;
      const isPasswordValid = (password.length >= lengthPassword);

      const lengthName = 12;
      const isNameValid = (name.length >= lengthName);

      setDisabled(!isEmailValid || !isPasswordValid || !isNameValid);
    };

    validateNameEmailAndPassword();
  }, [name, email, password]);

  const handleClickRegister = async (event) => {
    event.preventDefault();
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const dataToSend = { name, email, password, role };
      await axios.post('http://localhost:3001/admin/register', dataToSend, {
        headers: {
          Authorization: token,
        },
      });
      history.push('/admin/manage');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <main>
      <h2>Cadastrar novo usuário</h2>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target: { value: completeName } }) => setName(completeName) }
            value={ name }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ ({ target: { value: Email } }) => setEmail(Email) }
            value={ email }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="admin_manage__input-password"
            onChange={ ({ target: { value: Password } }) => setPassword(Password) }
            value={ password }
          />
        </label>

        <label htmlFor="role">
          Tipo
          <select
            type="text"
            name="role"
            data-testid="admin_manage__select-role"
            onChange={ ({ target: { value } }) => setRole(value) }
            value={ role }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          onClick={ handleClickRegister }
        >
          CADASTRAR
        </button>

        {error && (
          <span
            data-testid="admin_manage__element-invalid-register"
          >
            User already exists
          </span>
        )}
      </div>
    </main>
  );
}
