import style from "./header.module.css"
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import HeaderBar from "./headerBar/HeaderBar";
import { useState } from 'react';


const Header = () => {
  const [showSlideBar, setShowSlidebar] = useState(false);
  const toggleMenu = () => {
    setShowSlidebar(prevState => !prevState);
  }

  return (
    <div className={style.header}>
      <p className={style.header_left}><PiStudentFill className={style.header_left_icon}/>UnityTech</p>
        <nav className={style.header_navBar}>
      <NavLink className={style.header_navBar_link} to="/">Home <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
      <NavLink className={style.header_navBar_link} to="/about">About <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
      <NavLink className={style.header_navBar_link} to="/contact">Courses <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
      <NavLink className={style.header_navBar_link} to="/contact">Pages <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
      <NavLink className={style.header_navBar_link} to="/contact">Blog <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
      <NavLink className={style.header_navBar_link} to="/contact">Shop <MdKeyboardArrowDown className={style.header_navBar_link_icon}/></NavLink>
    </nav>
    <div className={style.header_right}>
      <div className={style.header_right_searchIcon_box}>
        <IoSearch className={style.header_right_searchIcon}/>
      </div>
      <button className={style.header_right_btn}><IoPerson className={style.header_right_btn_icon}/><p className={style.header_right_btn_text}>Login / Register</p></button>
      <FaBars className={style.header_right_barIcon} onClick={toggleMenu}/>
    <HeaderBar showSlideBar={showSlideBar} closeMenu={toggleMenu}/>
    </div>
    </div>
  )
}

export default Header
