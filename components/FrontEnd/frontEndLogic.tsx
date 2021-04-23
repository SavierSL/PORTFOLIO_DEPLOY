export interface FrontEndLogicProps {}

const FrontEndLogic = () => {
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
  return { imagesData };
};

export default FrontEndLogic;
