import React from 'react';

export default function RegisterNewUser() {
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
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="admin_manage__input-password"
          />
        </label>

        <label htmlFor="role">
          Tipo
          <select
            type="text"
            name="role"
            data-testid="admin_manage__select-role"
          >
            <option value="Vendedor">Vendedor</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
      </div>
    </main>
  );
}
