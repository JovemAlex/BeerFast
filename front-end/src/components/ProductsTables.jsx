import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function ProductsTables() {
  const { selectedProducts, setSelectedProducts } = useContext(AppContext);

  const ROUTE = 'customer_checkout';
  const ITEM = 'element-order-table-item-number';
  const NAME = 'element-order-table-name';
  const QUANTITY = 'element-order-table-quantity';
  const UNITPRICE = 'element-order-table-unit-price';
  const SUBTOTAL = 'element-order-table-sub-total';
  const REMOVE = 'element-order-table-remove';

  const removeAll = (productId) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== productId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {selectedProducts.map((product, index) => (
          <tr key={ product.id }>
            <td data-testid={ `${ROUTE}__${ITEM}-${index}` }>{index + 1}</td>
            <td data-testid={ `${ROUTE}__${NAME}-${index}` }>{product.name}</td>
            <td data-testid={ `${ROUTE}__${QUANTITY}-${index}` }>{product.quantity}</td>
            <td data-testid={ `${ROUTE}__${UNITPRICE}-${index}` }>
              {Number(product.price).toFixed(2).replace('.', ',')}

            </td>
            <td data-testid={ `${ROUTE}__${SUBTOTAL}-${index}` }>
              {Number(product.price * product.quantity).toFixed(2).replace('.', ',')}

            </td>
            <td>
              <button
                data-testid={ `${ROUTE}__${REMOVE}-${index}` }
                type="button"
                onClick={ () => {
                  removeAll(product.id);
                } }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
