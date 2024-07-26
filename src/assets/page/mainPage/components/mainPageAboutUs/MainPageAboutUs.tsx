import { FaArrowRight } from "react-icons/fa";
import img from "../../../../imaige/mainPageImg/mainPageAboutUsImg1.png"

const MainPageAboutUs = () => {
  return (
    <div className="MainPageAboutUs">
      <div className="mainPageAboutUs_left">
        <p>EXCELLENCE IN EDUCATION</p>
        <p>Start Better Learning Future From Here </p>
        <p>Empower yourself with the knowledge and skills gained through online education! The key to your future!</p>
        <button>Get Started Today <FaArrowRight/></button>
      </div>
      <div className="mainPageAboutUs_right">
      </div>
    </div>
  )
}

export default MainPageAboutUs
