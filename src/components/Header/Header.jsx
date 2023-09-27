
// import PropTypes from 'prop-types';
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'

import { NavLink } from "react-router-dom";
const navLi = <>
  <li><NavLink to='/' className="font-semibold">Home</NavLink></li>
  <li><NavLink to="/donation" className="font-semibold">Donation</NavLink></li>
  <li><NavLink to="statistics" className="font-semibold">Statistics</NavLink></li></>

const Header = () => {
  return (

    <div className="flex justify-between bg-base-100 mx-5 md:mx-36 mt-5 mb-5">
      <div className="">
        <img className="w-36" src="https://i.ibb.co/fCqghP6/Logo.png" alt="logo" />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-bottom dropdown-end flex md:hidden lg:hidden">
          <label tabIndex={0} className="m-1"><AiOutlineMenu></AiOutlineMenu></label>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLi}
          </ul>
        </div>
        <ul className="hidden md:flex lg:flex justify-around gap-5  px-1">
          {
            navLi
          }
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {

};

export default Header;