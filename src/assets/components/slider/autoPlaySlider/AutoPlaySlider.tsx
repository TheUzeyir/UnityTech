import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {data} from "./autoSliderData"
import style from "./autoPlaySlider.module.css"

export default function AutoplaySlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ 
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {data.map((item, index) => (
      <SwiperSlide key={index} className={style.autoSlider}>
        <div className={style.testiminioalCard_desc}>{item.desc}</div>
        <div className={style.testiminioalCard_box}>
          <img src={item.img} alt="" className={style.testiminioalCard_box_img}/>
          <div className={style.testiminioalCard_box_personInfo}>
            <p className={style.testiminioalCard_box_personInfo_name}>{item.person}</p>
            <p className={style.testiminioalCard_box_personInfo_work}>{item.work}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
      </Swiper>
    </>
  );
}