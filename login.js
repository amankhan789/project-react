
import React, { useState } from 'react';
import Axios from "axios";
import { Link, NavLink, useHistory } from "react-router-dom";
import Validation_login from "./validation_login"

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });

  }
  let history = useHistory();

  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(Validation_login(userLogin))

    Axios.post("https://5f3d-103-21-55-66.ngrok.io/api/users/login", userLogin)
      .then((result) => {
      console.log(result);

      })

      // .catch((error) => {
      //   console.log(error);
          
      //  })
    //history.push("/home");

  }

  return (
    <>
      <div className="log_img">
        <div className="container bg-img">
          <div className="row">
            <div className="col-lg-12 form_lg ">
              <form action="" onSubmit={handleSubmit} className="form_login">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email"  
                    value={userLogin.email} onChange={handleInput}
                  />
                  {errors.email && <p className="error"> {errors.email}</p>}

                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" 
                    value={userLogin.password}
                    onChange={handleInput}
                  />
                  {errors.password  && <p className="error"> {errors.password}</p>}
               
                </div>
                <div className="butn">
                  <button type="submit" className="btn btn-primary btn_Log">Login</button>
                  <Link to="/Registration" className="btn btn-success btn_Reg">registration</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Login;