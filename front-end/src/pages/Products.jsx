import { useEffect, useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import AppContext from '../contexts/AppContext';

function Products() {
  const [products, setProducts] = useState([]);
  const { total } = useContext(AppContext);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'http://localhost:3001/customer/products';
      const response = await fetch(url);
      const results = await response.json();
      setProducts(results);
    };
    fetchApi();
  }, []);

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
