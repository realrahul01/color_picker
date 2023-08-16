/* eslint-disable react/prop-types */
import styles from "./BoxColor.module.css";
const BoxColor = ({ bgColor }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.textContainer}
        style={{ backgroundColor: bgColor }}
      />
      ;
    </div>
  );
};
export default BoxColor;
