import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";
import gsap from "gsap";
import ProjectFrontEndComponent from "./projectComponentFrontEnd";
export interface FrontEndProjectsProps {}

const FrontEndProjects: React.SFC<FrontEndProjectsProps> = () => {
  const imageFrontEndRef = useRef();

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

  return (
    <>
      <div className={styles.frontEndProjectsContainer}>
        {imagesData.map((data) => {
          return <ProjectFrontEndComponent key={data.image} data={data} />;
        })}
      </div>
    </>
  );
};

export default FrontEndProjects;
