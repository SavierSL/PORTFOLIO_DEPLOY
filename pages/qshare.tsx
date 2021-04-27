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

const Qshare: React.FC<BlogItProps> = (props) => {
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
                <h1
                  className={styles.titleHeading}
                  style={{ marginBottom: "1rem" }}
                >
                  QSHARE
                </h1>
                <p className={styles.description}>
                  This app that I built is for teachers and student, A teacher
                  can make a{" "}
                  <span style={{ color: "orange" }}>
                    quiz sets, questions and also multiple choices of the
                    question
                  </span>{" "}
                  the quiz set will generate a
                  <span style={{ color: "orange" }}> unique code </span> a
                  student can use it to search for the quiz set.
                </p>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/qshare2.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      This a
                      <span style={{ color: "orange" }}>
                        {" "}
                        student dash board
                      </span>{" "}
                      if a student still have not answered the quiz set the
                      he/she added an answer button is visible on his/her
                      dashboard, or the total score of the student's quiz set
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/qshare3.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      This section is when a student submitted the answers, a
                      studnet can check the total scores and the correct
                      answers. Dev note: I might change the privacy of this
                      page. It might be better if only a teacher can see it
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/qshare3.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt corrupti necessitatibus qui a dolorem culpa.
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/qshare4.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      This a
                      <span style={{ color: "orange" }}>
                        {" "}
                        teacher's dashboard
                      </span>{" "}
                      A teacher can create a quiz here and also can view the
                      details of the quiz sets. If a teacher wants to see more
                      details about the quiz sets, like checking if who already
                      answered on his quiz set
                    </h1>
                  </div>
                </div>
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetail_image}>
                    <img src="/qshare5.png" alt="" />
                  </div>
                  <div className={styles.projectDetail_content}>
                    <h1>
                      This section is when a teacher is creating a quiz, a
                      teacher sets the title of the quiz set and it's subject.
                      Then she/he can add a questions and multiple choices on
                      that question
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

export default Qshare;
