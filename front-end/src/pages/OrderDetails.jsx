import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderDetailsSummary from '../components/OrderDetailsSummary';
import AppContext from '../contexts/AppContext';
import TotalPrice from '../components/TotalPrice';
import Navbar from '../components/Navbar';

export default function OrderDetails() {
  const { role, setTotal } = useContext(AppContext);
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`http://localhost:3001/${userRole}/orders/${id}`, {
          headers: { Authorization: token },
        });
        console.log(response.data);
        setTotal(response.data.totalPrice);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, userRole, setTotal]);

  return (
    <main>
      <Navbar />
      {
        loading ? (
          <span>Carregando...</span>
        ) : (
          <section>
            <OrderDetailsHeader order={ order } />
            {order.sale.map((sale, index) => (
              <OrderDetailsSummary
                order={ order }
                item={ sale }
                key={ index }
                number={ index }
              />
            ))}
            <TotalPrice
              dataTestId={ `${userRole}_order_details__element-order-total-price` }
            />
          </section>
        )
      }
    </main>
  );
}

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
