import style from "./headerBar.module.scss";
import { PiStudentFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import React from "react";

interface HeaderBarProps {
  showSlideBar:boolean
  closeMenu: () => void;
}

const HeaderBar:React.FC <HeaderBarProps>= ({ showSlideBar,closeMenu }) => {
  return (
    <div className={`${style.headerBar} ${showSlideBar ? "" : style.headerBar_displayNone}`}>
      <div className={style.headerBar_head}>
        <p className={style.headerBar_left}>
          <PiStudentFill className={style.headerBar_left_icon} />
          UnityTech
        </p>
        <IoMdClose className={style.headerBar_head_closeIcon} onClick={closeMenu} />
      </div>
      <div className={style.headerBar_main}>
        <div className={style.headerBar_main_text}>Home <FaPlus className={style.headerBar_main_text_icon} /></div>
        <div className={style.headerBar_main_text}>About <FaPlus className={style.headerBar_main_text_icon} /></div>
        <div className={style.headerBar_main_text}>Courses <FaPlus className={style.headerBar_main_text_icon} /></div>
        <div className={style.headerBar_main_text}>Pages <FaPlus className={style.headerBar_main_text_icon} /></div>
        <div className={style.headerBar_main_text}>Blog <FaPlus className={style.headerBar_main_text_icon} /></div>
        <div className={style.headerBar_main_text}>Shop <FaPlus className={style.headerBar_main_text_icon} /></div>
      </div>
    </div>
  );
}

export default HeaderBar;
