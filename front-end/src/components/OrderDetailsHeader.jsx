import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import AppContext from '../contexts/AppContext';

export default function OrderDetailsHeader({ order }) {
  const { role } = useContext(AppContext);
  const userRole = role || JSON.parse(localStorage.getItem('user')).role;
  const orderDetailsString = '_order_details';
  const { id } = useParams();
  const dataTest = `${userRole}${orderDetailsString}__element-order-details`;
  const nullStatus = { currStatus: null, previousStatus: null };
  const { currStatus,
    previousStatus } = JSON.parse(localStorage.getItem('status')) || nullStatus;
  const [status, setStatus] = useState(currStatus || 'pendente');
  const [prevStatus, setPrevStatus] = useState(previousStatus || 'pendente');

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('pt-BR', options);
    return formattedDate;
  };

  useEffect(() => {
    const handleStatusChange = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        await axios.put(`http://localhost:3001/seller/orders/${id}/status/${status}`, null, {
          headers: { Authorization: token },
        });
      } catch (error) {
        console.log(error);
        setStatus(prevStatus);
      }
    };
    handleStatusChange();
  }, [id, status, prevStatus]);

  const handleStatusClick = (newStatus) => {
    setPrevStatus(status);
    const storageStatus = { previousStatus: status, currStatus: newStatus };
    localStorage.setItem('status', JSON.stringify(storageStatus));
    setStatus(newStatus);
  };

  return (
    <section>
      Detalhes do pedido
      { console.log(status) }
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
      { userRole === 'seller' && (
        <div>
          <button
            type="button"
            data-testid={ `seller${orderDetailsString}__button-preparing-check` }
            onClick={ () => handleStatusClick('preparando') }
            disabled={ status !== 'pendente' }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid={ `seller${orderDetailsString}__button-dispatch-check` }
            disabled={ status !== 'preparando' }
            onClick={ () => handleStatusClick('em-transito') }
          >
            SAIU PARA ENTREGA
          </button>

        </div>
      ) }

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
