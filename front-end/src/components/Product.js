import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function Product({ product }) {
  const [counter, setCounter] = useState(0);
  const { addProduct, removeProduct, setProduct } = useContext(AppContext);

  const handleBtnIncrement = () => {
    setCounter((value) => value + 1);
    addProduct(product, 1);
  };

  const handleBtnDecrement = () => {
    if (counter > 0) {
      setCounter((value) => value - 1);
      removeProduct(product);
    }
  };

  return (
    <div
      id={ product.id }
      key={ product.id }
    >
      <h2
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {`${Number(product.price)
          .toLocaleString(
            'pt-BR',
            { maximumFractionDigits: 2, minimumFractionDigits: 2 },
          )}`}

      </h2>
      <img
        src={ product.url_image }
        alt=""
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <h4
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </h4>
      <button
        className="btn-dec"
        type="button"
        onClick={ handleBtnDecrement }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ counter }
        onChange={ (e) => {
          setCounter(e.target.value);
          setProduct(product, e.target.value);
        } }
      />
      <button
        className="btn-inc"
        type="button"
        onClick={ handleBtnIncrement }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.image.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
