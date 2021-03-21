import { I_picOfDay } from "../../store/types/picOfDay";
import { SwiperSlide } from 'swiper/react';
import './SliderItem.scss'
import { useState } from "react";

export const SwiperItem = (props: I_picOfDay) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const toggleImgLoaded = () => {
    console.log('Loaded')
    setImgLoaded(!imgLoaded);
  }
  const { url, hdurl, explanation, date, title } = props;
  return (
    <>
      <div className='item'>
        <h2 className='item__name'>{title}</h2>
        <div className='item__date'>{date}</div>
        <div className='item__pic-container'>
          <div className='img-placeholder' style={{ display: imgLoaded ? 'none' : 'block' }}>LOADING...</div>
          <img src={url} alt={title} onLoad={toggleImgLoaded} style={{ display: imgLoaded ? 'block' : 'none' }} />
        </div>
        <div className='item__info'>
          <p className='info__text'>{explanation}</p>
          <a href={hdurl}>Full size</a>
        </div>
      </div>
    </>
  );
}