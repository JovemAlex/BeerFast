import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import AppContext from '../contexts/AppContext';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const role = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`http://localhost:3001/${role}/orders`, {
          headers: { Authorization: token },
        });
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [role]);

  return (
    <main>
      {
        orders.map((order) => (
          <OrderCard key={ order.id } orderDetails={ order } />
        ))
      }
    </main>
  );
}
