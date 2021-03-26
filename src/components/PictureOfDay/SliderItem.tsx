import { useState } from "react";
import ReactPlayer from 'react-player';
import './SliderItem.scss';
import { I_picOfDay } from "../../store/types/picOfDay";

export const SwiperItem = (props: I_picOfDay) => {
  const { url, hdurl, explanation, date, title, media_type } = props;

  const [imgLoaded, setImgLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('LOADING...');

  const loadingError = () => {
    setError(true);
    setStatus('This type of media can not be displayed, pls use link in description');
    setImgLoaded(false);
  }
  return (
    <>
      <div className='item'>
        <div className='item__header'>
          <h1 className='header__name'>{title}</h1>
          <span className='header__date'> {date}</span>
        </div>

        <div className='item__pic-container'>
          <div className='img-placeholder' style={{ display: imgLoaded ? 'none' : 'block' }}>{status}</div>
          <img
            style={{ display: imgLoaded && media_type !== 'video' ? 'block' : 'none' }}
            src={url} alt={title} onLoad={() => setImgLoaded(true)}
          />
          {media_type === 'video' && !error ?
            <ReactPlayer
              onReady={() => setImgLoaded(true)}
              url={url} controls
              height='50vh'
              stopOnUnmount={true}
              onError={loadingError}
            />
            : null
          }
        </div>
        <div className='item__info'>
          <p className='info__text'>{explanation}</p>
          {hdurl ?
            <a className='info__link' href={hdurl} rel="noreferrer" target="_blank" ><button>Full size</button></a>
            : <a className='info__link' href={url} rel="noreferrer" target="_blank" ><button>Link</button></a>
          }
        </div>
      </div>
    </>
  );
}
