import css from './Button.module.css';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const Button = ({ onClick, loader }) => {
  return (
    <div className={css.button_load}>
      <button className={css.button} type="button" onClick={onClick}>
        {loader ? <Loader /> : 'Load more'}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
};
