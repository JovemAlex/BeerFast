import React from 'react';
import PropTypes from 'prop-types';

export default function OrderDetailsSummary({ item, number }) {
  const dataTest = 'customer_order_details__element-order-table';
  return (
    <section>
      <p
        data-testid={ `${dataTest}-item-number-${number}` }
      >
        {number + 1}
      </p>
      <p data-testid={ `${dataTest}-name-${number}` }>{item.product.name}</p>
      <p data-testid={ `${dataTest}-quantity-${number}` }>{item.quantity}</p>
      <p data-testid={ `${dataTest}-unit-price-${number}` }>{item.product.price}</p>
      <p data-testid={ `${dataTest}-sub-total${number}` }>
        {item.product.price * item.quantity}
      </p>
    </section>
  );
}

OrderDetailsSummary.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};
