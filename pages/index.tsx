import MainContainer from "../components/mainContainer";
import React, { useEffect, useRef, useState } from "react";
export interface IndexProps {
  props: any;
}

import Intro from "../components/intro";

import About from "../components/about";
import WebDev from "../components/webDev";
import ScrollContainer from "../components/scrollContainer";

const Index: React.FC<IndexProps> = (props) => {
  return (
    <>
      <ScrollContainer>
        <MainContainer {...props}>
          <Intro />
          <About />
          <WebDev />
        </MainContainer>
      </ScrollContainer>
    </>
  );
};

export default Index;
