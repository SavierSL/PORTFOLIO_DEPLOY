import React, { useEffect } from "react";
import styles from "../../styles/main.module.scss";
import Wrapper from "../wrapper";

import ContactLogic from "./contactLogic";
export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const {
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
  } = ContactLogic();
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
