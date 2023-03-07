import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderCard(props) {
  const { orderDetails } = props;
  const history = useHistory();

  const redirectToDetails = (id) => {
    history.push(`seller/orders/${id}`);
  };

  return (
    <button type="button" onClick={ () => redirectToDetails(orderDetails.id) }>
      <p>{ `id da venda: ${orderDetails.id}` }</p>
      <p>{ `id do comprador: ${orderDetails.user_id}` }</p>
      <p>{ `id do vendedor: ${orderDetails.seller_id}` }</p>
      <p>{ `preço total: ${orderDetails.total_price}` }</p>
      <p>
        { `endereço: ${orderDetails.delivery_address}, ${orderDetails.delivery_number}` }
      </p>
      <p>{ `data da venda: ${orderDetails.sale_date}` }</p>
      <p>{ `status: ${orderDetails.status}` }</p>
    </button>
  );
}

OrderCard.propTypes = {
  orderDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
    total_price: PropTypes.string.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
