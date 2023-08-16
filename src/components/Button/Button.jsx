/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
const Button = ({ onClickHandler, isDisabled }) => {
  return (
    <button
      onClick={() => onClickHandler()}
      className={styles.buttonContainer}
      disabled={isDisabled}
    >
      Add color
    </button>
  );
};
export default Button;
