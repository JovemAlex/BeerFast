import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import AppContext from '../contexts/AppContext';
import Navbar from '../components/Navbar';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`http://localhost:3001/${userRole}/orders`, {
          headers: { Authorization: token },
        });
        console.log(response);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userRole]);

  return (
    <main>
      <Navbar />
      {
        orders.map((order) => (
          <OrderCard key={ order.id } orderDetails={ order } />
        ))
      }
    </main>
  );
}
