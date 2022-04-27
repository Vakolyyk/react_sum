import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  const resStr = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {resStr}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
