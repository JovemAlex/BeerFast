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
            <td data-testid={ `${ROUTE}__${QUANTITYELEMENT}-${index}` }>
              {product.quantity}
            </td>
            <td data-testid={ `${ROUTE}__${UNITPRICEELEMENT}-${index}` }>
              {product.price}
            </td>
            <td data-testid={ `${ROUTE}__${SUBTOTALELEMENT}-${index}` }>
              {product.unitprice}
            </td>
            <td data-testid={ `${ROUTE}__${REMOVEELEMENT}-${index}` }>remove</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
