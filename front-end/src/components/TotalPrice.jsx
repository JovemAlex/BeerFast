import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function TotalPrice() {
  const { total } = useContext(AppContext);

  return (
    <h2 data-testid="customer_checkout__element-order-total-price">
      <strong>Total:</strong>
      {' '}
      { total }
    </h2>
  );
}

export default TotalPrice;
