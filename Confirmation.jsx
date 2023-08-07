import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
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
									Order Confirmation
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end breadcrumb section  */}

            <div className="container-fluid my-5 text-center">
                <h3 className='text-success'>Thank You!!!</h3>
                <h4>Your Order Has Been Placed!!!</h4>
                <h4>Now You Can Track Your Order in Profile Section</h4>
            </div>
    </>
  )
}
