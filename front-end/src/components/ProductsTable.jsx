import React, { useEffect } from 'react';

const ROUTE = 'customer_checkout';
const ITEMELEMENT = 'element-order-table-item-number';
const NAMEELEMENT = 'element-order-table-name';
const QUANTITYELEMENT = 'element-order-table-quantity';
const UNITPRICEELEMENT = 'element-order-table-unit-price';
const SUBTOTALELEMENT = 'element-order-table-sub-total';
const REMOVEELEMENT = 'element-order-table-remove';
const TOTALPRICEELEMENT = 'element-order-total-price';

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('00,00');

  const getCart = () => JSON.parse(localStorage.getItem('cart'));
  // Considere utilizar o localStorage como forma de armazenar uma entidade carrinho;
  // Cada card deve possibilitar a adição, remoção ou definição manual da quantidade de itens de cada produto

  useEffect(() => {
    const cart = getCart();
    setProducts(cart);
  }, []);

  useEffect(() => {
    const cart = getCart();
    const currentTotalPrice = cart
      .reduce((acc, curr) => (Number(curr.price) * curr.quantity) + acc, 0)
      .toFixed(2)
      .replace('.', ',');
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
              <td data-testid={ `${ROUTE}__${ITEMELEMENT}-${index}` }>{index + 1}</td>
              <td data-testid={ `${ROUTE}__${NAMEELEMENT}-${index}` }>{product.name}</td>
              <td data-testid={ `${ROUTE}__${QUANTITYELEMENT}-${product.quantity}` }>
                {product.quantity}
              </td>
              <td data-testid={ `${ROUTE}__${UNITPRICEELEMENT}-${index}` }>
                {Number(product.price).replace('.', ',')}
              </td>
              <td data-testid={ `${ROUTE}__${SUBTOTALELEMENT}-${index}` }>
                {(Number(product.price) * product.quantity).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  data-testid={ `${ROUTE}__${REMOVEELEMENT}-${index}` }
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
      <h2 data-testid={ `${ROUTE}__${TOTALPRICEELEMENT}` }>
        Total: R$
        {products && totalPrice}
      </h2>
    </main>
  );
}

export default ProductsTable;
