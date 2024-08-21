import style from "./mainPageMailCard.module.css"
import { IoMail } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const MainPageMailCard = () => {
  return (
    <div className={style.mainPageMAilCard}>
        <div className="container">
            <p className={style.mainPageMAilCard_title}>SUBSCRIBE NEWSLETTER</p>
            <p className={style.mainPageMAilCard_subtitle}>Get Every Latest News</p>
            <div className={style.mainPageMAilCard_inputBox}>
                <IoMail className={style.mainPageMAilCard_inputBox_mailIcon}/>
                <input type="email" placeholder="Enter Your mail adress" className={style.mainPageMAilCard_inputBox_input}/>
                <FaTelegramPlane className={style.mainPageMAilCard_inputBox_telegramIocn}/>
            </div>
        </div>
    </div>
  )
}

export default MainPageMailCard
