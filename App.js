import './App.css';
import React from 'react'
import Registration from "./component/forms/registration"
import Login from "./component/forms/login"
import Update from "./component/forms/update"
import Transaction from "./component/payment/transaction"
import Addstrip from "./component/forms/addstrip"
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom"
import Checkout from "./component/forms/checkout"
import Home from "./component/forms/home"
function App() {

  return (

    <Router >
            
    <Switch>
        
        <Route exact path="/Registration" component={Registration}/>
        <Route exact path="/Update/:id"   component={Update}/>
        <Route exact path="/Transaction"  component={Transaction}/>
        <Route exact path="/Addstrip"     component={Addstrip}/>
        <Route exact path="/Addstrip"     component={Addstrip}/>
        <Route exact path="/Checkout"     component={Checkout}/>
        <Route exact path="/Home"         component={Home}/>
        <Route exact path="/"             component={Login}/>

      </Switch> 

    </Router>


  );
}

export default App;
