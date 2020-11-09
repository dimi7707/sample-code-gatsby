import React from 'react';
import PropTypes from 'prop-types';
import ImageProvider from '@core/components/image-provider/image-provider';
import '@core/components/hero/hero.scss';

const Hero = ({
  title, subtitle, image, darkFont
}) => (
  <section className="standard-hero">
    <div className="box">
      <ImageProvider fileName={image} alt="" />
      <div className="text">
        <h1 className={darkFont ? 'dark-font' : 'text-white'}>{ title }</h1>
        <p className={darkFont ? 'dark-font body-3' : 'text-white body-3'}>
          { subtitle }
        </p>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  darkFont: PropTypes.bool
};

Hero.defaultProps = {
  darkFont: false
};

export default Hero;
