import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

export default function OrderDetailsHeader({ order }) {
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;
  const dataTest = `${userRole}_order_details__element-order-details`;

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('pt-BR', options);
    return formattedDate;
  };

  return (
    <section>
      Detalhes do pedido
      <p
        data-testid={ `${dataTest}-label-order-id` }
      >
        { `PEDIDO ${order.id}` }
      </p>
      <p
        data-testid={ `${dataTest}-label-seller-name` }
      >
        {`P. Vend: ${order.seller.name}`}
      </p>
      <p
        data-testid={ `${dataTest}-label-order-date` }
      >
        {formatDate(order.saleDate)}
      </p>
    </section>
  );
}

OrderDetailsHeader.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
