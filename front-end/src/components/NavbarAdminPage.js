import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarAdminPage() {
  return (
    <nav>
      <div>
        <div>
          <Link
            data-testid="customer_products__element-navbar-link-orders"
            to="/admin/manage"
          >
            GERENCIAR USUÁRIOS
          </Link>

          <Link
            data-testid="customer_products__element-navbar-user-full-name"
            to="/admin/manage"
          >
            Trybeer Admin
          </Link>

          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
