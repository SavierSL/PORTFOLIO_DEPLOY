import React, { useEffect } from "react";
import { Cursor } from "../../style-components/cursor";
import CursorLogic from "./cursorLogic";

interface CustomCursorProps {
  data: {
    ease: number;
    current: number;
    previous: number;
    rounded: number;
  };
}
const CustomCursor: React.FC<CustomCursorProps> = ({ data }) => {
  const {
    cursorStyle,
    mousePosition,
    handleScroll,
    onMouseMove,
  } = CursorLogic();
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <Cursor
        className={cursorStyle === "pointer" ? "pointer" : "hovered"}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          position: "absolute",
        }}
      ></Cursor>
    </>
  );
};

export default CustomCursor;
