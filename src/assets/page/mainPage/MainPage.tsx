import MainPageAboutUs from "../../components/mainPageAboutUs/MainPageAboutUs"
import MainPageBlogAndNews from "../../components/mainPageBlogAndNews/MainPageBlogAndNews"
import MainPageCoreFeatures from "../../components/mainPageCoreFeatures/MainPageCoreFeatures"
import MainPageCourseCategories from "../../components/mainPageCourseCategories/MainPageCourseCategories"
import MainPageHead from "../../components/mainPageHead/MainPageHead"
import MainPageMailCard from "../../components/mainPageMailCard/MainPageMailCard"
import MainPagePopularCategories from "../../components/mainPagePopularCategories/MainPagePopularCategories"
import MainPageTeamMember from "../../components/mainPageTeamMember/MainPageTeamMember"
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
        <MainPageTeamMember/>
        <MainPageCoreFeatures/>
        <MainPageMailCard/>
        <MainPageBlogAndNews/>
    </div>
  )
}

export default MainPage
