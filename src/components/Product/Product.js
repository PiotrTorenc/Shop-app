import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProducForm';

const Product = ({ name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const foundSize = sizes.find((element) => element.name === currentSize);
    return basePrice + foundSize.additionalPrice;
  }, [basePrice, sizes, currentSize]);

  const addToCart = (event) => {
    event.preventDefault();

    console.log('Summary');
    console.log('============');
    console.log('Name:', title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          addToCart={addToCart}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
