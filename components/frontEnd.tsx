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
  return (
    <>
      <div className={styles.frontEndProjectsContainer}>
        {images.map((image) => {
          return (
            <div className={styles.frontEndProjectsContainer_projectContainer}>
              <div
                className={
                  styles.frontEndProjectsContainer_projectContainer_imgContainer
                }
              >
                <img src={`/${image}.png`} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrontEndProjects;
