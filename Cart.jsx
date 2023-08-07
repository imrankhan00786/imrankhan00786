import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCart, deleteCart, updateCart } from "../Store/ActionCreators/CartActionCreators"
export default function Cart() {
    var [cart, setCart] = useState([])
    var [subtotal, setSubTotal] = useState(0)
    var [shipping, setShipping] = useState(0)
    var [total, setTotal] = useState(0)

    var allCartStateData = useSelector((state) => state.CartStateData)

    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getCart())
        if (allCartStateData.length) {
            var items = allCartStateData.filter((x) => x.userid === localStorage.getItem("userid"))
            setCart(items)
            let subtotal = 0
            let shipping = 0
            let total = 0
            for (let item of items) {
                subtotal = subtotal + item.total
            }
            if (subtotal > 0 && subtotal <= 1000)
                shipping = 150

            total = subtotal + shipping
            setSubTotal(subtotal)
            setShipping(shipping)
            setTotal(total)
        }
    }
    function updateRecord(id, task) {
        var item = cart.find((x) => x.id === id)
        if (task === "DEC" && item.qty == 1)
            return
        else if (task === "DEC") {
            item.qty = item.qty - 1
            item.total = item.total - item.price
        }
        else {
            item.qty = item.qty + 1
            item.total = item.total + item.price
        }
        dispatch(updateCart({ ...item }))
        getAPIData()
    }
    function deleteRecord(id) {
        dispatch(deleteCart({ id: id }))
        getAPIData()
    }
    useEffect(() => {
        getAPIData()
    }, [allCartStateData.length])
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
                                    Cart
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {
                cart.length ?
                    <>
                        {/* <!-- cart --> */}
                        <div className="cart-section my-3">
                            <div className="container">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-image"></th>
                                                <th className="product-name">Name</th>
                                                <th className="product-name">Brand/Color/Size</th>
                                                <th className="product-price">Price</th>
                                                <td></td>
                                                <th className="product-quantity">Quantity</th>
                                                <td></td>
                                                <th className="product-total">Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((item, index) => {
                                                    return <tr key={index} className="table-body-row">
                                                        <td className="product-image"><a href={`assets/images/${item.pic}`} rel="noreferrer" target='_blank'>
                                                            <img src={`assets/images/${item.pic}`} height="50px" width="50px" alt="" />
                                                        </a></td>
                                                        <td className="product-name">{item.name}</td>
                                                        <td className="product-name">{item.brand}/{item.color}/{item.size}</td>
                                                        <td className="product-price">&#8377;{item.price}</td>
                                                        <td className="product-quantity"><button className='btn' onClick={() => updateRecord(item.id, "DEC")}><i className='fa fa-minus'></i></button></td>
                                                        <td className="product-total">{item.qty}</td>
                                                        <td className="product-quantity"><button className='btn' onClick={() => updateRecord(item.id, "INC")}><i className='fa fa-plus'></i></button></td>
                                                        <td className="product-total">&#8377;{item.total}</td>
                                                        <td className="product-quantity"><button className='btn' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                                                    </tr>
                                                })
                                            }

                                        </tbody>
                                    </table>


                                    <div className="row my-3">
                                        <div className="col-md-8"></div>
                                        <div className="col-lg-4">
                                            <div className="total-section">
                                                <table className="total-table">
                                                    <thead className="total-table-head">
                                                        <tr className="table-total-row">
                                                            <th colSpan={2} className='text-center'>Total</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="total-data">
                                                            <td><strong>Subtotal: </strong></td>
                                                            <td>&#8377;{subtotal}</td>
                                                        </tr>
                                                        <tr className="total-data">
                                                            <td><strong>Shipping: </strong></td>
                                                            <td>&#8377;{shipping}</td>
                                                        </tr>
                                                        <tr className="total-data">
                                                            <td><strong>Total: </strong></td>
                                                            <td>&#8377;{total}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="cart-buttons">
                                                    <Link to="/checkout" className="btn menu-bg text-light black w-100">Check Out</Link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end cart --> */}
                    </> :
                    <div className="my-5 text-center">
                        <p>No Items in Cart</p>
                        <Link to="/shop/All/All/All" className='btn btn-primary'>Shop Now</Link>
                    </div>
            }
        </>
    )
}
