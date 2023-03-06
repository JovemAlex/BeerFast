import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => selectedProducts
    .reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0);

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage !== null && userFromStorage !== '') {
      const result = JSON.parse(userFromStorage);
      setName(result.name);
      setEmail(result.email);
    }
  }, []);

  useEffect(() => {
    setTotal(calculateTotal());
  }, [selectedProducts]);

  const setProduct = (product, quantity) => {
    const existingProduct = selectedProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = selectedProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity };
        }
        return item;
      });

      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity }]);
    }
    setTotal(calculateTotal());
  };

  const addProduct = (product) => {
    const existingProduct = selectedProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = selectedProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    setTotal(calculateTotal());
  };

  const removeProduct = (product) => {
    const existingProduct = selectedProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = selectedProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    setTotal(calculateTotal());
  };

  const contextApp = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    selectedProducts,
    total,
    addProduct,
    removeProduct,
    setProduct,
  }), [email, password, setEmail, setPassword, name, setName, total]);

  return (
    <AppContext.Provider value={ contextApp }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
