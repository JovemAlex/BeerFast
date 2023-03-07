import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function ProductsTable() {
  const { selectedProducts, removeProduct } = useContext(AppContext);

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
        {selectedProducts.map((product) => (
          <tr key={ product.id }>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.price * product.quantity}</td>
            <td>
              <button
                type="button"
                onClick={ () => {
                  if (product.price * product.quantity === 0) {
                    removeProduct(product);
                  } else {
                    removeProduct(product);
                    total -= product.price * product.quantity;
                  }
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
