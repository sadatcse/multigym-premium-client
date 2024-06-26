import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {



  const user = false;

  const menu  = (
    <>
      <NavLink className="menu-link " activeClassName="active" to="/">Home</NavLink>
      <NavLink className="menu-link " activeClassName="active" to="/aboutus/about">About us</NavLink>
      <NavLink className="menu-link" activeClassName="active" to="/service">Service</NavLink>
      <NavLink className="menu-link" activeClassName="active" to="/trainers">Trainer</NavLink>
      <NavLink className="menu-link" activeClassName="active" to="/explore/leg">Explore</NavLink>
      <NavLink className="menu-link" activeClassName="active" to="/contactus">Contact Us</NavLink>



    </>
  );

  const avatar = (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:rounded-lg hover:bg-transparent avatar">
          <div className="w-10 rounded-lg">
            <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );

  const buttons = (
    <div>
      <button className="btn px-6 font-medium text-white bg-red-600 rounded-md border hover:text-red-600 hover:bg-transparent hover:border-red-600 poppins">Sign Up</button>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-custom-black px-0 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box w-52">
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl z-50"><img className='h-24 w-26' src={Logo}></img></a>
        </div>
        <div className="flex navbar-end w-full justify-end ">
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 space-x-6 font-medium text-sm flex mr-3 items-center poppins">
              {menu}
            </ul>
          </div>
          {user ? avatar : buttons}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
