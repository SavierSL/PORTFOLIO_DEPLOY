import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useGlobalDispatchContext } from "../components/Context/globalContext";
import CustomCursor from "../components/cursor";
import MainContainer from "../components/mainContainer";
import { pointerCursor } from "../components/redux/actions/cursor";
import { useRouter } from "next/router";
import {
  offTransition,
  onTransition,
} from "../components/redux/actions/transtition";
import { useDispatch } from "react-redux";
import Wrapper from "../components/wrapper";
import styles from "../styles/main.module.scss";
export interface BlogItProps {}

const Dev: React.FC<BlogItProps> = (props) => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(offTransition());
  }, []);

  return (
    <>
      <div
        className="app"
        style={{
          zIndex: 2,
          top: 0,
          left: 0,
          minHeight: "200vh",
          width: "100%",
        }}
      >
        <MainContainer {...props}>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <CustomCursor data={data} />
            <Wrapper>
              <div className={styles.projectDetailsContainer}>
                <h1 className={styles.titleHeading}>Conek Dev</h1>
                <p className={styles.description}>
                  I created this for devs, it is like a social web app for
                  developers. A dev can post anything
                </p>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      <span className={styles.span_orange}>Log in page</span> if
                      there is any mistakes on the input it will notify if a
                      user have not yet registered or mispelled email or pass
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev2.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      On this page a user can update his profile or add more
                      infromation about his education background and work
                      experience.
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev3.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>Update profile page</h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev4.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>Add educ page</h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev5.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>News feed, a user can like and comment on posts</h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev6.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>The list of devs that registered on this web app</h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/dev7.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>A profile page of a developer</h1>
                  </div>
                </div>
              </div>
            </Wrapper>
          </motion.div>
        </MainContainer>
      </div>
    </>
  );
};

export default Dev;
