import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    let [data, setData] = useState({})
    var navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getInputFile(e) {
        var { name, files } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        let response = await fetch("/user/"+localStorage.getItem("userid"), {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...data})
        })
        response = await response.json()
        if(data.role==="Admin")
        navigate("/admin")
        else
        navigate("/profile")
    }
    async function getApiData() {
        var response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setData(response)
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h5 className='text-light'>
                                    <Link to="/" className='text-light'>Home</Link><i className='fa fa-arrow-right mx-3'></i>{localStorage.getItem("role") === "Admin" ? <Link className='text-light' to="/admin">Profile</Link> : <Link className='text-light' to="/profile">Profile</Link>}<i className='fa fa-arrow-right mx-3'></i>Update
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-warning'>Update</span> Profile</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <label>Name</label>
                                <input type="text" onChange={getInputData} name="name" placeholder='Name : ' className='form-control' value={data.name} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label>Pic</label>
                                <input type="file" onChange={getInputFile} name="pic" className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <label>Email</label>
                                <input type="email" onChange={getInputData} name="email" placeholder='Email : ' className='form-control' value={data.email} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label>Phone</label>
                                <input type="text" onChange={getInputData} name="phone" placeholder='Phone : ' className='form-control' value={data.phone} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <label>Address</label>
                                <textarea name="address" rows="8" className='form-control' onChange={getInputData} placeholder='Address...' value={data.address}></textarea>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <label>Pin</label>
                                        <input type="text" name="pin" onChange={getInputData} placeholder='PIN Code' className='form-control' value={data.pin} />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label>City</label>
                                        <input type="text" onChange={getInputData} name="city" placeholder='City : ' className='form-control' value={data.city} />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label>State</label>
                                        <input type="text" onChange={getInputData} name="state" placeholder='State : ' className='form-control' value={data.state} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
