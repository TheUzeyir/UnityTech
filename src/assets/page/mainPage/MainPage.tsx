import MainPageAboutUs from "../../components/mainPageAboutUs/MainPageAboutUs"
import MainPageCourseCategories from "../../components/mainPageCourseCategories/MainPageCourseCategories"
import MainPageHead from "../../components/mainPageHead/MainPageHead"
import MainPagePopularCategories from "../../components/mainPagePopularCategories/MainPagePopularCategories"
import MainPageTestiminoal from "../../components/mainPageTestiminoal/MainPageTestiminoal"
import style from "./mainPage.module.css"

const MainPage = () => {
  return (
    <div className={style.mainPage}>
        <MainPageHead/>
        <MainPageAboutUs/>
        <MainPageCourseCategories/>
        <MainPagePopularCategories/>
        <MainPageTestiminoal/>
    </div>
  )
}

export default MainPage
