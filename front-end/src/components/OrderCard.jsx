import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

export default function OrderCard(props) {
  const { orderDetails } = props;
  const role = useContext(AppContext);
  const [showAddress, setShowAddress] = useState(false);
  const history = useHistory();

  const redirectToDetails = (id) => {
    history.push(`${role}/orders/${id}`);
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
        { `preço total: ${orderDetails.total_price}` }
      </p>
      { showAddress
       && (
         <p
           data-testid="seller_orders__element_card_address"
         >
           { `${orderDetails.delivery_address}, ${orderDetails.delivery_number}` }
         </p>
       )}
      <p data-testid={ `${role}_orders__element_order_date` }>
        { `data da venda: ${orderDetails.sale_date}` }
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
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
    total_price: PropTypes.string.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
