import style from "./mainPageCoreFeatures.module.css"
import { PiStudentFill } from "react-icons/pi";
import { BiShapeTriangle } from "react-icons/bi";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiBookmarklet } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

const MainPageCoreFeatures = () => {
  return (
    <div className="container">
    <div className={style.mainPageCoreFeatures}>
      <div className={style.mainPageCoreFeatures_left}>
        <p className={style.mainPageCoreFeatures_left_title}>WHY CHOOSE US</p>
        <p className={style.mainPageCoreFeatures_left_subtitle}>Our Core Features</p>
        <div className={style.mainPageCoreFeatures_box}>
          <div className={style.mainPageCoreFeatures_box_card}>
            <PiStudentFill className={style.mainPageCoreFeatures_box_card_icon}/>
            <p className={style.mainPageCoreFeatures_box_card_title}>Virtual Classroom</p>
            <p className={style.mainPageCoreFeatures_box_card_desc}>Students can access course materials, participate in debate & discussions.</p>
          </div>
          <div className={style.mainPageCoreFeatures_box_card}>
            <BiShapeTriangle className={style.mainPageCoreFeatures_box_card_icon}/>
            <p className={style.mainPageCoreFeatures_box_card_title}>Remote Education</p>
            <p className={style.mainPageCoreFeatures_box_card_desc}>Complete assignments from a remote location, such as their home or workplace.</p>
          </div>
          <div className={style.mainPageCoreFeatures_box_card}>
            <GiBookmarklet className={style.mainPageCoreFeatures_box_card_icon}/>
            <p className={style.mainPageCoreFeatures_box_card_title}>Digital Learning</p>
            <p className={style.mainPageCoreFeatures_box_card_desc}>Digital learning allows for more personalized and flexible learning experiences.</p>
          </div>
          <div className={style.mainPageCoreFeatures_box_card}>
            <TfiAlarmClock className={style.mainPageCoreFeatures_box_card_icon}/>
            <p className={style.mainPageCoreFeatures_box_card_title}>Educator Support</p>
            <p className={style.mainPageCoreFeatures_box_card_desc}>The goal of educator support is to promote learning and growth among teachers.</p>
          </div>
        </div>
      </div>
      <div className={style.mainPageCoreFeatures_right}>
        <img
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/choose-us-image-01-2.jpg"
          alt=""
          className={style.mainPageCoreFeatures_right_img}
        />
        <div className={style.mainPageCoreFeatures_right_img_icon_box}>
          <FaPlay className={style.mainPageCoreFeatures_right_img_icon}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainPageCoreFeatures
