import React from 'react';
import PropTypes from 'prop-types';

const UtilityText = ({ textContent }) => (
  <section className="text-center mt-4 pt-big-space pb-big-space">
    <p className="body-2 main-paragraph text-center">{ textContent}</p>
  </section>
);

UtilityText.propTypes = {
  textContent: PropTypes.string.isRequired
};

export default UtilityText;
