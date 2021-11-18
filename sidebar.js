import React from 'react'
import { Link, NavLink } from "react-router-dom";
//import { IconName } from "react-icons/";


const Sidebar = () => {
    return (
        <div className="sidenav" id="mySidebar">
            <div className="side_input">
                <ul>
                    <li>
                        <Link to="/home"> <i class="fa fa-folder">        </i>Home</Link>
                    </li>
                    <li>
                        <Link to="/home"> <i class="fa fa-folder">        </i>Home</Link>
                    </li>
                    <li>
                        <Link to="/home"> <i class="fa fa-folder">        </i>Home</Link>
                    </li>
                    <li>
                        <Link to="/home"> <i class="fa fa-folder">        </i>Home</Link>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Sidebar
