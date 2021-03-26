import React from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { I_picOfDay } from '../../store/types/picOfDay';
import { SwiperItem } from './SliderItem';
import './PictureOfDay.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import LoadingScreen from '../LoadingScreen';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export const PictureOfDay = (props: { picsToLoad: number }) => {
  const { picsToLoad } = props;
  const { picOfDay } = useTypedSelector(state => state);
  const { loading, error, picsData } = picOfDay;
  const { getPicOfDay } = useAction();

  const createSlides = (arr: I_picOfDay[]) => {
    return arr.map((elem) => {
      return (
        <SwiperSlide key={elem.url}>
          <SwiperItem  {...elem} />
        </SwiperSlide>)
    })
  }
  const slides = createSlides(picsData);
  return (
    <div className='slider-container'>
      {loading ? <LoadingScreen /> : null}
      <Swiper loop={true} onSlideChange={({ isEnd }) => {
        if (isEnd) {
          getPicOfDay(picsToLoad);   //!
        }
      }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides}
      </Swiper>
    </div>
  )
}

