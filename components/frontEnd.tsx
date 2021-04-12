import styles from "../styles/main.module.scss";
export interface FrontEndProjectsProps {}

const FrontEndProjects: React.SFC<FrontEndProjectsProps> = () => {
  const images = [
    "anime",
    "awwward",
    "news",
    "burger",
    "calcu",
    "ecom",
    "twitter",
  ];
  const imagesData = [
    { image: "anime", techs: ["html", "css"] },
    { image: "awwward", techs: ["JavaScript", "GatbyJS", "Gsap", "Canva"] },
    { image: "news", techs: ["html", "css"] },
    { image: "burger", techs: ["JaveScript", "ReactJS", "css", "Redux"] },
    { image: "calcu", techs: ["JavaScript", "css", "ReactJS", "Redux"] },
    {
      image: "danny",
      techs: ["ReactJS", "gsap", "sass"],
    },
    {
      image: "twitter",
      techs: ["JavaScript", "css", "ReactJS", "ReactContext"],
    },
    {
      image: "threejs",
      techs: ["JavaScript", "ThreeJS", "ReactJS"],
    },
    {
      image: "fueled",
      techs: ["JavaScript", "ReactRedux", "ReactJS"],
    },
    {
      image: "todolist",
      techs: ["JavaScript", "ReactRedux", "ReactJS"],
    },
  ];
  return (
    <>
      <div className={styles.frontEndProjectsContainer}>
        {imagesData.map((data) => {
          return (
            <div className={styles.frontEndProjectsContainer_projectContainer}>
              <div
                className={
                  styles.frontEndProjectsContainer_projectContainer_imgContainer
                }
              >
                <img src={`/${data.image}.png`} alt="" />
              </div>
              <div
                className={
                  styles.frontEndProjectsContainer_projectContainer_stack
                }
              >
                {data.techs.map((usedTech) => {
                  return (
                    <div
                      className={
                        styles.frontEndProjectsContainer_projectContainer_stack_background
                      }
                    >
                      <p>{usedTech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrontEndProjects;
