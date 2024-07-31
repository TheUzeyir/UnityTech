import style from "./mainPageTestiminoal.module.css"
import AutoplaySlider from '../slider/autoPlaySlider/AutoPlaySlider'

const MainPageTestiminoal = () => {
  return (
    <div className={style.mainPageTestiminoal}>
      <div className="container">
      <p className={style.mainPageTestiminoal_title}>TESTIMONIAL</p>
      <p className={style.mainPageTestiminoal_subtitle}>What Our Student Says</p>
      <div className={style.mainPageTestiminoal_card}>
        <div className={style.mainPageTestiminoal_cardLeft}>
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-01-2.jpg" alt="" className={style.mainPageTestiminoal_cardLeft_mainImg}/>
            <div className={style.cupaBox}>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/trophy-2.png" alt="" className={style.mainPageTestiminoal_cardLeft_cupaImg}/>
                <div className={style.cupaBox_text}><p className={style.cupaBox_text_number}>50K+</p><p className={style.cupaBox_text_title}>Satisfied Learners</p></div>
            </div>
        </div>
            <AutoplaySlider/>
      </div>
      </div>
    </div>
  )
}

export default MainPageTestiminoal
