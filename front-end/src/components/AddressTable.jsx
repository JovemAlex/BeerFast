import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../contexts/AppContext';

// import { getSellers } from '../utils/helpers';

const ROUTE = 'customer_checkout';
const SELLER = 'select-seller';
const ADDRESS = 'input-address';
const NUMBER = 'input-address-number';
const SUBMIT = 'button-submit-order';

function AddressTable() {
  const history = useHistory();

  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(2);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const { total, selectedProducts } = useContext(AppContext);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        console.log(token);
        const { data } = await axios.get('http://localhost:3001/customer/orders/sellers', {
          headers: { Authorization: token },
        });
        console.log('da api: ', data);
        setSellers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSellers();
  }, []);

  const createSale = async (saleData) => {
    const URL = 'http://localhost:3001/customer/orders/';
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    console.log(token);

    const { data } = await axios.post(URL, saleData, {
      headers: {
        authorization: token,
      },
    });

    console.log(data.saleId);
    return data.saleId;
  };

  const createDelivery = async () => {
    const { email } = JSON.parse(localStorage.getItem('user')) || '';

    const products = selectedProducts.map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));

    const id = await createSale(
      { email,
        sellerId,
        totalPrice: total,
        deliveryAddress,
        deliveryNumber,
        products },
    );
    history.push(`/customer/orders/${id}`);
  };

  const handleSellerChange = (event) => {
    setSellerId(event.target.value);
  };

  return (
    <main>
      <h1>Detalhes e Endereço para Entrega</h1>
      { console.log('seller: ', sellers) }
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            data-testid={ `${ROUTE}__${SELLER}` }
            id="seller"
            onChange={ handleSellerChange }
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
