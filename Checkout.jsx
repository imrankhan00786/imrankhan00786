import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { createCheckout } from "../Store/ActionCreators/CheckoutActionCreators"
import { getCart, deleteCart } from "../Store/ActionCreators/CartActionCreators"
export default function Checkout() {
	var [user, setUser] = useState({
		pic: ""
	})
	var [cart, setCart] = useState([])
	var [subtotal, setSubTotal] = useState(0)
	var [shipping, setShipping] = useState(0)
	var [total, setTotal] = useState(0)
	var [mode, setMode] = useState("COD")

	var allCartStateData = useSelector((state) => state.CartStateData)

	var dispatch = useDispatch()
	var navigate = useNavigate()

	function placeOrder() {
		var date = new Date()
		var item = {
			userid: localStorage.getItem("userid"),
			paymentmode: mode,
			paymentstatus: "Pending",
			orderstatus: "Order is Placed",
			subtotal: subtotal,
			shipping: shipping,
			total: total,
			products: cart,
			date: date.toLocaleDateString()
		}
		dispatch(createCheckout(item))
		for (let item of cart) {
			dispatch(deleteCart({ id: item.id }))
		}
		navigate("/confirmation")
	}


	async function getAPIData() {
		var response = await fetch("/user", {
			method: "get",
			headers: {
				"content-type": "application/json"
			}
		})
		response = await response.json()
		var item = response.find((item) => item.username === localStorage.getItem("username"))
		if (item) {
			setUser(item)
		}
		else
			navigate("/login")

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
	useEffect(() => {
		getAPIData()
	}, [])
	return (
		<>
			{/* breadcrumb-section  */}
			<div className="breadcrumb-section breadcrumb-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="breadcrumb-text">
								<h5 className='text-light'>
									<Link to="/" className='text-light'>Home</Link><i className='fa fa-arrow-right mx-3'></i>
									Checkout
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end breadcrumb section  */}

			{/* check out section  */}
			<div className="checkout-section my-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="checkout-accordion-wrap">
								<div className="accordion" id="accordionExample">
									<div className="card single-accordion">
										<div className="card-header" id="headingOne">
											<h5 className="mb-0">
												<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													Billing Address
												</button>
												<table className='table table-bordered'>
													<tbody>
														<tr>
															<th>Name</th>
															<td>{user.name}</td>
														</tr>
														<tr>
															<th>User Name</th>
															<td>{user.username}</td>
														</tr>
														<tr>
															<th>Email</th>
															<td>{user.email}</td>
														</tr>
														<tr>
															<th>Phone</th>
															<td>{user.phone}</td>
														</tr>
														<tr>
															<th>Address</th>
															<td>{user.address}</td>
														</tr>
														<tr>
															<th>Pin</th>
															<td>{user.pin}</td>
														</tr>
														<tr>
															<th>City</th>
															<td>{user.city}</td>
														</tr>
														<tr>
															<th>State</th>
															<td>{user.state}</td>
														</tr>
														<tr>
															<td colSpan={2}><Link to="/update-profile" className='btn menu-bg text-light w-100'>Update Profile</Link></td>
														</tr>

													</tbody>
												</table>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="order-details-wrap">
								<table className="order-details table">
									<thead>
										<tr>
											<th colSpan={2} className='text-center'>Your order Details</th>
										</tr>
									</thead>
									<tbody className="order-details-body">
										<tr>
											<td>Product</td>
											<td>Total</td>
										</tr>
										{
											cart.map((item, index) => {
												return <tr key={index}>
													<td>{item.name}(&#8377;{item.price} X {item.qty})</td>
													<td>&#8377;{item.total}</td>
												</tr>
											})
										}
									</tbody>
									<tbody className="checkout-details">
										<tr>
											<td>Subtotal</td>
											<td>&#8377;{subtotal}</td>
										</tr>
										<tr>
											<td>Shipping</td>
											<td>&#8377;{shipping}</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>&#8377;{total}</td>
										</tr>
										<hr />
										<tr>
											<td colSpan={2}>
												<label>Payment Mode</label>
												<select name="mode" onChange={(e) => setMode(e.target.value)} className='form-control'>
													<option value="COD">COD</option>
													<option value="NetBanking">NetBanking/Card/UPI</option>
												</select>
											</td>
										</tr>
									</tbody>
								</table>
								<button className='btn menu-bg text-light w-100' onClick={placeOrder}>Place Order</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end check out section  */}
		</>
	)
}
