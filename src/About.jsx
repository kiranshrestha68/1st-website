import React from "react";
// import  {NavLink } from "react-router-dom";
import web from "../src/images/about.jfif";
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