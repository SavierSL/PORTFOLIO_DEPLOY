import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";

import gsap from "gsap";
import Wrapper from "./wrapper";

export interface SkillSetProps {}

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
  const db = ["postgresql", "mongodb", "mysql"];
  const skillSetBgReg = useRef();
  const bgReveal = useRef();
  const interSection = useIntersection(bgReveal, {
    root: null,
    rootMargin: "0px",
    threshold: 0.19,
  });
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
    interSection && interSection.intersectionRatio < 0.19
      ? skillBgFadOut(skillSetBgReg)
      : skillBgFadeIn(skillSetBgReg);
  }, [interSection]);
  return (
    <>
      <div className={styles.skillSetContainer}>
        <div ref={bgReveal} className={styles.skillSetReveal}></div>

        <Wrapper padding={false}>
          <div>
            <h1 className={styles.skillSet}>Skill Set</h1>
          </div>
          <div className={styles.skillsAndStack}>
            <h1>Skills and Stack</h1>
            <div className={styles.stack}>
              <div className={styles.icon}>
                {languages.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.icon}>
                {frameworks.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.icon}>
                {db.map((item) => {
                  return (
                    <div className={styles.icon_title}>
                      <img src={`/${item}.svg`} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.database}></div>
              <div className={styles.control}></div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default SkillSet;
