import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";

import gsap from "gsap";
import Wrapper from "./wrapper";

export interface SkillSetProps {}
interface data {
  letter: string;
  ref: React.MutableRefObject<undefined>;
  delay: number;
}
const SkillSet: React.FC<SkillSetProps> = () => {
  const languages = ["javascript", "typescript", "html5", "css3", "python"];
  const frameworks = [
    "react",
    "nextjs",
    "gatsby",
    "sass",
    "styled",
    "reduxsaga",
    "graphql",
    "redux",
    "greensock",
    "apollographql",
    "nodejs",
    "express",
    "git",
  ];
  const letter1 = useRef();
  const letter2 = useRef();
  const letter3 = useRef();
  const letter4 = useRef();
  const letter5 = useRef();
  const letter6 = useRef();
  const letter7 = useRef();
  const letter8 = useRef();
  const letter9 = useRef();
  const letter10 = useRef();
  const letter11 = useRef();
  const letter12 = useRef();
  const letter13 = useRef();
  const letter14 = useRef();
  const letter15 = useRef();
  const letter16 = useRef();
  const letterData = [
    { letter: "S", ref: letter1, delay: 0 },
    { letter: "k", ref: letter2, delay: 0.1 },
    { letter: "i", ref: letter3, delay: 0.2 },
    { letter: "l", ref: letter4, delay: 0 },
    { letter: "l", ref: letter5, delay: 0.1 },
    { letter: "", ref: letter6, delay: 0.2 },
    { letter: "S", ref: letter7, delay: 0 },
    { letter: "e", ref: letter8, delay: 0.1 },
    { letter: "t", ref: letter9, delay: 0.2 },
  ];
  const db = ["postgresql", "mongodb"];
  const skillSetBgReg = useRef();
  const bgReveal = useRef();
  const interSection = useIntersection(bgReveal, {
    root: null,
    rootMargin: "0px",
    threshold: 0.19,
  });
  const skillsIconsRef = useRef();
  const interSectionSkillSet = useIntersection(bgReveal, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  const fadeInLetters = (element: data[]) => {
    element.map((e) => {
      gsap.to(e.ref.current, {
        opacity: "50%",
        y: 0,
        delay: e.delay,
        duration: 0.2,
        ease: "Power2.ease",
      });
    });
  };
  const fadeOutLetters = (element: data[]) => {
    element.map((e) => {
      gsap.to(e.ref.current, {
        opacity: 0,
        y: 30,
        delay: e.delay,
        duration: 0.2,
        ease: "Power2.ease",
      });
    });
  };
  const fadeInIcons = (element: any) => {
    gsap.to(element.current, {
      opacity: "100%",
      delay: 0.2,
      duration: 0.6,
      ease: "Power2.ease",
    });
  };
  const fadeOutIcons = (element: any) => {
    gsap.to(element.current, {
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
      ease: "Power2.ease",
    });
  };
  const skillBgFadeIn = (e: any) => {
    gsap.to(e.current, {
      duration: 0.5,
      transform: `translateX(0%)`,
      ease: "easeOut",
    });
  };
  const skillBgFadOut = (e: any) => {
    gsap.to(e.current, {
      duration: 0.5,
      transform: `translateX(-100%)`,
    });
  };
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.19
      ? skillBgFadOut(skillSetBgReg)
      : skillBgFadeIn(skillSetBgReg);
    interSectionSkillSet && interSectionSkillSet?.intersectionRatio < 0.2 //not reached
      ? fadeOutLetters(letterData)
      : fadeInLetters(letterData);
    interSectionSkillSet && interSectionSkillSet?.intersectionRatio < 0.2 //not reached
      ? fadeOutIcons(skillsIconsRef)
      : fadeInIcons(skillsIconsRef);
  }, [interSection, interSectionSkillSet]);
  return (
    <>
      <div className={styles.skillSetContainer}>
        <div ref={bgReveal} className={styles.skillSetReveal}></div>

        <Wrapper padding={false}>
          <div>
            <div
              style={{
                background: "red",
                opacity: 0,
                position: "absolute",
                height: "50rem",
                width: "1rem",
              }}
            ></div>
            {/* <h1 className={styles.skillSet}>Skill Set</h1> */}
            <div ref={skillsIconsRef} style={{ display: "flex" }}>
              {letterData.map((letter) => {
                return (
                  <h1 className={styles.skillSet} ref={letter.ref}>
                    {letter.letter}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className={styles.skillsAndStack}>
            <div ref={skillsIconsRef} className={styles.stack}>
              <div className={styles.icon}>
                {languages.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p style={{ color: "#fff" }}>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.icon}>
                {frameworks.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p style={{ color: "#fff" }}>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.icon}>
                {db.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p style={{ color: "#fff" }}>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SkillSet;
