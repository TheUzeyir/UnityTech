import { FaArrowRight } from 'react-icons/fa';
import AnalysisImg from '../../imaige/mainPageImg/buninessCourse.webp';
import MarketingImg from '../../imaige/mainPageImg/marketingCourse.webp';
import ScienceImg from '../../imaige/mainPageImg/dataScyneCOurse.webp';
import CreativityImg from '../../imaige/mainPageImg/creativityCourse.webp';
import style from './mainPageCourseCategories.module.css';

const MainPageCourseCategories = () => {
  return (
    <div className={style.mainPageCourseCategories}>
      <p className={style.mainPageCourseCategories_title}>COURSE CATEGORIES</p>
      <p className={style.mainPageCourseCategories_subtitle}>Popular Topics To Learn</p>
      <div className="container">
      <section className={style.mainPageCourseCategories_categories}>
        <div className={style.mainPageCourseCategories_categoryCard1}>
          <img src={AnalysisImg} alt="Business Analysis" className={style.mainPageCourseCategories_categoryCard_image} />
          <p className={style.mainPageCourseCategories_categoryCard_courseCount}>5 Courses</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseTitle}>Business Analysis</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseDescription}>The course covers the tools used in business analysis.</p>
          <div className={style.mainPageCourseCategories_categoryCard_progressBarContainer1}>
            <div className={style.mainPageCourseCategories_categoryCard_progressBar}></div>
          </div>
        </div>
        <div className={style.mainPageCourseCategories_categoryCard2}>
          <img src={MarketingImg} alt="Sales Marketing" className={style.mainPageCourseCategories_categoryCard_image} />
          <p className={style.mainPageCourseCategories_categoryCard_courseCount}>3 Courses</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseTitle}>Sales Marketing</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseDescription}>You'll learn how to promote or sell services to customers.</p>
          <div className={style.mainPageCourseCategories_categoryCard_progressBarContainer}>
            <div className={style.mainPageCourseCategories_categoryCard_progressBar}></div>
          </div>
        </div>
        <div className={style.mainPageCourseCategories_categoryCard3}>
          <img src={ScienceImg} alt="Data Science" className={style.mainPageCourseCategories_categoryCard_image} />
          <p className={style.mainPageCourseCategories_categoryCard_courseCount}>4 Courses</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseTitle}>Data Science</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseDescription}>Students will learn about how data analysis methods work.</p>
          <div className={style.mainPageCourseCategories_categoryCard_progressBarContainer}>
            <div className={style.mainPageCourseCategories_categoryCard_progressBar}></div>
          </div>
        </div>
        <div className={style.mainPageCourseCategories_categoryCard4}>
          <img src={CreativityImg} alt="Creativity" className={style.mainPageCourseCategories_categoryCard_image} />
          <p className={style.mainPageCourseCategories_categoryCard_courseCount}>6 Courses</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseTitle}>Creativity</p>
          <p className={style.mainPageCourseCategories_categoryCard_courseDescription}>Students in this course will learn about the creative process.</p>
          <div className={style.mainPageCourseCategories_categoryCard_progressBarContainer}>
            <div className={style.mainPageCourseCategories_categoryCard_progressBar}></div>
          </div>
        </div>
      </section> 
      </div>
      <button className={style.mainPageCourseCategories_button}>Creative Courses <FaArrowRight className={style.arrowIcon} /></button>
    </div>
  );
};

export default MainPageCourseCategories
