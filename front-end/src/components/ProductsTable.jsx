import React, { useEffect } from 'react';
import getTotalPrice from '../utils/helpers';

const ROUTE = 'customer_checkout';
const ITEM = 'element-order-table-item-number';
const NAME = 'element-order-table-name';
const QUANTITY = 'element-order-table-quantity';
const UNITPRICE = 'element-order-table-unit-price';
const SUBTOTAL = 'element-order-table-sub-total';
const REMOVE = 'element-order-table-remove';
const TOTALPRICE = 'element-order-total-price';

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('00,00');

  const getCart = () => JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    const cart = getCart();
    setProducts(cart);
  }, []);

  useEffect(() => {
    const currentTotalPrice = getTotalPrice();
    setTotalPrice(currentTotalPrice);
  }, [products]);

  function removeProduct(productId) {
    const newProducts = products.filter(({ id }) => id !== Number(productId));
    localStorage.setItem('cart', JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  return (
    <main>
      <table>
        <h1>Finalizar Pedido</h1>
        <thead>
          <th>Item</th>
          <th>Descriçã</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </thead>
        <tbody>
          {products && products.map((product, index) => (
            <tr key={ index }>
              <td data-testid={ `${ROUTE}__${ITEM}-${index}` }>{index + 1}</td>
              <td data-testid={ `${ROUTE}__${NAME}-${index}` }>{product.name}</td>
              <td data-testid={ `${ROUTE}__${QUANTITY}-${product.quantity}` }>
                {product.quantity}
              </td>
              <td data-testid={ `${ROUTE}__${UNITPRICE}-${index}` }>
                {Number(product.price).replace('.', ',')}
              </td>
              <td data-testid={ `${ROUTE}__${SUBTOTAL}-${index}` }>
                {(Number(product.price) * product.quantity).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  data-testid={ `${ROUTE}__${REMOVE}-${index}` }
                  type="button"
                  onClick={ ({ target }) => removeProduct(target.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 data-testid={ `${ROUTE}__${TOTALPRICE}` }>
        Total: R$
        {products && totalPrice}
      </h2>
    </main>
  );
}

export default ProductsTable;
