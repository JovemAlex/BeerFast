import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

export default function OrderDetailsSummary({ item, number, order }) {
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;
  const dataTest = `${userRole}_order_details__element-order`;
  return (
    <section>
      <p
        data-testid={
          `${dataTest}-details-label-delivery-status-${number}`
        }
      >
        {`${order.status}`}
      </p>
      <button
        type="button"
        disabled={ order.status !== 'Em Trânsito' }
        data-testid={ `${userRole}_order_details__button-delivery-check` }
      >
        Marcar como entregue
      </button>
      <p
        data-testid={ `${dataTest}-item-number-${number}` }
      >
        {number + 1}
      </p>
      <p data-testid={ `${dataTest}-table-name-${number}` }>{item.product.name}</p>
      <p data-testid={ `${dataTest}-table-quantity-${number}` }>{item.quantity}</p>
      <p data-testid={ `${dataTest}-table-unit-price-${number}` }>
        { Number(item.product.price).toFixed(2).replace('.', ',')}
      </p>
      <p data-testid={ `${dataTest}-table-sub-total${number}` }>
        { Number(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
      </p>
    </section>
  );
}

OrderDetailsSummary.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
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
