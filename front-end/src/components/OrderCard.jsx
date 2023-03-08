import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function OrderCard(props) {
  const { orderDetails } = props;
  const { role } = useContext(AppContext);
  const [showAddress, setShowAddress] = useState(false);
  const history = useHistory();
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;

  const redirectToDetails = (id) => {
    history.push(`/${userRole}/orders/${id}`);
  };

  useEffect(() => {
    if (role === 'seller') setShowAddress(true);
  }, [role]);

  return (
    <button type="button" onClick={ () => redirectToDetails(orderDetails.id) }>
      <p data-testid={ `${role}_orders__element_order_id` }>
        { `id do pedido: ${orderDetails.id}` }
      </p>
      <p data-testid={ `${role}_orders__element_card_price` }>
        { `preço total: ${orderDetails.totalPrice}` }
      </p>
      { showAddress
       && (
         <p
           data-testid="seller_orders__element_card_address"
         >
           { `${orderDetails.deliveryAddress}, ${orderDetails.deliveryNumber}` }
         </p>
       )}
      <p data-testid={ `${role}_orders__element_order_date` }>
        { `data da venda: ${orderDetails.saleDate}` }
      </p>
      <p data-testid={ `${role}_orders__element_delivery_status` }>
        { `status: ${orderDetails.status}` }
      </p>
    </button>
  );
}

OrderCard.propTypes = {
  orderDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
