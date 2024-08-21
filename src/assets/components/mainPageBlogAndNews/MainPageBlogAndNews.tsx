import style from "./mainPageBlogAndNews.module.css"
import { FaArrowRight } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const MainPageBlogAndNews = () => {
  return (
    <div className={style.mainPageBlogAndNews}>
        <div className="container">
            <p className={style.mainPageBlogAndNews_title}>BLOG & NEWS</p>
            <div className={style.mainPageBlogAndNews_header}>
                <p className={style.mainPageBlogAndNews_header_title}>Trending on Our Blogs</p>
                <div className={style.mainPageBlogAndNews_header_btnBox}>
                Read More Blogs <FaArrowRight />
                </div>
            </div>
            <div className={style.mainPageBlogAndNews_main}>
                <div className={style.mainPageBlogAndNews_main_card}>
                <p className={style.mainPageBlogAndNews_main_card_title}>Social Media</p>
                <p className={style.mainPageBlogAndNews_main_card_subTitle}>The Complete Web Developer Guideline 2023</p>
                <div className={style.mainPageBlogAndNews_main_card_timeBox}>
                    <p><FaBirthdayCake /> 17 Feb, 2023</p>
                    <p><IoPerson /> Posted By Janet Fleming</p>
                </div>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp" alt=""/>
                </div>
                <div className={style.mainPageBlogAndNews_main_card}>
                <p className={style.mainPageBlogAndNews_main_card_title}>Branding</p>
                <p className={style.mainPageBlogAndNews_main_card_subTitle}>Social Media Marketing MASTERY( A-Z ) Journey</p>
                <div className={style.mainPageBlogAndNews_main_card_timeBox}>
                    <p><FaBirthdayCake /> 17 Feb, 2023</p>
                    <p><IoPerson /> Posted By Janet Fleming</p>
                </div>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26-590x430.webp" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPageBlogAndNews
