import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

export default function OrderDetailsSummary({ item, number }) {
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;
  const dataTest = `${userRole}_order_details__element-order-table`;
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
