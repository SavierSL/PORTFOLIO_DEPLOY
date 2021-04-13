import React from "react";
import FrontEndProjects from "./frontEnd";
import ProjectComponent from "./projectComponent";

export interface ProjectProps {}

const Project: React.SFC<ProjectProps> = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "3rem" }}>FULL STACK PROJECTS</h1>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <ProjectComponent
            stacks={[
              "TypeScript",
              "JavaScript",
              "SASS",
              "ReactJS",
              "Redux-Saga",
              "Styled-Components",
              "Framer-Motion",
              "FilePond",
              "Bcrypt",
              "ExpressJS",
              "Mongoose",
              "Multer",
            ]}
            link="blogit"
            title="BLOG IT"
            imageName="blogit"
            description="Blog it is a web app that you can use to blog about yourself or anything, a user can easily post an image and it's content on this web app."
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            stacks={[
              "TypeScript",
              "JavaScript",
              "SASS",
              "NextJS",
              "Apollo",
              "ChakraUi",
              "Graphql",
              "Framer-Motion",
              "Fromik",
              "Redis",
              "ExpressJS",
              "Argon2",
              "PostgresQL",
            ]}
            link="qshare"
            title="Q ShareiT"
            imageName="qshare2"
            description="A web app for student and teachers, a teacher can create a quiz and send it to his/her students to answer it"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            stacks={[
              "TypeScript",
              "JavaScript",
              "SASS",
              "NextJS",
              "Next-Apollo",
              "Apollo",
              "ChakraUi",
              "Graphql",
              "Framer-Motion",
              "Fromik",
              "Redis",
              "ExpressJS",
              "Argon2",
              "PostgresQL",
            ]}
            link="taku"
            title="Taku"
            imageName="taku2"
            description="A web for otakus, they can search an anime and post something about it. The community can also comment on their post"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            stacks={[
              "JavaScript",
              "SASS",
              "ReactJs",
              "Redux-Saga",
              "Axios",
              "Bcrypt",
              "Express-Validator",
              "Gravatar",
              "ExpressJS",
              "Mongoose",
              "Multer",
            ]}
            link="dev"
            title="Dev"
            imageName="dev"
            description="A web app for developers to connect to check on their teammates progress and infos"
          />
        </div>
      </div>
      <div
        style={{
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>FRONT END PROJECTS</h1>
        <FrontEndProjects />
      </div>
    </>
  );
};

export default Project;
