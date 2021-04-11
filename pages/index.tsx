import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
export interface IndexProps {
  props: any;
}
import useWindowSize from "../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import Intro from "../components/intro";
import {
  ballAnimatin,
  scrollAnimation,
  transition,
} from "../components/animation";
import About from "../components/about";
import GraphicArtist from "../components/graphicArtist";
import WebDev from "../components/webDev";
import gsap from "gsap";
import useWindowDimensions from "../components/getWindow";
import CustomCursor from "../components/cursor";
import {
  GlobalProvider,
  useGlobalDispatchContext,
} from "../components/Context/globalContext";
import { useDispatch, useSelector } from "react-redux";
import { isResSent } from "next/dist/next-server/lib/utils";
import { offTransition } from "../components/redux/actions/transtition";
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
