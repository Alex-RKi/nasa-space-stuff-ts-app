import React, { useEffect } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { I_picOfDay } from '../../store/types/picOfDay';
import { SwiperItem } from './SwiperItem';
import './PicturOfDaySwiper.scss'


export const AsteroidsSwiper = (props: { picsToLoad: number }) => {
  const { picsToLoad } = props;
  const { picOfDay: { picsData } } = useTypedSelector(state => state);
  const { getPicOfDay } = useAction();
  console.log(picsData)
  useEffect(() => {
    //getPicOfDay(picsToLoad);
  }, [])
  const params = {
    slidesPerView: picsToLoad,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  };
  const createGallery = (arr: I_picOfDay[]) => {
    return arr.map((elem) => {
      return <SwiperItem key={elem.url} {...elem} />
    })
  }
  return (
    <div className='swiperContainer'>
      <Swiper {...params}>
        {createGallery(picsData)}
      </Swiper>
    </div>
  )
}

