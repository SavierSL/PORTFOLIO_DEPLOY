import { useState } from "react";
import { useSelector } from "react-redux";

export interface CursorLogicProps {}

const CursorLogic = () => {
  const cursorStyle = useSelector((state: any) => state.cursor.cursorStyle);
  const [mousePosition, setMousePoisition] = useState({
    x: 0,
    y: 0,
  });
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const onMouseMove = (event: any) => {
    const { pageX: x, pageY: y } = event;
    setMousePoisition({ x, y });
  };
  return {
    cursorStyle,
    mousePosition,
    handleScroll,
    onMouseMove,
  };
};

export default CursorLogic;
