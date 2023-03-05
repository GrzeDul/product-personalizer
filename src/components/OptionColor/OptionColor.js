import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ setCurrentColor, currentColor, colors }) => {
  const prepareColorClassName = (color) => {
    return color[0].toUpperCase() + color.substr(1).toLowerCase();
  };
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => (
          <li key={color}>
            <button
              type='button'
              className={clsx(
                styles[`color${prepareColorClassName(color)}`],
                currentColor === color && styles.active
              )}
              onClick={() => {
                setCurrentColor(color);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

export default OptionColor;
