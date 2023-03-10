// const getTotalPrice = () => {
//   const totalPrice = JSON.parse(localStorage.getItem('cart'))
//     .reduce((acc, curr) => (Number(curr.price) * curr.quantity) + acc, 0)
//     .toFixed(2)
//     .replace('.', ',');

//   return totalPrice;
// };

// const getSellers = async (token) => {
//   // const URL = 'http://localhost:3001/customer/orders/sellers';
//   const { data } = await axios.get('http://localhost:3001/customer/orders/sellers', {
//     headers: { Authorization: token },
//   });
//   return data;
// };

// module.exports = {
//   getTotalPrice,
//   getSellers,
// };
