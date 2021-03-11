import React from 'react';
import Common from './Common';
import web from "../src/images/images1.png";
// import "./index.css";fds

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with Us."
                btn="Get Started "
                imgsrc={web}
                visit="/services"
            />
        </>
    );
};

export default Home;
