import { useState } from "react";
import ScreenContext from './screenContext';

const ScreenState = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [screenSize, setScreenSize] = useState(false);

    const changeScreenSize = () => {
        setWidth(375);
        setHeight(812);
        setScreenSize(true)
      };

      const restoreScreenSize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setScreenSize(false)
      };

    
  return (
    <ScreenContext.Provider value={{ screenSize, changeScreenSize, restoreScreenSize }}>
        {props.children}
    </ScreenContext.Provider>
  )
}

export default ScreenState;
