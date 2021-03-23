import moment from 'moment';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AsteroidsList from '../AsteroidsList';
import LoadingScreen from '../LoadingScreen';
import Spinner from '../Spinner'
import './Asteroids.scss';


export const Asteroids = () => {
  const { asteroids } = useTypedSelector(state => state);
  const { asteroidsList, loading, error } = asteroids;
  const { getAsteroids } = useAction();
  const [popUp, togglePopup] = useState(false);

  const createAsteroidsCalendar = (dates: any): any => {
    return Object.keys(dates)
      .sort((dateA, dateB) => dateA.localeCompare(dateB))
      .map((date: any): any => {
        return <AsteroidsDateCard
          key={date} date={date}
          list={dates[date]}
          togglePopup={togglePopup}
          popUp={popUp} />
      });
  }

  return (
      <div className='calendar'>
        {loading ? <LoadingScreen /> : null}
        {createAsteroidsCalendar(asteroidsList)}
      </div>

  )
}
interface I_AsteroidsDateCard {
  date: string;
  list: object;
  // togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
  togglePopup: (Dispatch<SetStateAction<boolean>>);
  popUp: boolean;
}

export const AsteroidsDateCard = (props: I_AsteroidsDateCard) => {

  const { date, list, togglePopup, popUp } = props;
  const [show, toggleShow] = useState(false);
  const [clazz, setClazz] = useState('slide');

  const showList = (e: any) => {
    let check = e.target.className.includes('trigger')
    if (!check) return;
    if (popUp) {
      togglePopup(!popUp);
      setClazz('slide');
    } else {
      togglePopup(!popUp);
      setClazz('slide active');
    }
  }

  const day = moment(date).format('dd');
  const ObjectQTY = Object.keys(list).length;

  return (
    <>
      <div className={clazz}>
        <AsteroidsList showList={showList} list={list} />
      </div>
      <div className='calendar__date-card card trigger' onClick={(e) => showList(e)}>
        <h2 className='card__date trigger'>{date}</h2>
        <div className='card__day trigger'>{day}</div>
        <div className='card__events trigger'>Object(s) in proximity: {ObjectQTY}</div>
      </div >
    </>
  )
}
