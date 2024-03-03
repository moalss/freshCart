import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/freshcart-logo.svg'
export default function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
          <div className="container ">
          <Link className="nav-link " to='home' > <img src={logo} alt='cart logo'></img></Link>
          
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link " to='home' >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="brands">Brands</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="categories">Categories</Link>
                    </li>
                </ul>

                <ul className="navbar-nav  ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to=""><i className='fa-brands fa-instagram '></i></Link>
                
            </li>
            <li className="nav-item">
            <Link className="nav-link" to=""><i className='fa-brands fa-youtube'></i></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to=""><i className='fa-brands fa-facebook '></i></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to=""><i className='fa-brands fa-linkedin '></i></Link>
            </li>
                <li className="nav-item">
                        <Link className="nav-link" to="">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="register">Register</Link>
                    </li>
                   
                   
                </ul>
            </div>
        </div>
      </nav>
      
    
  )
}
