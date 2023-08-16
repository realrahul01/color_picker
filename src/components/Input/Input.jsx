/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
const Input = ({changeHandler,inputValue,keyHandler}) => {
  return (
    <input
    type="text"
    onKeyUp={keyHandler}x
    placeholder="Enter the color"
    value={inputValue}
    onChange={(e)=>changeHandler(e.target.value)}
    className={styles.inputcontainer}
    />
  );
};
export default Input;
