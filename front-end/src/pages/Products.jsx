import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import AppContext from '../contexts/AppContext';

function Products() {
  const [cartEnabled, setCartEnabled] = useState(false);
  const [products, setProducts] = useState([]);
  const { total } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'http://localhost:3001/customer/products';
      const response = await fetch(url);
      const results = await response.json();
      setProducts(results);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    setCartEnabled(total > 0);
  }, [total]);

  const handleClick = (event) => {
    event.preventDefault();

    history.push('/customer/checkout');
  };

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        {products.map((product) => <Product product={ product } key={ product.id } />)}
      </div>
      <button
        className="btn-totalPrice"
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ !cartEnabled }
        onClick={ handleClick }
      >
        {' '}
        Ver Carrinho:
        <span data-testid="customer_products__checkout-bottom-value">
          {total
            .toLocaleString(
              'pt-BR',
              { maximumFractionDigits: 2, minimumFractionDigits: 2 },
            )}
        </span>
      </button>
    </main>
  );
}

export default Products;
