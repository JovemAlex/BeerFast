import React from 'react';
// import ProductsTable from '../components/ProductsTable';
import TotalPrice from '../components/TotalPrice';
import ProductsTables from '../components/ProductsTables';
import AddressTable from '../components/AddressTable';

function Checkout() {
  return (
    <main>
      {/* colocar navbar */}
      {/* <ProductsTable /> */}
      <h1>Checkout</h1>
      <ProductsTables />
      <TotalPrice dataTestId="customer_checkout__element-order-total-price" />
      <AddressTable />
    </main>
  );
}

export default Checkout;
