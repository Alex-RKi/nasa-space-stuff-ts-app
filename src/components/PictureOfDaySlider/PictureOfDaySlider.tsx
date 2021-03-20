import React, { useEffect } from 'react'
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { I_picOfDay } from '../../store/types/picOfDay';
import { SwiperItem } from './SliderItem';
import './PictureOfDaySlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar]);


export const AsteroidsSwiper = (props: { picsToLoad: number }) => {
  const { picsToLoad } = props;
  const { picOfDay: { picsData } } = useTypedSelector(state => state);
  const { getPicOfDay } = useAction();
  console.log(picsData)
  useEffect(() => {
    //getPicOfDay(picsToLoad);
  }, [])

  const createGallery = (arr: I_picOfDay[]) => {
    return arr.map((elem) => {
      return (
        <SwiperSlide>
          <SwiperItem key={elem.url} {...elem} />
        </SwiperSlide>)
    })
  }
  return (
    <div className='slider-container'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {createGallery(picsData)}
      </Swiper>
    </div>
  )
}

