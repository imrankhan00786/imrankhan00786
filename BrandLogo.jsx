import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBrand } from "../Store/ActionCreators/BrandActionCreators"
export default function BrandLogo() {
    let [brands, setBrands] = useState([])
    let dispatch = useDispatch()
    let allBrandStateData = useSelector(state => state.BrandStateData)
    function getAPIData() {
        dispatch(getBrand())
        if (allBrandStateData.length) {
            setBrands(allBrandStateData.slice(1).reverse())
        }
    }
    useEffect(() => {
        getAPIData()
    }, [allBrandStateData.length])
    return (
        <>
            {/* <!-- logo carousel --> */}
            <div className="logo-carousel-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <OwlCarousel className='owl-theme' loop margin={1} items={4} nav>
                                {
                                    brands.map((item, index) => {
                                        return <div key={index} className="single-logo-item">
                                            <Link to={`/shop/All/All/${item.name}`} style={{textDecoration:"none",color:"black",fontSize:"40px",fontFamily:"Algerian"}}>
                                                <img src={`/assets/brands/${item.pic}`} height="100px" width="100px" alt="" />
                                            </Link>
                                        </div>
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end logo carousel --> */}
        </>
    )
}
