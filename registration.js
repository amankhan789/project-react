import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import Validation from './validation';

const Registration = () => {

    const [userRegistration, setUserRegistration] = useState({
                                       
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        shop_name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        api_key: "",
        api_url: "",
        api_secret: "",
        api_password: ""
    });
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, [name]: value }); // setUserRegistration name and other value for change use  get for user all value

    }
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
     
        setErrors (Validation(userRegistration));

        Axios.post("https://5f3d-103-21-55-66.ngrok.io/api/users/register", userRegistration)
            .then((result) => {

                console.log(result);

            })

            .catch((error) => {
                console.log(error.response.data);
            })
                //alert(error.response.data.errors[0]['msg']);
            
    }



    return (

        <div className="Reg-bgimg">
            <form action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row row1">
                        <div className="col-md-4">
                            <h2> User Personal Information</h2>
                        </div>
                        <div className="col-md-7 bg-color p-5 reg">
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="First_name" >first_name</label>
                                    <input type="text" className="form-control" 

                                        value={userRegistration.first_name}
                                        onChange={handleInput}
                                        name="first_name"  placeholder="Firstname" />


                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="last_name" >Lastname</label>
                                    <input type="text" className="form-control" 
                                        value={userRegistration.last_name}
                                        onChange={handleInput}
                                        name="last_name" placeholder="lastname" />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Password" className="form_lable">Password</label>
                                    <input type="password" className="form-control" 
                                        value={userRegistration.password}
                                        onChange={handleInput}
                                        name="password" placeholder="password" />
                                    {errors.password  && <p className="error"> {errors.password}</p>}

                                </div>
                                <div className="col-md-6 abc mb-5">
                                    <label htmlFor="Phone" className="form_lable"> Phone</label>
                                    <input type="tel" className="form-control" 
                                        value={userRegistration.phone}
                                        onChange={handleInput}
                                        name="phone" placeholder="phone" />
                                </div>
                                <div className="col-md-12  mb-5">
                                    <label htmlFor="email" className="form_lable">Email</label>
                                    <input type="email" className="form-control" 
                                        value={userRegistration.email}
                                        onChange={handleInput}
                                        name="email" placeholder="Email" />
                                    {errors.email && <p className="error"> {errors.email}</p>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row2 mb-5">

                        <div className="col-md-4">
                            <h2> User Address Detail</h2>
                        </div>
                        <div className="col-md-7 bg-light p-5 reg">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <label htmlFor="Shop_name" className="form_lable">Shopname</label>
                                    <input type="text" className="form-control" 
                                        value={userRegistration.shop_name}
                                        onChange={handleInput}
                                        name="shop_name" placeholder="shop_name" />
                                    {errors.shop_name && <p className="error"> {errors.shop_name}</p>}

                                </div>
                                <div className="col-md-12 mb-5">
                                    <label htmlFor="address1" className="form_lable">Address1</label>
                                    <input type="text" className="form-control" 
                                        value={userRegistration.address1}
                                        onChange={handleInput}
                                        name="address1" placeholder="address1" />
                                </div>
                                <div className="col-md-12 mb-5">
                                    <label htmlFor="address2" className="form_lable">Address2</label>
                                    <input type="address2" className="form-control" 
                                        value={userRegistration.address2}
                                        onChange={handleInput}
                                        name="address2" placeholder="address2" />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="City" className="form_lable">City</label>
                                    <input type="text" className="form-control" id="city" 
                                        value={userRegistration.city}
                                        onChange={handleInput}
                                        name="city" placeholder="city" />
                                </div>

                                <div className="col-md-6 mb-5">
                                    <label htmlFor="zip" className="form_lable">Zip/Pincode</label>
                                    <input type="tel" className="form-control" 
                                        value={userRegistration.zip}
                                        onChange={handleInput}
                                        name="zip" placeholder="zip/pincode" />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="State" className="form_lable">State</label>
                                    <select id="state" className="form-control"
                                        value={userRegistration.state} 
                                        onChange={handleInput}
                                        name="state">
                                        <option selected>Madhya Pradesh</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Rajasthan</option>

                                    </select>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Country" className="form_lable">Country/region</label>
                                    <select id="country" className="form-control" 
                                        value={userRegistration.country}
                                        onChange={handleInput}
                                        name="country">
                                        <option selected>India</option>
                                        <option>New Zealand</option>
                                        <option>American</option>
                                        <option>Turki</option>
                                        <option>England</option>
                                        <option>East Timor (Timor-Leste)</option>
                                        <option>Ecuador</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Api_key" className="form_lable">Api_key</label>
                                    <input type="text" className="form-control" 
                                        value={userRegistration.api_key}
                                        onChange={handleInput}
                                        name="api_key" placeholder="apikey" />
                                    {errors.Api_key && <p className="error"> {errors.Api_key}</p>}

                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Api_url" className="form_lable">Apiurl</label>
                                    <input type="tel" className="form-control" 
                                        value={userRegistration.api_url}
                                        onChange={handleInput}
                                        name="api_url" placeholder="apiurl" />
                                    {errors.Api_url && <p className="error"> {errors.Api_url}</p>}

                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Api_secret" className="form_lable">Apisecret</label>
                                    <input type="tel" className="form-control" 
                                        value={userRegistration.api_secret}
                                        onChange={handleInput}
                                        name="api_secret" placeholder="Api_secret" />
                                    {errors.api_secret && <p className="error"> {errors.api_secret}</p>}

                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="Api_password" className="form_lable">Api password</label>
                                    <input type="tel" className="form-control" 
                                        value={userRegistration.api_password}
                                        onChange={handleInput}
                                        name="api_password" placeholder="api_password" />
                                    {errors.Api_password && <p className="error"> {errors.Api_password}</p>}


                                </div>
                                <div className="col-md-6 mb-5">
                                    <button type="submit" className="  btn btn-success">Submit</button>
                                </div>
                                <div className="col-md-6 mb-5 Link_pad">
                                    <Link to="/">Click here to go back to login page</Link>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </form>
        </div>



    );
}


export default Registration;