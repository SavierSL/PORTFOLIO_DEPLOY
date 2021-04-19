import React, { useEffect, useRef } from "react";
import styles from "../styles/main.module.scss";
import Wrapper from "./wrapper";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useIntersection } from "react-use";
import gsap from "gsap";
init("user_87HydbQh2Wdh3L0suEfWs");
export interface ContactProps {}
interface data {
  letter: string;
  ref: React.MutableRefObject<undefined>;
  delay: number;
}
const Contact: React.FC<ContactProps> = () => {
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
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.3
      ? fadeOutLetters(letterData)
      : fadeInLetters(letterData);
    interSection && interSection?.intersectionRatio < 0.3
      ? fadeOutIcons(icons)
      : fadeInIcons(icons);
  }, [interSection]);
  useEffect(() => {
    interSection2 && interSection2?.intersectionRatio < 0.3
      ? fadeOutLetters(letterData2)
      : fadeInLetters(letterData2);
  }, [interSection2]);
  return (
    <>
      <div className={styles.contactContainer}>
        <Wrapper padding={false}>
          <div
            ref={bgReveal}
            style={{
              height: "40rem",
              width: "1rem",

              position: "absolute",
            }}
          ></div>
          <div ref={skillsIconsRef} style={{ display: "flex" }}>
            {letterData.map((letter) => {
              return (
                <h1 className={styles.skillSet} ref={letter.ref}>
                  {letter.letter}
                </h1>
              );
            })}
          </div>

          <div>
            <div ref={icons} className={styles.contactDetails}>
              <a href="https://www.facebook.com/xavier.sanlorenzo.54/">
                <img src="/icon/fb.svg" alt="" />
              </a>
              <a href="https://github.com/SavierSL">
                <img src="/icon/git.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/saviersl/">
                <img src="/icon/ig.svg" alt="" />
              </a>
              <a href="https://twitter.com/codeXave">
                <img src="/icon/twitter.svg" alt="" />
              </a>
            </div>
            <div className={styles.links}></div>
          </div>
          <div className={styles.emailContainerFrom}>
            <div ref={skillsIconsRef} style={{ display: "flex" }}>
              <div
                ref={bgReveal2}
                style={{
                  height: "40rem",
                  width: "1rem",

                  position: "absolute",
                }}
              ></div>
              {letterData2.map((letter) => {
                return (
                  <h1 className={styles.skillSet} ref={letter.ref}>
                    {letter.letter}
                  </h1>
                );
              })}
            </div>
            <form onSubmit={sendEmail}>
              <div className={styles.contactDetailsForm}>
                <div className={styles.contactDetails_contactMe}>
                  <h1 style={{ color: "#fff" }}>
                    I am looking forward to work with you
                  </h1>
                  <div style={{ marginTop: "1rem" }}>
                    <h1 style={{ color: "#fff" }}>
                      sanlorenzoxavier@gmail.com
                    </h1>
                    <h1 style={{ color: "#fff" }}>09451384905</h1>
                  </div>
                </div>
                <div className={styles.formContainer}>
                  <h1 style={{ color: "violet" }}>
                    You can send me a direct message here
                  </h1>
                  <div className={styles.input}>
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                  <div className={styles.input}>
                    <input type="text" placeholder="Name" name="name" />
                  </div>
                  <div className={styles.input}>
                    <input type="text" placeholder="Email" name="email" />
                  </div>
                  <div className={styles.input}>
                    <input
                      type="textarea"
                      placeholder="Message"
                      name="message"
                    />
                  </div>
                  <div className={styles.input}>
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Contact;
