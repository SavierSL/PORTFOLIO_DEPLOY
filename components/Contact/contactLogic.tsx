import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useIntersection } from "react-use";
import gsap from "gsap";
init("user_87HydbQh2Wdh3L0suEfWs");
interface data {
  letter: string;
  ref: React.MutableRefObject<undefined>;
  delay: number;
}
const ContactLogic = () => {
  const letter1 = useRef();
  const letter2 = useRef();
  const letter3 = useRef();
  const letter4 = useRef();
  const letter5 = useRef();

  const letter21 = useRef();
  const letter22 = useRef();
  const letter23 = useRef();
  const letter24 = useRef();
  const letter25 = useRef();
  const letter26 = useRef();
  const letter27 = useRef();
  const bgReveal = useRef();
  const bgReveal2 = useRef();
  const icons = useRef();
  const skillsIconsRef = useRef();
  const interSection = useIntersection(bgReveal, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const interSection2 = useIntersection(bgReveal2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const letterData = [
    { letter: "A", ref: letter1, delay: 0 },
    { letter: "b", ref: letter2, delay: 0.1 },
    { letter: "o", ref: letter3, delay: 0.2 },
    { letter: "u", ref: letter4, delay: 0 },
    { letter: "t", ref: letter5, delay: 0.1 },
  ];
  const letterData2 = [
    { letter: "C", ref: letter21, delay: 0 },
    { letter: "o", ref: letter22, delay: 0.1 },
    { letter: "n", ref: letter23, delay: 0.2 },
    { letter: "t", ref: letter24, delay: 0 },
    { letter: "a", ref: letter25, delay: 0.1 },
    { letter: "c", ref: letter26, delay: 0.2 },
    { letter: "t", ref: letter27, delay: 0.3 },
  ];
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgl5hpz",
        "template_s1vcuar",
        e.target,
        "user_87HydbQh2Wdh3L0suEfWs"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
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
  return {
    bgReveal,
    bgReveal2,
    icons,
    skillsIconsRef,
    interSection,
    interSection2,
    letterData,
    letterData2,
    sendEmail,
    fadeInLetters,
    fadeOutLetters,
    fadeInIcons,
    fadeOutIcons,
  };
};

export default ContactLogic;
