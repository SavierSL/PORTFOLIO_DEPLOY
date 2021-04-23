import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hoveredCursor, pointerCursor } from "../redux/actions/cursor";
import NextLink from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { onTransition } from "../redux/actions/transtition";
import { useIntersection } from "react-use";
import styles from "../../styles/main.module.scss";
import ProjectComponentLogic from "./projectComponentLogic";
export interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
  link: string;
  stacks: string[];
}

const ProjectComponent: React.SFC<ProjectComponentProps> = ({
  title,
  description,
  imageName,
  link,
  stacks,
}) => {
  const {
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
  } = ProjectComponentLogic();
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.5
      ? projectFadeOut(projectRef)
      : projectFadeIn(projectRef);
  }, [interSection]);

  return (
    <>
      <div className={styles.projectContainer} ref={projectRef}>
        <div
          className={styles.projectContainer_projectRevealRef}
          ref={projectRevealRef}
        ></div>
        <h1
          ref={titleRef}
          style={{ marginBottom: "1rem", fontSize: "2rem", color: "#fff" }}
        >
          {title}
        </h1>
        <div className={styles.projectContainer_websiteContainer}>
          <div className={styles.projectContainer_websiteContainer_details}>
            <h1
              className={styles.projectContainer_websiteContainer_detail_click}
              ref={clickDetailsRef}
              style={{
                opacity: 0,
                transform: `translateY(3rem)`,
                background: "#000",
                padding: "1rem",
              }}
            >
              CLICK FOR MORE DETAILS
            </h1>
          </div>

          <img
            className={styles.projectContainer_websiteContainer_image}
            onMouseEnter={() => {
              dispatch(hoveredCursor());
              onHoverDetails();
            }}
            onMouseLeave={() => {
              dispatch(pointerCursor());
              onLeaveHoverDetails();
            }}
            onClick={() => {
              dispatch(pointerCursor());
              dispatch(onTransition());
              setTimeout(() => {
                return router.push(`/${link}`);
              }, 1000);
            }}
            ref={imageProjectRef}
            src={`/${imageName}.png`}
            alt=""
          />
        </div>
        <div className={styles.projectContainer_stacks}>
          {stacks.map((stack) => {
            return (
              <div className={styles.projectContainer_stacks_container}>
                <p style={{ color: "#fff" }}>{stack}</p>
              </div>
            );
          })}
        </div>
        <p
          ref={descriptionRef}
          style={{ fontSize: "1.5rem", marginTop: "1rem", color: "#fff" }}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default ProjectComponent;
