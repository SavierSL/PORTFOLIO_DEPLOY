import { useRef, useState } from "react";
import { useIntersection } from "react-use";

import gsap from "gsap";
export interface ProjectComponentFrontEndLogicProps {}

const ProjectComponentFrontEndLogic = () => {
  const imageFrontEndRef = useRef();
  const [firstMount, setFirstMount] = useState(false);
  const fonrtEndProjRef = useRef();
  const intersection = useIntersection(imageFrontEndRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
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
    if (!firstMount) {
      return;
    }
    gsap.to(el.current, { opacity: 1, duration: 1, ease: "ease" });
  };
  const fadeOut = (el: any) => {
    setFirstMount(true);
    gsap.to(el.current, { opacity: 0 });
  };
  return {
    imageFrontEndRef,
    firstMount,
    setFirstMount,
    fonrtEndProjRef,
    intersection,
    images,
    imagesData,
    fadeIn,
    fadeOut,
  };
};

export default ProjectComponentFrontEndLogic;
