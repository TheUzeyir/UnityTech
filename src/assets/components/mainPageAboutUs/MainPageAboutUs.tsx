import style from "./mainPageAboutUs.module.scss"
import MainImg from "../../imaige/mainPageImg/mainPageAboutUsBig.png"
import PointImg from "../../imaige/mainPageImg/mainPageAboutUsPoint.png"
import LogoImg from "../../imaige/mainPageImg/mainPageAboutUsLogo.png"
import { FaBookReader } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const MainPageAboutUs = () => {
  return (
    <div className="container">
        <div className={style.mainPageAboutUs}>
        <div className={style.mainPageAboutUs_left}>
            <img className={style.mainPageAboutUs_left_MainImg} src={MainImg} alt="" />
            <img className={style.mainPageAboutUs_left_PointImg} src={PointImg} alt="" />
            <img className={style.mainPageAboutUs_left_LogoImg} src={LogoImg} alt="" />
        </div>
        <div className={style.mainPageAboutUs_right}>
            <div className={style.mainPageAboutUs_right_title}>ABOUT US</div>
            <div className={style.mainPageAboutUs_right_mainText}>Creating A Community Of Life Long Learners</div>
            <div className={style.mainPageAboutUs_right_desc}>Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.</div>

            <div className={style.mainPageAboutUs_right_card}>
            <div className={style.mainPageAboutUs_right_card_iconBox}>
                <FaBookReader className={style.mainPageAboutUs_right_card_icon}/>
            </div>
            <div className={style.mainPageAboutUs_right_card_textBox}>
                <p className={style.mainPageAboutUs_right_card_textBox_title}>Flexible Classes</p>
                <p className={style.mainPageAboutUs_right_card_textBox_desc}>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.</p>
            </div>
            </div>

            <div className={style.mainPageAboutUs_right_card}>
                <div className={style.mainPageAboutUs_right_card_iconBox}>
                    <FaSchool className={style.mainPageAboutUs_right_card_icon}/>
                </div>
            <div className={style.mainPageAboutUs_right_card_textBox}>
                <p className={style.mainPageAboutUs_right_card_textBox_title}>Learn From Anywhere</p>
                <p className={style.mainPageAboutUs_right_card_textBox_desc}>Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.</p>
            </div>
            </div>
            <button className={style.mainPageAboutUs_right_btn}>Know About Us <FaArrowRight /></button>
        </div>
        </div>
    </div>
  )
}

export default MainPageAboutUs
