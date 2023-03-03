import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <div>
          <Link
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
            className="products"
          >
            PRODUTOS
          </Link>

          <Link
            data-testid="customer_products__element-navbar-link-orders"
            to="/customer/products"
            className="myOrders"
          >
            MEUS PEDIDOS
          </Link>

        </div>
        <div>
          <Link
            data-testid="customer_products__element-navbar-user-full-name"
            to="/customer/products"
            className="user"
          >
            NOME DO USUÁRIO
          </Link>
        </div>

        <div>
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            to="/"
            className="logout"
          >
            SAIR
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
