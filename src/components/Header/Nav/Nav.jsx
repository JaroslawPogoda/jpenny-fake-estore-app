import React from "react";
import {SiGnuprivacyguard } from 'react-icons/si'
import { NavLink } from "react-router-dom";
import {MdOutlineLogin,MdOutlineHome,MdOutlineProductionQuantityLimits} from 'react-icons/md'
import styled from 'styled-components'
import './Nav.css'
const Login = styled(MdOutlineLogin)`
height:50px;
width:50px;
`
//creating constant variable
//creating active animation
// function activeLink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
// list.forEach((item) => item.addEventListener("click", activeLink));
// window.addEventListener("scroll", () => {
//   let navContainer = document.querySelector("header");
//   navContainer.classList.toggle("scrolling-active", window.scrollY > 1);
// });

export default function Nav(props) {
  
  return (
    <nav id="nav" className="navigation" role="navigation">
      <ul>
        <NavLink to="./"  className="navLink">
          <li className="list" activeClassName="active">
            <span className="icon-bar">
              <MdOutlineHome/>
            </span>
            <span className="text">Home</span>
          </li>
        </NavLink>
        <NavLink to="products" activeClassName="active" >
          <li className="list">
            <span className="icon-bar">
              <MdOutlineProductionQuantityLimits/>
            </span>
            <span className="text">Home</span>
          </li>
        </NavLink>
        <NavLink to="register" activeClassName="active">
          <li className="list">
            <span className="icon-bar">
              <SiGnuprivacyguard />
              </span>
            <span className="text">register</span>
          </li>
        </NavLink>
        <NavLink to="login" activeClassName="active">
          <li className="list">
          <span className="icon-bar">
            <Login/>
          </span>
            <span className="text">login</span>
          </li>
        </NavLink>
        <div className="indicator"></div>
      </ul>
    </nav>
  );
}
