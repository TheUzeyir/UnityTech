import MainPageAboutUs from "./components/mainPageAboutUs/MainPageAboutUs"
import style from "./mainPage.module.css"

const MainPage = () => {
  return (
    <div className={style.mainPage}>
        <MainPageAboutUs/>
    </div>
  )
}

export default MainPage
