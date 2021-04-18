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
import useWindowDimensions from "../components/getWindow";
import SkillSet from "../components/skillSet";
import Contact from "../components/contact";

const Index: React.FC<IndexProps> = (props) => {
  const widthSize = useWindowDimensions().width;
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
  let body = (
    <>
      <Intro />
      <About />
      <WebDev />
      <SkillSet />
      <Contact />
    </>
  );
  if (widthSize > 700) {
    body = (
      <>
        <ScrollContainer>
          <Intro />
          <About />
          <WebDev />
          <SkillSet />
          <Contact />
        </ScrollContainer>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          zIndex: 2,
          overflow: "hidden",
          height: "100%",

          // position: "absolute",
          width: "100%",
          // background: "red",
        }}
      >
        <CustomCursor data={data} />
        <motion.div exit={{ opacity: 0 }}>
          <motion.div initial="initial" animate="animate">
            <motion.div
              style={{
                marginTop: `${offsetY / 13.5 + 67.2}px`,
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

        <MainContainer {...props}>{body}</MainContainer>
      </div>
    </>
  );
};

export default Index;
