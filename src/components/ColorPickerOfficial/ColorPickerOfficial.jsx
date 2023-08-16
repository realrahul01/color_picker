import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import BoxColor from "../BoxColor/BoxColor";
import ColorPickerList from "../ColorPickerList/ColorPickerList";

const ColorPickerOfficial = () => {
  const[text, setText] = useState("");
  const[color, setColor] = useState(['green','blue','red','pink']);
  const[bgColor,setBgColor] = useState()
  
//   console.log(color)
  const changeHandler = (str) => setText(str);
  
  const onClickHandler = () => {
    // setBgColor(text)
    const trimText = text.trim();
    if(trimText){
        setColor([...color,text]);
        setText("");
    }
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const btnBgColorHandler = (e)=>{
    // setBgColor([...color, text])
    // console.log(e)  
    // console.log(setColor)
    // console.log(bgColor)
    setBgColor(e)
  }
  return (
    <>
      <Input
        changeHandler={changeHandler}
        inputValue={text}
        keyHandler={keyHandler}
      />
      <Button onClickHandler={onClickHandler} isDisabled={text.trim().length===0}/>
      <br />
      <BoxColor bgColor={bgColor}/>
      <ColorPickerList color={color} btnBgColorHandler={btnBgColorHandler}/>
    </>
  );
};
export default ColorPickerOfficial;
