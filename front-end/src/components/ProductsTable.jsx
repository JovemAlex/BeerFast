import React from 'react';

const ROUTE = 'customer_checkout';
const ITEMELEMENT = 'element-order-table-item-number';
const NAMEELEMENT = 'element-order-table-name';
const QUANTITYELEMENT = 'element-order-table-quantity';
const UNITPRICEELEMENT = 'element-order-table-unit-price';
const SUBTOTALELEMENT = 'element-order-table-sub-total';
const REMOVEELEMENT = 'element-order-table-remove';

function ProductsTable() {
  const products = [];

  return (
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
              {/* price no banco de dados é . e no site é , */}
            </td>
            <td data-testid={ `${ROUTE}__${SUBTOTALELEMENT}-${index}` }>
              {Number(product.quantity * product.price).toFixed(2).replace('.', ',')}
            </td>
            <td>
              <button
                data-testid={ `${ROUTE}__${REMOVEELEMENT}-${index}` }
                type="button"
                onClick={ (e) => removeItem(e.target.id) }
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

export default ProductsTable;
