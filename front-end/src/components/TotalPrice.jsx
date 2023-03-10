import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../contexts/AppContext';

function TotalPrice({ dataTestId }) {
  const { total } = useContext(AppContext);

  return (
    <h2 data-testid={ dataTestId }>
      { console.log(total) }
      <strong>Total:</strong>
      {' '}
      { Number(total).toFixed(2).replace('.', ',') }
    </h2>
  );
}

export default TotalPrice;

TotalPrice.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
