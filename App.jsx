import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About from './About'
import Shop from './Shop'
import Cart from './Cart'
import Checkout from './Checkout'
import SingleProduct from './SingleProduct'
import Contact from './Contact'

import AdminHome from './Admin/AdminHome'

import AdminMaincategory from './Admin/Maincategory/AdminMaincategory'
import AdminAddMaincategory from './Admin/Maincategory/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/Maincategory/AdminUpdateMaincategory'

import AdminSubcategory from './Admin/Subcategory/AdminSubcategory'
import AdminAddSubcategory from './Admin/Subcategory/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrand from './Admin/Brand/AdminBrand'
import AdminAddBrand from './Admin/Brand/AdminAddBrand'
import AdminUpdateBrand from './Admin/Brand/AdminUpdateBrand'

import AdminProduct from './Admin/Product/AdminProduct'
import AdminAddProduct from './Admin/Product/AdminAddProduct'
import AdminUpdateProduct from './Admin/Product/AdminUpdateProduct'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Confirmation from './Confirmation'
import AdminNewslatter from './Admin/Newslatter/AdminNewslatter'
import AdminContact from './Admin/Contect/AdminContact'
import AdminSingleContact from './Admin/Contect/AdminSingleContact'
import AdminCheckout from './Admin/Checkout/AdminCheckout'
import AdminSingleCheckout from './Admin/Checkout/AdminSingleCheckout'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop/:mc/:sc/:br' element={<Shop />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={localStorage.getItem("login") ? <Profile /> : <Login />} />
          <Route path='/update-profile' element={localStorage.getItem("login") ? <UpdateProfile /> : <Login />} />
          <Route path='/cart' element={localStorage.getItem("login") ? <Cart /> : <Login />} />
          <Route path='/checkout' element={localStorage.getItem("login") ? <Checkout /> : <Login />} />
          <Route path='/confirmation' element={localStorage.getItem("login") ? <Confirmation /> : <Login />} />

          <Route path='/admin' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminHome /> : <Profile /> : <Login />} />
          <Route path='/admin-maincategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminMaincategory /> : <Profile /> : <Login />} />
          <Route path='/admin-add-maincategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminAddMaincategory /> : <Profile /> : <Login />} />
          <Route path='/admin-update-maincategory/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminUpdateMaincategory /> : <Profile /> : <Login />} />

          <Route path='/admin-subcategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminSubcategory /> : <Profile /> : <Login />} />
          <Route path='/admin-add-subcategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminAddSubcategory /> : <Profile /> : <Login />} />
          <Route path='/admin-update-subcategory/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminUpdateSubcategory /> : <Profile /> : <Login />} />

          <Route path='/admin-brand' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminBrand /> : <Profile /> : <Login />} />
          <Route path='/admin-add-brand' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminAddBrand /> : <Profile /> : <Login />} />
          <Route path='/admin-update-brand/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminUpdateBrand /> : <Profile /> : <Login />} />

          <Route path='/admin-product' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminProduct /> : <Profile /> : <Login />} />
          <Route path='/admin-add-product' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminAddProduct /> : <Profile /> : <Login />} />
          <Route path='/admin-update-product/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminUpdateProduct /> : <Profile /> : <Login />} />

          <Route path='/admin-newslatter' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminNewslatter /> : <Profile /> : <Login />} />

          <Route path='/admin-contact' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminContact /> : <Profile /> : <Login />} />
          <Route path='/admin-single-contact/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminSingleContact /> : <Profile /> : <Login />} />

          <Route path='/admin-checkout' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminCheckout /> : <Profile /> : <Login />} />
          <Route path='/admin-single-checkout/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminSingleCheckout /> : <Profile /> : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
