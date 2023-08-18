/* eslint-disable react/prop-types */
import styles from "./ColorPickerList.module.css";
const ColorPickerList = ({ color,btnBgColorHandler}) => {

  const color_picker = color.map((val, index) => (
    <button
      key={index}
      value={val} 
      className={styles.btn1}
      style={{backgroundColor:val}}
      onClick={(e)=>btnBgColorHandler(e.target.value)}
      >
      {val}  
      <button>hello</button>
    </button>
  ));
  return (
  <div className={styles.colorPickerContainer}>
      {color_picker}
  </div>
  )
};
export default ColorPickerList;
