import MainPageAboutUs from "../../components/mainPageAboutUs/MainPageAboutUs"
import MainPageCourseCategories from "../../components/mainPageCourseCategories/MainPageCourseCategories"
import MainPageHead from "../../components/mainPageHead/MainPageHead"
import style from "./mainPage.module.css"

const MainPage = () => {
  return (
    <div className={style.mainPage}>
        <MainPageHead/>
        <MainPageAboutUs/>
        <MainPageCourseCategories/>
    </div>
  )
}

export default MainPage
