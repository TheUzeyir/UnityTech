import style from "./mainPageTeamMember.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img from "../../imaige/mainPageImg/buninessCourse.webp"

const data=[{
    id:1,
    img:'https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp',
    human:'James Carlson',
    work:'WordPress Expert'
},{
    id:2,
    img:'https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2.webp',
    human:'Nancy Phipps',
    work:'Digital Marketer'
},{
    id:3,
    img:'https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-03-2.webp',
    human:'Troy Hall',
    work:'PHP Expert'
},{
    id:4,
    img:'https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2.webp',
    human:'Isabelle Bruner',
    work:'UI Designer'
}]

const MainPageTeamMember = () => {
  return (
    <div className={style.mainPageTeamMember}>
    <div className="container">
      <p className={style.mainPageTeamMember_title}>TEAM MEMBER</p>
      <p className={style.mainPageTeamMember_subtitle}>Meet Our Instructor      </p>
      <div className={style.mainPageTeamMember_box}>
        {
            data.map((item)=>(
            <div className={style.mainPageTeamMember_box_card} key={item.id}>
                <img src={item.img} alt={item.human} className={style.mainPageTeamMember_box_card_img}/>
                <div className={style.mainPageTeamMember_box_card_info}>
                    <p className={style.mainPageTeamMember_box_card_title}>{item.human}</p>
                    <p className={style.mainPageTeamMember_box_card_subtitle}>{item.work}</p>
                    <div className={style.mainPageTeamMember_box_card_info_sosialBox}>
                        <FaLinkedin className={style.mainPageTeamMember_box_card_info_sosialBox_icon}/>
                        <FaFacebook className={style.mainPageTeamMember_box_card_info_sosialBox_icon}/>
                        <FaTwitter className={style.mainPageTeamMember_box_card_info_sosialBox_icon}/>
                        <FaYoutube className={style.mainPageTeamMember_box_card_info_sosialBox_icon}/>
                    </div>
                </div>
            </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default MainPageTeamMember
