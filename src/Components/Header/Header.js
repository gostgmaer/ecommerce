import React from "react";
import {
  FaCartPlus,
  FaDashcube,
  FaHome,
  FaProductHunt,
  FaReact,
  FaUserAlt,
  FaUser,
  FaUsers,
  FaUserCircle,
  FaArrowDown,
  FaSearch,
  FaViber,
} from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { MdFavorite,MdOutlineArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { NavURL } from "./Data";
import NavItem from "./NavItem";
import "./headers.scss";
import UserIconData from "./UserIconData";
import { BsArrow90DegDown, BsArrowBarUp, BsCart } from "react-icons/bs";



const Header = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <GiUsaFlag /> <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
          </div>
          <div className="item">
            <span>USD</span> <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
          </div>
          <div className="item">
            <Link className='link' to={`products/1`}>Men</Link>
          </div>
          <div className="item">
            <Link  className='link' to={`products/2`}>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to={`products/3`}>Children</Link>
          </div>
          <div className="item">
            <Link className='link' to={`products/4`}>Assessories</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={``}>GOST STORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to={``}>Home</Link>
          </div>
          <div className="item">
            <Link className='link' to={`/about`}>About</Link>
          </div>
          <div className="item">
            <Link className='link' to={`/contact`}>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to={`/stores`}>Stores</Link>
          </div>
          <div className="icons">
            <Link to={`/contact`}>
              <FaSearch className="icon-class"></FaSearch>
            </Link>
            <Link to={`/contact`}>
              <FaUser className="icon-class"></FaUser>
            </Link>
            <Link to={`/contact`}>
              <MdFavorite className="icon-class"></MdFavorite>
            </Link>
            <div className="cart-icon">
              <BsCart cla></BsCart>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
