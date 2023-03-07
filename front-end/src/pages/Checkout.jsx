import React from 'react';
// import ProductsTable from '../components/ProductsTable';
import TotalPrice from '../components/TotalPrice';
import ProductsTables from '../components/ProductsTables';

function Checkout() {
  return (
    <main>
      {/* colocar navbar */}
      {/* <ProductsTable /> */}
      <h1>Checkout</h1>
      <ProductsTables />
      <TotalPrice />
    </main>
  );
}

export default Checkout;
