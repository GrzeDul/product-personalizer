import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
const ProductForm = ({
  action,
  sizes,
  colors,
  currentColor,
  currentSize,
  setCurrentColor,
  setCurrentSize,
}) => {
  return (
    <form onSubmit={action}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  action: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;
