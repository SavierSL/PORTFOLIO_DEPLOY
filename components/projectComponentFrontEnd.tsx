import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";
import gsap from "gsap";
export interface FrontEndProjectsProps {
  data: {
    image: string;
    techs: string[];
  };
}

const ProjectFrontEndComponent: React.SFC<FrontEndProjectsProps> = ({
  data,
}) => {
  const imageFrontEndRef = useRef();
  const fonrtEndProjRef = useRef();
  const intersection = useIntersection(imageFrontEndRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const images = [
    "anime",
    "awwward",
    "news",
    "burger",
    "calcu",
    "ecom",
    "twitter",
  ];
  const imagesData = [
    { image: "anime", techs: ["html", "css"] },
    { image: "awwward", techs: ["JavaScript", "GatbyJS", "Gsap", "Canva"] },
    { image: "news", techs: ["html", "css"] },
    { image: "burger", techs: ["JaveScript", "ReactJS", "css", "Redux"] },
    { image: "calcu", techs: ["JavaScript", "css", "ReactJS", "Redux"] },
    {
      image: "danny",
      techs: ["ReactJS", "gsap", "sass"],
    },
    {
      image: "twitter",
      techs: ["JavaScript", "css", "ReactJS", "ReactContext"],
    },
    {
      image: "threejs",
      techs: ["JavaScript", "ThreeJS", "ReactJS"],
    },
    {
      image: "fueled",
      techs: ["JavaScript", "ReactRedux", "ReactJS"],
    },
    {
      image: "todolist",
      techs: ["JavaScript", "ReactRedux", "ReactJS"],
    },
  ];
  const fadeIn = (el: any) => {
    gsap.to(el.current, { opacity: 1, duration: 1, ease: "ease" });
  };
  const fadeOut = (el: any) => {
    gsap.to(el.current, { opacity: 0 });
  };
  useEffect(() => {
    intersection && intersection.intersectionRatio < 0.5
      ? fadeOut(fonrtEndProjRef)
      : fadeIn(fonrtEndProjRef);
  }, [intersection]);
  return (
    <>
      <div
        ref={fonrtEndProjRef}
        className={styles.frontEndProjectsContainer_projectContainer}
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
