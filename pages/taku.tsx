import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useGlobalDispatchContext } from "../components/Context/globalContext";
import CustomCursor from "../components/Cursor/cursor";
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

const Taku: React.FC<BlogItProps> = (props) => {
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
                <h1 className={styles.titleHeading}>Taku</h1>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor labore atque dolorum quam non cumque placeat qui ipsum!s
                </p>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/taku.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      A user can log in here in
                      <span className={styles.span_orange}>
                        log in section
                      </span>{" "}
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/taku2.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      <span className={styles.span_orange}>Home page</span> an
                      otaku can see recent posts of other otaku, he can comment
                      and edit his comment on their taku post, if a user owns
                      the post, a user can delete or edit it.
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/taku3.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      <span className={styles.span_orange}>
                        Anime search page
                      </span>{" "}
                      A user can search an anime here and use it to post his
                      thoughts about it, the anime will give the details about
                      it like the title or when it was created.
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/taku4.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      <span className={styles.span_orange}>Profile page</span> A
                      user can visit others profiles
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/taku5.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt corrupti necessitatibus qui a dolorem culpa.
                    </h1>
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

export default Taku;
