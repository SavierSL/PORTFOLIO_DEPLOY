import React from "react";
import styles from "../styles/main.module.scss";
import Wrapper from "./wrapper";
export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <Wrapper padding={false}>
          <h1 className={styles.skillSet}>About.me</h1>

          <div>
            <div className={styles.contactDetails}>
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
        </Wrapper>
      </div>
    </>
  );
};

export default Contact;
