import React , {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // const mylib = window.section5;
  const [bars , barsClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();

   if(e.target.classList.contains('fa-bars')){
     const left = document.querySelector('.content__left');
     const right = document.querySelector(".content__right");
     left.classList.add("transition1");
     right.classList.add("transition2");
   }
   else if(e.target.classList.contains('fa-times')){
    const left = document.querySelector('.content__left');
    const right = document.querySelector(".content__right");
    left.classList.remove("transition1");
    right.classList.remove("transition2");
   }
  }
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
            <Home handleClick={handleClick}></Home>
          </Route>
          <Route path="/about">
            <About handleClick={handleClick}></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
