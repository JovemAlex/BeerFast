import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import getTotalPrice from '../utils/helpers';

const ROUTE = 'customer_checkout';
const SELLER = 'select-seller';
const ADDRESS = 'input-address';
const NUMBER = 'input-address-number';
const SUBMIT = 'button-submit-order';

function AddressTable() {
  const history = useHistory();

  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);

  useEffect(() => {
    const getSellers = async () => {
    };
    setSellers(getSellers);
    getSellers();
  }, []);

  const createSale = async (data) => {
    const URL = 'http://localhost:3001/customer/orders/';
    const token = JSON.parse(localStorage.getItem('token')) || '';

    const response = await axios.post(URL, data, {
      headers: {
        authorization: token,
      },
    });

    const { id } = await response.json();
    return id;
  };

  const createDelivery = async () => {
    const totalPrice = getTotalPrice();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const useremail = JSON.parse(localStorage.getItem('user')) || '';

    const products = cart.map(({ productId, quantity }) => ({
      productId,
      quantity,
    }));

    const id = await createSale(
      { useremail,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        products },
    );
    history.push(`/customer/orders/${id}`);
  };

  return (
    <main>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            data-testid={ `${ROUTE}__${SELLER}` }
            id="seller"
            onChange={ ({ target }) => setSellerId(target.value) }
          >
            {sellers.map((seller, index) => (
              <option
                key={ index }
                value={ seller.id }
              >
                { seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            data-testid={ `${ROUTE}__${ADDRESS}` }
            type="text"
            id="address"
            placeholder="Travessa Terceira da Castanheira, Bairro Mucuri"
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
            value={ deliveryAddress }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid={ `${ROUTE}__${NUMBER}` }
            type="number"
            id="number"
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
            value={ deliveryNumber }
            placeholder="198"
          />
        </label>
      </form>
      <button
        type="submit"
        data-testid={ `${ROUTE}__${SUBMIT}` }
        onClick={ createDelivery }
      >
        FINALIZAR PEDIDO
      </button>
    </main>
  );
}

export default AddressTable;
