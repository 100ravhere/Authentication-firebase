import React from "react";
import Signup from "./Components/Signup";

import {AuthProvider} from "./Contexts/AuthContext"

import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./Components/privateRoute"


import './App.css'
const  App =() => {
 

  return (
    <div>
      
    <Router>
     <AuthProvider>


     <PrivateRoute exact path="/home"  component ={Home} />

<Route path="/signup" exact component={Signup} />

<Route path="/" exact component ={Login} />

</AuthProvider>
<div className="heading"> </div>
</Router> 
    </div>
  );
}

export default App;
