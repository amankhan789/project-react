import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "./sidebar";
import Navhome from "./navhome";

const Checkout = () => {


    const [usercheckout, setusercheckout] = useState({

        banner_background_image_url: "",
        logo_image_url: "",
        logo_position: "",
        logo_size: "",
        background_image: "",
        background_color: "",
        form_fields_color: "",
        order_summary_background_image: "",
        order_summary_background_color: "",
        typography_heading: "",
        typography_body: "",
        api_colors_accentskey: "",
        colors_buttons: "",
        colors_errors: ""

    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setusercheckout({ ...usercheckout, [name]: value });
    };

    // useEffect(() => {
    //     Axios.get(` `, usercheckout)
    //         .then((result) => {
    //             console.log(result);
    //         }, [])

    // });

    const handleSubmit = (e) => {
        e.preventDefault();
    console.log(usercheckout);

        Axios.post(`https://a6b6-115-166-143-82.ngrok.io/checkout/backend/visual_settings `, usercheckout)
            .then((result) => {
                console.log(result);


            })

    }


    return (
        <>
          <Navhome/>
<section className="bg_light">
        <form action="" onSubmit={handleSubmit} >
            <div className="container bg_light">
                <div className="row row1">
                    <div className="col-md-4">
                        <h2> User checkout </h2>
                    </div>
                 <div className="col-md-8 bg-color p-5">
                        <div className="row mt-3 Border_form">
                            <div className="col-md-6 mb-5">
                                <label htmlFor="banner_background_image_url">banner_background_image_url</label>
                                <input type="text" className="form-control"

                                    value={usercheckout.banner_background_image_url}
                                    onChange={handleInput}
                                    name="banner_background_image_url" autoComplete="off" placeholder="banner_background_image_url" />

                            </div>
                            <div className="col-md-6  ">
                                <label htmlFor="logo_image_url">logo_image_url</label>
                                <input type="text" className="form-control"
                                    value={usercheckout.logo_image_url}
                                    onChange={handleInput}
                                    name="logo_image_url" placeholder="logo_image_url" />
                            </div>
                            <div className="col-md-6 Padd">
                                <label htmlFor="logo_position">logo_position</label>
                                <input type="text" className="form-control"
                                    value={usercheckout.logo_position}
                                    onChange={handleInput}
                                    name="logo_position" placeholder="logo_position" />
                                <span id="logo_position" > </span>
                            </div>
                            <div className="col-md-6 Padd">
                                <label htmlFor="logo_size">logo_size</label>
                                <input type="text" className="form-control"
                                    value={usercheckout.logo_size}
                                    onChange={handleInput}
                                    name="logo_size" placeholder="logo_size" />
                            </div>


                        </div>
                    
                     <div className="row mt-3 Border_form">
                    <div className="col-md-6">
                        <label htmlFor="background_image">background_image</label>
                        <input type="text" className="form-control"
                            value={usercheckout.background_image}
                            onChange={handleInput}
                            name="background_image" placeholder="background_image" />

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="background_color">background_color</label>
                        <input type="text" className="form-control"
                            value={usercheckout.background_color}
                            onChange={handleInput}
                            name="background_color" placeholder="background_color" />
                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="form_fields_color"> form_fields_color</label>
                        <input type="form_fields_color" className="form-control"
                            value={usercheckout.form_fields_color}
                            onChange={handleInput}
                            name="form_fields_color" placeholder="form_fields_color" />
                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="order_summary_background_image">order_summary_background_image</label>
                        <input type="text" className="form-control" id="order_summary_background_image"
                            value={usercheckout.order_summary_background_image}
                            onChange={handleInput}
                            name="order_summary_background_image" placeholder="order_summary_background_image" />
                    </div>

                    <div className="col-md-6 Padd">
                        <label htmlFor="order_summary_background_color">order_summary_background_color</label>
                        <input type="tel" className="form-control"
                            value={usercheckout.order_summary_background_color}
                            onChange={handleInput}
                            name="order_summary_background_color" placeholder="order_summary_background_color" />
                    </div>

                    <div className="col-md-6 Padd">
                        <label htmlFor="typography_heading">typography_heading</label>
                        <input type="text" className="form-control"
                            value={usercheckout.typography_heading}
                            onChange={handleInput}
                            name="typography_heading" placeholder="typography_heading" />

                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="typography_body">typography_body</label>
                        <input type="tel" className="form-control"
                            value={usercheckout.typography_body}
                            onChange={handleInput}
                            name="typography_body" placeholder="typography_body" />

                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="api_colors_accentskey">api_colors_accentskey</label>
                        <input type="text" className="form-control"
                            value={usercheckout.api_colors_accentskey}
                            onChange={handleInput}
                            name="api_colors_accentskey" placeholder="api_colors_accentskey" />

                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="colors_buttons">colors_buttons</label>
                        <input type="tel" className="form-control"
                            value={usercheckout.colors_buttons}
                            onChange={handleInput}
                            name="colors_buttons" placeholder="colors_buttons" />

                    </div>
                    <div className="col-md-6 Padd">
                        <label htmlFor="colors_errors">colors_errors</label>
                        <input type="text" className="form-control"
                            value={usercheckout.colors_errors}
                            onChange={handleInput}
                            name="colors_errors" placeholder="colors_errors" />

                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="  btn btn-success">checkout</button>
                    </div>
                </div>
                </div>
                </div>

            </div>



        </form>
      
        <Sidebar/>
       

        </section>
        </>
    );
}


export default Checkout;