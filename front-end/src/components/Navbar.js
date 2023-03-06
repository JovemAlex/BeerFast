import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import AppContext from '../contexts/AppContext';

function Navbar() {
  const { name } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
  };

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
            {name}
          </Link>
        </div>

        <div>
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            to="/"
            className="logout"
            onClick={ handleLogout }
          >
            SAIR
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
