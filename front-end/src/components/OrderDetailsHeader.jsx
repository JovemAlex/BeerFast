import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

export default function OrderDetailsHeader({ order }) {
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;
  const dataTest = `${userRole}_order_details__element-order-details`;

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
        {`${order.saleDate}`}
      </p>
      <p
        data-testid={
          `${dataTest}-label-delivery-status`
        }
      >
        {`${order.status}`}
      </p>
      <button
        type="button"
        data-testid={ `${role}_order_details__button-delivery-check` }
      >
        Marcar como entregue
      </button>
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

// {
//   "id": 1,
//   "userId": 1,
//   "sellerId": 2,
//   "totalPrice": "10.00",
//   "deliveryAddress": "rua do administrator",
//   "deliveryNumber": "77",
//   "saleDate": "2023-03-03T00:00:00.000Z",
//   "status": "pendente",
//   "user_id": 1,
//   "seller_id": 2,
//   "seller": {
//     "name": "Fulana Pereira"
//   },
//   "sale": [
//     {
//       "quantity": 2,
//       "product": {
//         "id": 3,
//         "name": "Antarctica Pilsen 300ml",
//         "price": "2.49"
//       }
//     },
//     {
//       "quantity": 4,
//       "product": {
//         "id": 2,
//         "name": "Heineken 600ml",
//         "price": "7.50"
//       }
//     }
//   ]
// }
