import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    // const state = useSelector((state)=>state.cartReducerhandle)
    const cart = useSelector((state) => state.cart.cart|| []);
    return (
        <>

            <div>
                <nav class="navbar navbar-expand-lg bg-secondary px-4 ">
                    <div class="container-fluid">
                        <a class="navbar-brand text-light" href="#">E-commerce</a>
                    </div>

                    <div class="collapse navbar-collapse w-100  justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link class="nav-link  text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About</a>
                            </li>
                            <li class="nav-item listt">
                                <a class="nav-link text-light" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                        <button class="nav-item btn btn-success" type="button" style={{ marginTop: "6px", width: "18%" }}>
                        <Link class="nav-link  text-light" aria-current="page" to="/login">LogIn</Link>
                        </button>
                        <a class="btn btn-outline-secondary ml-2 mt-2 text-white" href="#">
                            <i class="fa-solid fa-cart-shopping"></i>Cart ({cart ? cart.length : 0})</a>



                    </div>
                </nav>
            </div>
            {/* <HomePage/> */}
        </>
    )
}

export default Navbar;
