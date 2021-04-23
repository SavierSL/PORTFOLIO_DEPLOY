import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hoveredCursor, pointerCursor } from "../redux/actions/cursor";
import NextLink from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { onTransition } from "../redux/actions/transtition";
import { useIntersection } from "react-use";
import styles from "../../styles/main.module.scss";
export interface ProjectComponentLogicProps {}

const ProjectComponentLogic = () => {
  const router = useRouter();
  const clickDetailsRef = useRef();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const imageProjectRef = useRef();
  const descriptionRef = useRef();
  const projectRevealRef = useRef();
  const projectRef = useRef();
  const interSection = useIntersection(projectRevealRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    //make sure to adjust the height of div that you ref to it to adjust it
  });

  const projectFadeIn = (e: any) => {
    gsap.to(e.current, { opacity: 1 });
  };
  const projectFadeOut = (e: any) => {
    gsap.to(e.current, { opacity: 0 });
  };
  const onHoverDetails = () => {
    gsap.to(clickDetailsRef.current, {
      opacity: 1,
      duratin: 0.5,

      ease: "Power4.easeInOut",
      transform: `translateY(-3rem)`,
    });
  };
  const onLeaveHoverDetails = () => {
    gsap.to(clickDetailsRef.current, {
      opacity: 0,
      duratin: 0.5,

      ease: "Power4.easeInOut",
      transform: `translateY(3rem)`,
    });
  };
  return {
    onLeaveHoverDetails,
    onHoverDetails,
    projectFadeOut,
    projectFadeIn,
    interSection,
    projectRef,
    projectRevealRef,
    descriptionRef,
    imageProjectRef,
    titleRef,
    dispatch,
    clickDetailsRef,
    router,
  };
};

export default ProjectComponentLogic;
