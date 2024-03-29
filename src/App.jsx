import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Abouthome from "./Abouthome";


function App() {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Abouthome}/>
            <Route exact path="/services" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/" /> 
        </Switch>
        
        </>
    )
}

export default App
