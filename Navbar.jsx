import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  var navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      {/* <!--PreLoader--> */}
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>
      {/* <!--PreLoader Ends--> */}

      {/* <!-- header --> */}
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row fixed-top menu-bg">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* <!-- logo --> */}
                <div className="site-logo">
                  <Link to="/">
                    <p className='logo-title'><span className='logo-title-span'>Best</span> Deals</p>
                  </Link>
                </div>
                {/* <!-- logo --> */}

                {/* <!-- menu start --> */}
                <nav className="main-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shop/All/All/All">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    <li>
                      {
                        localStorage.getItem("login") ?
                          <div className="header-icons">
                            <ul>
                              <li><Link to={localStorage.getItem("role")==="Buyer"?"/profile":"/admin"}>{localStorage.getItem("name")}({localStorage.getItem("role")})</Link>
                                <ul className="sub-menu">
                                  <li>{localStorage.getItem("role")==="Buyer"?<Link to="/profile">Profile</Link>:<Link to="/admin">Profile</Link>}</li>
                                  {
                                    localStorage.getItem("role") === "Buyer" ? <>
                                      <li><Link to="/cart">Cart</Link></li>
                                      <li><Link to="/checkout">Check Out</Link></li></> :
                                      ""
                                  }
                                  <li><button className='btn' onClick={logout}>Logout</button></li>
                                </ul>
                              </li>
                            </ul>
                          </div> :
                          <li><Link to="/login">Login</Link></li>
                      }
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                <div className="mobile-menu"></div>
                {/* <!-- menu end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end header --> */}
      {/* <!-- search area --> */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">Search <i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end search area --> */}
    </>
  )
}
