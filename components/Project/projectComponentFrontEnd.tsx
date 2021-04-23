import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import styles from "../../styles/main.module.scss";
import gsap from "gsap";
import ProjectComponentFrontEndLogic from "./projectComponentFrontEndLogic";
export interface FrontEndProjectsProps {
  data: {
    image: string;
    techs: string[];
  };
}

const ProjectFrontEndComponent: React.SFC<FrontEndProjectsProps> = ({
  data,
}) => {
  const {
    imageFrontEndRef,
    fonrtEndProjRef,
    intersection,
    fadeIn,
    fadeOut,
  } = ProjectComponentFrontEndLogic();

  useEffect(() => {
    intersection && intersection.intersectionRatio < 0.2
      ? fadeOut(fonrtEndProjRef)
      : fadeIn(fonrtEndProjRef);
  }, [intersection]);

  return (
    <>
      <div
        ref={fonrtEndProjRef}
        className={styles.frontEndProjectsContainer_projectContainer}
        style={{ opacity: 0 }}
      >
        <div
          ref={imageFrontEndRef}
          className={styles.frontEndImageReveal}
          style={{
            height: "20rem",
            width: "1rem",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        ></div>
        <div
          className={
            styles.frontEndProjectsContainer_projectContainer_imgContainer
          }
        >
          <img src={`/${data.image}.png`} alt="" />
        </div>
        <div
          className={styles.frontEndProjectsContainer_projectContainer_stack}
        >
          {data.techs.map((usedTech) => {
            return (
              <div
                className={
                  styles.frontEndProjectsContainer_projectContainer_stack_background
                }
              >
                <p style={{ color: "#fff" }}>{usedTech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectFrontEndComponent;
