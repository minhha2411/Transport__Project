import React from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactSection from "../components/ContactSection";

export default function Contact(props) {
  return (
    <div class="Contact">
      <div class="content__left">
        <Leftbar handleClick={props.handleClick}></Leftbar>
      </div>
      <div class="content__right">
        <Navbar handleClick={props.handleClick}></Navbar>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>
    </div>
  );
}
