import React , {useEffect} from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
export default function About(props) {
  useEffect(() => {
    
  });

  return (
    <div class='About'>
      
      <div class="content__left">
        <Leftbar handleClick={props.handleClick}></Leftbar>
      </div>
      <div class="content__right">
      <Navbar handleClick={props.handleClick}></Navbar>
        </div>
    </div>
  );
}

