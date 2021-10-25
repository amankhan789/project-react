import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Navhome from "./navhome";
const Update = () => {
    const { id } = useParams();

    const [userUpdate, setuserUpdate] = useState({

        first_name: "",
        last_name: "",
        email: "",
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

        setuserUpdate({ ...userUpdate, [name]: value });
    };

    useEffect(() => {
        Axios.get(`"https://a6b6-115-166-143-82.ngrok.io/api/users/update" ${id}`, userUpdate)
            .then((result) => {
                console.log(result);
            }, [])

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.put(`"https://a6b6-115-166-143-82.ngrok.io/api/users/update" ${id}`, userUpdate)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error.response.data);
                   alert(error.response.data.msg);

            })

    }


    return (
        <>
            <Navhome />
            <section className="bg_color">
                <div class="container">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <h2 className="textw"> User Update personal detail</h2>

                            </div>
                            <div className="col-md-8 bg-color p-5 bg_whit">
                                <div className="row Border_form">
                                    <div className="col-md-12 mb-5">
                                        <label htmlFor="First_name">first_name</label>
                                        <input type="text" className="form-control"

                                            value={userUpdate.first_name}
                                            onChange={handleInput}
                                        name="first_name" autoComplete="off" placeholder="Firstname" />
                                    </div>
                                <div className="col-md-12  ">
                                        <label htmlFor="last_name">Last_name</label>
                                        <input type="text" className="form-control"
                                            value={userUpdate.last_name}
                                            onChange={handleInput}
                                            name="last_name" placeholder="lastname" />
                                    </div>
                                    <div className="col-md-12 abc">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control"
                                            value={userUpdate.email}
                                            onChange={handleInput}
                                            name="email" placeholder="Email" />
                                        <span id="email" > </span>
                                    </div>
                                   <div className="col-md-12 abc">
                                        <label htmlFor="Phone">Phone</label>
                                        <input type="tel" className="form-control"
                                            value={userUpdate.phone}
                                            onChange={handleInput}
                                            name="phone" placeholder="phone" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row row2 mb-5">

                            <div className="col-md-4">
                                <h2 className="text_add"> update Address Detail</h2>
                            </div>
                            <div className="col-md-8 bg-light p-5  bg_whit">
                                <div className="row Border_form">
                                    <div className="col-md-12">
                                        <label htmlFor="Shop_name">Shopname</label>
                                        <input type="text" className="form-control"
                                            value={userUpdate.shop_name}
                                            onChange={handleInput}
                                            name="shop_name" placeholder="shop_name" />
                                        <span id="shop_name">   </span>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="address1">Address1</label>
                                        <input type="text" className="form-control"
                                            value={userUpdate.address1}
                                            onChange={handleInput}
                                            name="address1" placeholder="address1" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="address2">Address2</label>
                                        <input type="address2" className="form-control"
                                            value={userUpdate.address2}
                                            onChange={handleInput}
                                            name="address2" placeholder="address2" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="City">City</label>
                                        <input type="text" className="form-control" id="city"
                                            value={userUpdate.city}
                                            onChange={handleInput}
                                            name="city" placeholder="city" />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="zip">Zip/Pincode</label>
                                        <input type="tel" className="form-control"
                                            value={userUpdate.zip}
                                            onChange={handleInput}
                                            name="zip" placeholder="zip/pincode" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="State">State</label>
                                        <select id="state" className="form-control"
                                            value={userUpdate.state}
                                            onChange={handleInput}
                                            name="state">
                                            <option selected>Madhya Pradesh</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Rajasthan</option>

                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Country">Country/region</label>
                                        <select id="country" className="form-control"
                                            value={userUpdate.country}
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
                                    <div className="col-md-6">
                                        <label htmlFor="Api_key">Api_key</label>
                                        <input type="text" className="form-control"
                                            value={userUpdate.api_key}
                                            onChange={handleInput}
                                            name="api_key" placeholder="apikey" />
                                        <span id="api_key"> </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Api_url">Apiurl</label>
                                        <input type="tel" className="form-control"
                                            value={userUpdate.api_url}
                                            onChange={handleInput}
                                            name="api_url" placeholder="apiurl" />
                                        <span id="api_url"> </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Api_secret">Apisecret</label>
                                        <input type="tel" className="form-control"
                                            value={userUpdate.api_secret}
                                            onChange={handleInput}
                                            name="api_secret" placeholder="Api_secret" />
                                        <span id="api_secret"></span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Api_password">Api password</label>
                                        <input type="tel" className="form-control"
                                            value={userUpdate.api_password}
                                            onChange={handleInput}
                                            name="api_password" placeholder="api_password" />
                                        <span id="api_password">  </span>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit" className="  btn btn-success">update</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </section>


            <Sidebar />


        </>
    );
}






export default Update;