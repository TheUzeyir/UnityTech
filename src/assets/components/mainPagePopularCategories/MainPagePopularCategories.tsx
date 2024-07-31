import { FaRegClock } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import style from "./mainPagePopularCategories.module.css"
import { FaArrowRight } from "react-icons/fa";

const MainPagePopularCategories = () => {
  return (
    <div className="container">
      <div className={style.MainPagePopularCategories}>
        <p className={style.title}>POPULAR COURSES</p>
        <p className={style.subtitle}>Featured On This Month</p>
        <div className={style.courseList}>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 15 Week</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
            <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(5.0)</p></div>
            </div>
            <div className={style.courseTitle}><p>The Complete HTML & CSS</p> <p>Bootcamp 2024 Edition</p></div>
            <div className={style.courseStats}>
            <span className={style.courseStats_title}><GoPersonFill />228 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />16 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>$45.00</p></div>
          </div>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-32-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 17 Week</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
            <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(5.0)</p></div>
            </div>
            <div className={style.courseTitle}><p>Grow Personal Financial Security</p> <p>Thinking & Principles</p></div>
            <div className={style.courseStats}>
            <span className={style.courseStats_title}><GoPersonFill />189 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />18 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>$49.00</p><p className={style.courseItem_btnBox_title}>$59.00</p></div>
          </div>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-38-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 20 Hour</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
            <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(5.0)</p></div>
            </div>
            <div className={style.courseTitle}><p>The Complete Guide to Build</p><p> RESTful API Application</p></div>
            <div className={style.courseStats}>
            <span className={style.courseStats_title}><GoPersonFill />442 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />15 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>Free</p></div>
          </div>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-30-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 25 Hour</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
            <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(5.0)</p></div>
            </div>
            <div className={style.courseTitle}><p>Competitive Strategy Law for</p> <p>Management Consultants</p></div>
            <div className={style.courseStats}>
            <span className={style.courseStats_title}><GoPersonFill />364 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />13 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>$75.00</p></div>
          </div>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-39-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 30 Hour</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
              <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(4.5)</p></div>
            </div>
            <div className={style.courseTitle}><p>Machine Learning A-Z: Hands-On</p> <p>Python and java</p></div>
            <div className={style.courseStats}>
            <span className={style.courseStats_title}><GoPersonFill />674 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />13 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>$79.00</p><p className={style.courseItem_btnBox_title}>$99.00</p></div>
          </div>
          <div className={style.courseItem}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-33-590x430.webp" alt="" className={style.courseImg} />
            <div className={style.courseInfo}>
              <p className={style.courseInfo_time}><FaRegClock /> 15 Hour</p> <FaHeart className={style.courseInfo_heartIcon}/>
            </div>
            <div className={style.instructorInfo}>
            <div className={style.instructorInfo_humanInfo}><img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp" alt="" className={style.instructorInfo_img}/><p>Janet Fleming</p></div> <div className={style.instructorInfo_starBox}><IoStar className={style.instructorInfo_starIcon}/> <p>(5.0)</p></div>
            </div>
            <div className={style.courseTitle}><p>Learning How To Write As A</p> <p>Professional Author</p></div>
            <div className={style.courseStats}>
              <span className={style.courseStats_title}><GoPersonFill />425 Students</span> <span className={style.courseStats_title}><IoNewspaperSharp />19 Lessons</span>
            </div>
            <div className={style.courseItem_btnBox}><p className={style.courseItem_btnBox_item}>$29.00</p><p className={style.courseItem_btnBox_title}>$39.00</p></div>
          </div>
        </div>
        <button className={style.MainPagePopularCategories_btn}>View All Courses <FaArrowRight/></button>
      </div>
    </div>
  )
}

export default MainPagePopularCategories
