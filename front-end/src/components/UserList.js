import React, { useState } from 'react';

export default function UserList() {
  const [userList] = useState([]);

  return (
    <main>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr
              key={ user.id }
            >
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {user.id}
              </td>
              <td
                data-testid="admin_manage__input-email"
              >
                {user.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </main>
  );
}
