import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../wrapper";

import gsap from "gsap";
import styles from "../../styles/main.module.scss";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
//register the scrolLTrigger
// gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useWindowDimensions from "../getWindow";
import AboutLogic from "./aboutLogic";

const About: React.FC<{}> = () => {
  let {
    dispatch,
    zoomOut,
    setZoomOut,
    zoomOut2,
    setZoomOut2,
    fadeIn2State,
    setFadeIn2State,
    fadeIn22State,
    setFadeIn22State,
    tl,
    nameRef,
    imageRevealFirstRef,
    imageRevealFirstRef2,
    myTitleRef,
    akaliCImage,
    sentence1,
    sentence2,
    sentence3,
    sentence21,
    sentence22,
    sentence23,
    imageContainer,
    image,
    imageReveal,
    imageContainer2,
    image2,
    imageReveal2,
    offsetY,
    setOffsetY,
    handleScroll,
    interSection,
    interSectionImageReveal,
    interSectionImageReveal2,
    fadeIn,
    fadeOut,
    fadeIn2,
    fadeOut2,
    fadeIn3,
    fadeOut3,
    firstImageReveal,
    secondImageReveal,
    firstImageReveal2,
    secondImageReveal2,
    onHoverCimage,
    onHoverOutCimage,
  } = AboutLogic();
  useEffect(() => {
    interSectionImageReveal && interSectionImageReveal?.intersectionRatio < 0.2 //not reached
      ? fadeOut2(sentence1.current, sentence2.current, sentence3.current)
      : fadeIn2(sentence1.current, sentence2.current, sentence3.current);
  }, [interSection, interSectionImageReveal]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.3 //not reached
      ? fadeOut(myTitleRef.current)
      : fadeIn(myTitleRef.current);
    interSectionImageReveal && interSectionImageReveal?.intersectionRatio < 0.2 //not reached
      ? secondImageReveal(imageContainer, imageReveal, image, sentence1.current)
      : firstImageReveal(imageContainer, imageReveal, image, sentence1.current);
  }, [interSection, interSectionImageReveal, interSectionImageReveal2]);
  useEffect(() => {
    interSectionImageReveal2 &&
    interSectionImageReveal2?.intersectionRatio < 0.3 //not reached
      ? secondImageReveal2(imageContainer2, imageReveal2, image2)
      : firstImageReveal2(imageContainer2, imageReveal2, image2);
  }, [interSectionImageReveal2, interSection]);
  return (
    <>
      {/* we will adjust the height base on the responsiveness 1980 if cp and 1280px if web*/}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        <Wrapper padding={false}>
          <div className={styles.myName}>
            <h1>I AM XAVIER SAN LORENZO</h1>
          </div>
          <div>
            <div ref={nameRef} className={styles.nameRef}>
              "
            </div>
            <div className={styles.myTitleContainer}>
              <h1
                ref={myTitleRef}
                className={styles.myTitleContainer_myTitleSkills1}
              >
                FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
              </h1>
              <h1 className={styles.myTitleContainer_myTitleSkills2}>
                FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
              </h1>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <div
                ref={imageRevealFirstRef}
                className={styles.imageRevealFirstRef}
              >
                "
              </div>
              <div className={styles.imageAndGradContainer}>
                <img
                  className={styles.image_container_imgC}
                  onMouseEnter={() => {
                    onHoverCimage();
                  }}
                  onMouseLeave={() => {
                    onHoverOutCimage();
                  }}
                  ref={akaliCImage}
                  src="/cRagdoll.png"
                  alt="Picture of the author"
                />
                <img
                  className={styles.image_container_imgW}
                  ref={(el) => (image = el)}
                  src="/wRagdoll.png"
                  alt="Picture of the author"
                />
                <div
                  ref={(el) => (imageContainer = el)}
                  className={styles.image_container}
                  style={{
                    transform: `translateX(${offsetY * 0.02 - 20}px)`,
                    backgroundImage: "/dots.png",
                  }}
                >
                  <img src="/dots.png" alt="" style={{ opacity: "70%" }} />
                  <div
                    ref={(el) => (imageReveal = el)}
                    className={styles.image_container_imageReveal}
                  ></div>
                </div>
                <div
                  className={styles.imageAndGradContainer_grad}
                  style={{
                    transform: `${
                      useWindowDimensions().width < 700
                        ? ""
                        : `translateX(-${offsetY * 0.05}px`
                    }`,
                  }}
                >
                  <h1
                    ref={sentence1}
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    I graduated as a Bachelor of
                  </h1>
                  <h1
                    ref={sentence2}
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    Science in Entertainment and
                  </h1>
                  <h1
                    ref={sentence3}
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    Multimedia Computing
                  </h1>
                </div>
              </div>
              {/*second set /////////////////////////  */}

              <div className={styles.imageAndGradContainer2}>
                <div
                  ref={imageRevealFirstRef2}
                  className={styles.imageRevealFirstRef2}
                >
                  "
                </div>
                <div
                  className={styles.imageAndGradContainer2_grad}
                  style={{ zIndex: 5000 }}
                >
                  <div
                    className={styles.sentence2}
                    style={{
                      marginTop:
                        useWindowDimensions().width < 700 ? "" : "6rem",
                      transform: `${
                        useWindowDimensions().width < 700
                          ? ""
                          : `translateX(${offsetY * 0.05}px`
                      }`,
                      transition: "all 1s ease",
                    }}
                  >
                    <h1 ref={sentence21} style={{ color: "#fff" }}>
                      I am a 3D modeler and a graphic artist,
                    </h1>
                    <h1 ref={sentence22} style={{ color: "#fff" }}>
                      but recently I focused in
                    </h1>
                    <h1 ref={sentence23} style={{ color: "#fff" }}>
                      web development.
                    </h1>
                  </div>
                </div>

                <div
                  ref={(el) => (imageContainer2 = el)}
                  className={styles.image_container2}
                  style={{ transform: `translateY(${offsetY * 0.05}px)` }}
                >
                  <img src="/dots.png" alt="" style={{ opacity: "70%" }} />
                  <div
                    ref={(el) => (imageReveal2 = el)}
                    className={styles.image_container2_imageReveal2}
                  ></div>
                </div>

                <img
                  ref={(el) => (image2 = el)}
                  className={styles.image_container2_imgW2}
                  src="/wMecha.png"
                  alt="Picture of the author"
                />
              </div>
            </div>
            <img
              style={{
                height: "35rem",
                marginTop: "-5rem",
                marginLeft: "-5rem",
              }}
              src="/career.png"
              alt="Picture of the author"
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
