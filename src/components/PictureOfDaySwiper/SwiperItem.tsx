import { I_picOfDay } from "../../store/types/picOfDay";
import './SwiperItem.scss'

export const SwiperItem = (props: I_picOfDay) => {
  const { url, hdurl, explanation, date, title } = props;
  return (
    <div className='swiper__item'>
      <div className='item'>
        <h2 className='item__name'>{title}</h2>
        <div className='item__date'>{date}</div>
        <div className='item__pic-container'>
          <img src={url} alt={title} />

        </div>
        <div className='item__info'>
          <p className='info__text'>{explanation}</p>
          <a href={hdurl}>Full size</a>
        </div>
      </div>
    </div>

  );
}