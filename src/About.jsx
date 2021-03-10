import React from "react";
// import  {NavLink } from "react-router-dom";
import web from "../src/images/images1.png";
import Common from "./Common";

const About = () => {
    return (
        <>
          <Common
              name="Welcome to about page"
              btn="Contact Us"
              imgsrc={web}
              visit="/contact"
          />
        </>
    );
}

export default About;