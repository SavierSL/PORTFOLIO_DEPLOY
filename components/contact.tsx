import React from "react";
import styles from "../styles/main.module.scss";
import Wrapper from "./wrapper";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_87HydbQh2Wdh3L0suEfWs");
export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
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
  return (
    <>
      <div className={styles.contactContainer}>
        <Wrapper padding={false}>
          <h1 className={styles.skillSet}>About</h1>

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
          <div className={styles.emailContainerFrom}>
            <h1 className={styles.skillSet}>Contacts</h1>
            <form onSubmit={sendEmail}>
              <div className={styles.contactDetailsForm}>
                <div className={styles.contactDetails_contactMe}>
                  <h1 style={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta eaque labore fugiat placeat eveniet commodi!
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
