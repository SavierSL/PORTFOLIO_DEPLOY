import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";

import gsap from "gsap";

export interface SkillSetProps {}

const SkillSet: React.FC<SkillSetProps> = () => {
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
        <div ref={skillSetBgReg} className={styles.skillSetContainer_bg}>
          <div>
            <h1 style={{ fontSize: "22rem", opacity: "50%" }}>Skill Set</h1>
          </div>
          <div className={styles.skillsAndStack}>
            <h1>Skills and Stack</h1>
            <div className={styles.stack}>
              <div className={styles.languages}>
                <img src="/postgresql.svg" alt="" />
                <img src="/typescript.svg" alt="" />
              </div>
              <div className={styles.frameworks}></div>
              <div className={styles.backEndLang}></div>
              <div className={styles.database}></div>
              <div className={styles.control}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSet;
