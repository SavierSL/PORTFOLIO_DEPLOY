import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useWindowSize } from "react-use";
import { offTransition } from "./redux/actions/transtition";
import styles from "../styles/main.module.scss";
import { ballAnimatin, scrollAnimation } from "./animation";
import CustomCursor from "./Cursor/cursor";
import gsap from "gsap";
export interface ScrollContainerProps {}

const ScrollContainer: React.SFC<ScrollContainerProps> = ({ children }) => {
  const [showIndex, setShowIndex] = useState(true);
  const scrollContainer = useRef<any>();
  const size = useWindowSize();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const dispatch = useDispatch();
  const mainBg = useRef();
  const app = useRef();
  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 1.5;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current?.style) {
      scrollContainer.current.style.transform = `translate3d(0, -${
        data.rounded //: data.rounded * 0.4
      }px, 0)`; //skewY(${skew}deg)
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  useEffect(() => {
    //access the body height and assign the height of scroll container
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height * 1.04 //adjust here to fix scroling height
    }px`;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size.height]);
  useEffect(() => {
    dispatch(offTransition());
    setTimeout(() => {
      setShowIndex(false);
    }, 3000);

    gsap.to(mainBg.current, {
      opacity: "30%",

      duration: 0.5,
      delay: 3.6,
      scale: 1,
    });
    requestAnimationFrame(() => skewScrolling());
  }, []);
  return (
    <>
      <div
        ref={app}
        className="app"
        style={{
          zIndex: 2,
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div
          ref={scrollContainer}
          className="scrollContainer"
          style={{ zIndex: 2 }}
        >
          {children}
        </div>
        <img
          ref={mainBg}
          src="/wires.png"
          alt="aha"
          style={{
            top: "-30rem",
            overflow: "hidden",
            position: "fixed",
            zIndex: -1,
            opacity: "0%",
            width: "60vw",
            marginTop: `${offsetY / 450}rem`,
            left: 0,
            right: 0,
            transition: "all 1s ease",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </>
  );
};

export default ScrollContainer;
