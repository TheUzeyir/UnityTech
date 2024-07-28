import { FaArrowRight } from "react-icons/fa";
import img from "../../imaige/mainPageImg/mainPageHeadImg.png"
import img1 from "../../imaige/mainPageImg/mainPageHeadImg1.png"
import img2 from "../../imaige/mainPageImg/mainPageHeadImg2.webp"
import style from "./mainPageHead.module.scss"
import { LuNewspaper } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";

const MainPageHead = () => {
  return  (
    <div className={style.mainPageAboutUs}>
      <div className={style.mainPageAboutUs_left}>
        <div className="container">
          <p className={style.mainPageAboutUs_left_title}>EXCELLENCE IN EDUCATION</p>
          <p className={style.mainPageAboutUs_left_mainText}>Start Better Learning Future From Here </p>
          <p className={style.mainPageAboutUs_left_desc}>Empower yourself with the knowledge and skills gained through online education! The key to your future!</p>
          <button className={style.mainPageAboutUs_left_btn}>Get Started Today <FaArrowRight /></button>
        </div>
      </div>
      <div className={style.mainPageAboutUs_right}>
        <div className={style.mainPageAboutUs_right_imgBoxRight}>
          <div className={style.mainPageAboutUs_right_imgBoxRightTop}>
            <img className={style.mainPageAboutUs_right_imgBoxRightTop_img} src={img2} alt="" />
            <p className={style.mainPageAboutUs_right_imgBoxRightTop_imgText}>UI Design</p>
            <span className={style.mainPageAboutUs_right_imgBoxRightTop_lessonText}><LuNewspaper className={style.mainPageAboutUs_right_imgBoxRightTop_lessonText_icon}/>19 Lessons</span>
            <span className={style.mainPageAboutUs_right_imgBoxRightTop_timeText}><LuClock3 className={style.mainPageAboutUs_right_imgBoxRightTop_timeText_icon}/> 15 hour</span>
            <p className={style.mainPageAboutUs_right_imgBoxRightTop_title}>Learning How To Write As A Professional Author</p>
            <p className={style.mainPageAboutUs_right_imgBoxRightTop_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
          </div>
          <div className={style.mainPageAboutUs_right_imgBoxRightBottom}>
            <img className={style.mainPageAboutUs_right_imgBoxRightBottom_img} src={img} alt="" />
            <p className={style.mainPageAboutUs_right_imgBoxRightBottom_title}>Design Workshop</p>
            <p className={style.mainPageAboutUs_right_imgBoxRightBottom_text}>Today at 6:00 am</p>
            <button className={style.mainPageAboutUs_right_imgBoxRightBottom_btn}>Join Now <FaArrowRight /></button>
          </div>
        </div>
        <div className={style.mainPageAboutUs_right_imgBoxLeft}>
          <img src={img1} alt="" className={style.mainPageAboutUs_right_imgBoxLeft_img}/>
        </div>
      </div>
    </div>
  );
};

export default MainPageHead
