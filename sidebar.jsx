import React from 'react';
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const sidebar = () => {
    return (

        <div className="bg_side">
            <ul className="bg_side">
                <li>
                    <Router>
                        <Link to="/Covid">Covid</Link>
                    </Router>
                </li>
                <li>
                    <Router>
                        <Link to="/Allrouting">home</Link>
                    </Router>
                </li>
                <li>Covid</li>
            </ul>


        </div>
    )
}

export default sidebar
