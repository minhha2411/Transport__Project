import React , {useEffect} from "react";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Footer from "../components/Footer";
export default function Home(props) {
  
  useEffect(() => {

  });
  return (
    <div className="Home">
      <div class="content__left">
        <Leftbar handleClick={props.handleClick}></Leftbar>
      </div>
      <div class="content__right">
        <Navbar bars={props.bars} handleClick={props.handleClick}></Navbar>
        <Hero></Hero>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Footer></Footer>
      </div>
    </div>
  );
}
