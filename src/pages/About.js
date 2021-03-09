import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
export default function About(props) {
  useEffect(() => {});

  return (
    <div class="About">
      <div class="content__left">
        <Leftbar handleClick={props.handleClick}></Leftbar>
      </div>
      <div class="content__right">
        <Navbar handleClick={props.handleClick}></Navbar>
        <AboutSection></AboutSection>
        <Footer></Footer>
      </div>
    </div>
  );
}
