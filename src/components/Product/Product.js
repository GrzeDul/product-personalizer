import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const getPrice = useMemo(() => {
    const additionalPrice = sizes.find((size) => size.name === currentSize)
      .additionalPrice;
    return basePrice + additionalPrice;
  }, [currentSize]);
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(
      'endPrice: ',
      getPrice(),
      'currentSize: ',
      currentSize,
      'currentColor: ',
      currentColor,
      'productName: ',
      title
    );
  };

  const ProductFormData = {
    action: handleAddToCart,
    sizes,
    colors,
    currentColor,
    currentSize,
    setCurrentColor,
    setCurrentSize,
  };
  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} title={title} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm {...ProductFormData} />
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
