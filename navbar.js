import React, { useState, useEffect } from 'react'


import Sidebar from './sidebar'
import { Link, NavLink } from "react-router-dom";
import Reactlogo from '../assets/reactlogo.png';

const Navbar = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        
        // return new Promise((resolve,reject) => {
        // const result =  fetch('https://data.covid19india.org/data.json');
        
        //     if(result){
        //         const actualdata =  result.json();
                
        //         return resolve(setData(actualdata.statewise));
        //     }else{
        //         return reject({status : 'failed',message : 'Data not found'});
        //     }
        // })

        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            setData(actualdata.statewise);
            console.log(actualdata)
        } catch (err) {
            console.log(err)
        }
    }




    useEffect(() => {
        getCovidData()
    }, [])

    const [staus, setStatus] = useState(true)

    return (
        <>


            <nav class="nav_login">
                <img class="nav_log img-fluid" src={Reactlogo} />

                <Link to="/" className="Btn">Logout</Link>

            </nav>

            <section>
                <div className="container-fluid ps-0">
                    <div className="row">
                        <div className="col-md-2">
                            {
                                staus ? <Sidebar /> : null
                            }
                            <div className="Toggle-sidebar">
                                <button className="toggle_btn" onClick={() => setStatus(!staus)}> </button>
                                <span class="glyphicon-class"></span>
                            </div>
                        </div>

                        <div className="col-md-10 flex_box">

                            {
                                data.map(value => {
                                    return (
                                        <>
                                            <div className="flexbox_container ">
                                                <div className="flexbox_item">
                                                    Confirmed:
                                                    <p className="card_data">{value.confirmed} </p>
                                                </div>
                                                <div className="flexbox_item">
                                                    Active:
                                                    <p className="card_data">{value.active} </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })

                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navbar
