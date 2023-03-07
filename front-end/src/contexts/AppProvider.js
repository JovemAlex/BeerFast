import React, { useMemo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = useCallback(() => selectedProducts
    .reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0), [selectedProducts]);

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
  }, [selectedProducts, calculateTotal]);

  const setProduct = useCallback((product, quantity) => {
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
  }, [calculateTotal, selectedProducts]);

  const addProduct = useCallback((product) => {
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
  }, [calculateTotal, selectedProducts]);

  const removeProduct = useCallback((product) => {
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
  }, [calculateTotal, selectedProducts]);

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
  }), [
    email,
    password,
    setEmail,
    setPassword,
    name,
    setName,
    selectedProducts,
    total,
    addProduct,
    removeProduct,
    setProduct,
  ]);

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
