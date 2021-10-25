
import React, { useState } from 'react';
import Axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./sidebar";
import Navhome from "./navhome";

function Addstrip() {
    const [useraddstrip, setUseraddstrip] = useState({
        publishable_key: "",
        secret_key: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUseraddstrip({ ...useraddstrip, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(" ", useraddstrip).then((result) => {
            console.log(result)

        })

    }



    return (
      <>
        <Navhome/>
        <div className="back_strip">
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                        <h2>Addstrip</h2>
                    </div>
                <div className="col-lg-12" add_strip>
                    <form action="" onSubmit={handleSubmit} className="form_addstrip">
                        <div className="mb-3">
                            <label htmlFor="publishable_key" className="form-label">publishable_key address</label>
                            <input type="publishable_key" className="form-control" id="publishable_key" name="publishable_key" required="required"

                                value={useraddstrip.publishable_key} onChange={handleInput}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="secret_key" className="form-label">secret_key</label>
                            <input type="secret_key" className="form-control" name="secret_key" required="required"
                                value={useraddstrip.secret_key}
                                onChange={handleInput}
                            />
                        </div>

                        <button type="submit" className="btn btn-success  Btn_addstrip">addstrip</button>

                        
                    </form>
                </div>
            </div>
        </div>
  <div> 
 
      <Sidebar/>
    
  </div>
        </div>

</>


    )
}

export default Addstrip;