import MainContainer from "../components/mainContainer";
import React, { useEffect, useRef, useState } from "react";
export interface IndexProps {
  props: any;
}

import Intro from "../components/intro";
import styles from "../styles/main.module.scss";
import About from "../components/about";
import WebDev from "../components/webDev";
import ScrollContainer from "../components/scrollContainer";
import { motion } from "framer-motion";
import { ballAnimatin, scrollAnimation } from "../components/animation";
import CustomCursor from "../components/cursor";

const Index: React.FC<IndexProps> = (props) => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    //access the body height and assign the height of scroll container

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        style={{
          zIndex: 2,
          overflow: "hidden",

          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <CustomCursor data={data} />
        <motion.div exit={{ opacity: 0 }}>
          <motion.div initial="initial" animate="animate">
            <motion.div
              style={{
                marginTop: `${offsetY / 18 + 67.2}px`,
                transition: `all 0.5s ease`,
              }}
              variants={ballAnimatin}
              className={styles.ball}
            ></motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            className={styles.lineContainer}
          >
            <motion.div
              variants={scrollAnimation}
              className={styles.lineContainer_line}
            ></motion.div>
          </motion.div>
        </motion.div>

        <MainContainer {...props}>
          <Intro />
          <About />
          <WebDev />
        </MainContainer>
      </div>
    </>
  );
};

export default Index;
