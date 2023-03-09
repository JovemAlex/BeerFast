const getTotalPrice = () => {
  const totalPrice = JSON.parse(localStorage.getItem('cart'))
    .reduce((acc, curr) => (Number(curr.price) * curr.quantity) + acc, 0)
    .toFixed(2)
    .replace('.', ',');

  return totalPrice;
};

const getSellers = async () => {
  const URL = 'http://localhost:3001/customer/orders/sellers';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

module.exports = {
  getTotalPrice,
  getSellers,
};
