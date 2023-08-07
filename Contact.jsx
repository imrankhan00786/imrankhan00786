import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { createContact } from "../Store/ActionCreators/ContactActionCreators"
import { useDispatch } from 'react-redux'
export default function Contact() {
    var [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        status:"Active"
    })
    var dispatch = useDispatch()
    function getInputData(e) {
        var {name,value} = e.target
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var date = new Date()
        dispatch(createContact({...data,date:date.toLocaleDateString()}))
        alert("Thank to Share Your Query With Us!!! Our Team Will Contact You Soon!!!")
        setData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
    }
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h5 className='text-light'>
                                    <Link to="/" className='text-light'>Home</Link><i className='fa fa-arrow-right mx-3'></i>
                                    Contact
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- contact form --> */}
            <div className="contact-from-section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have any Query?</h2>
                            </div>
                            <div id="form_status"></div>
                            <div className="">
                                <form onSubmit={postData}>
                                    <p>
                                        <input type="text" required placeholder="Name" onChange={getInputData} name="name" id="name" className='form-control mb-3' value={data.name} />
                                        <input type="email" required placeholder="Email" onChange={getInputData} name="email" id="email" className='form-control mb-3' value={data.email} />
                                    </p>
                                    <p>
                                        <input type="tel" required placeholder="Phone" onChange={getInputData} name="phone" id="phone" className='form-control mb-3' value={data.phone} />
                                        <input type="text" required placeholder="Subject" onChange={getInputData} name="subject" id="subject" className='form-control mb-3' value={data.subject} />
                                    </p>
                                    <p><textarea name="message" id="message" className='form-control mb-3' onChange={getInputData} rows="5" required placeholder="Message" value={data.message}></textarea></p>
                                    <div className='mb-3'>
                                        <button type="submit" className='btn menu-bg text-light w-100 btn-sm'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-map"></i> Shop Address</h4>
                                    <p>A-43 <br /> Sector 16, Noida <br /> UP, India</p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="far fa-clock"></i> Shop Hours</h4>
                                    <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-address-book"></i> Contact</h4>
                                    <p><i className='fa fa-phone'></i> :  <a href="tel:9873848046">9873848046</a> <br /> <i className='fa fa-envelope'></i> : <a href="mailto:vishankchauhan@gmail.com">vishankchauhan@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end contact form --> */}

            {/* <!-- find our location --> */}
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end find our location --> */}

            {/* <!-- google map section --> */}
            <div className="embed-responsive embed-responsive-21by9">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20noida%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
            </div>
            {/* <!-- end google map section --></div> */}
        </>
    )
}
