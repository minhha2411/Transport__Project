import React from 'react';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import ServicesSection1 from '../components/ServicesSection1';
import ServicesSection2 from '../components/ServicesSection2';
import Footer from '../components/Footer';
export default function Services(props) {
    return (
        <div class="Services">
        <div class="content__left">
          <Leftbar handleClick={props.handleClick}></Leftbar>
        </div>
        <div class="content__right">
          <Navbar handleClick={props.handleClick}></Navbar>
          <ServicesSection1></ServicesSection1>
          <ServicesSection2></ServicesSection2>
          <Footer></Footer>
        </div>
      </div>
    )
}
