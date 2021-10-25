import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconName } from "react-icons/";


const Sidebar = () => {
  return (
    <div class="sidenav">
      <div className="side_input">
      <Link to="/home"> <i class="fa fa-folder">        </i>Home</Link>
      <Link to="/home"> <i class="fa fa-folder">      </i>Shipping</Link>
      <Link to="/home"> <i class="fa fa-folder">      </i>Order</Link>
      <Link to="/Update/:id"><i class="fa fa-folder"> </i>Update profile</Link>
      <Link to="/Addstrip"><i class="fa fa-folder">   </i>Add payment method</Link>
      <Link to="/Checkout"><i class="fa fa-folder">   </i>Setting</Link>
      </div>
      <div>

      </div>

    </div>
  );
};

export default Sidebar;

