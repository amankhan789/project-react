import React from 'react';
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const navbar = () => {
  return (

    <div className="bg_page">
      <Navbar className="nav_log">
        <h1 className="text_nav"> React </h1>

        <input type="search" id="form1" className="form-control search_size" />
        <button type="button" className="btn btn-primary Btn_size">
          <i className="fas fa-search">Search</i>
        </button>
        <button className="btn btn-dark"> Logout </button>

      </Navbar>
    </div>
  )
}

export default navbar
