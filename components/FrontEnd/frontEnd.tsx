import styles from "../../styles/main.module.scss";
import ProjectFrontEndComponent from "../Project/projectComponentFrontEnd";
import FrontEndLogic from "./frontEndLogic";
export interface FrontEndProjectsProps {}
const FrontEndProjects: React.FC<FrontEndProjectsProps> = () => {
  const { imagesData } = FrontEndLogic();

  return (
    <>
      <div className={styles.frontEndProjectsContainer}>
        {imagesData.map((data) => {
          return <ProjectFrontEndComponent key={data.image} data={data} />;
        })}
      </div>
    </>
  );
};

export default FrontEndProjects;
