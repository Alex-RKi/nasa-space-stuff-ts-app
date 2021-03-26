import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AsteroidsCard from '../AsteroidsCard';
import LoadingScreen from '../LoadingScreen';
import './Asteroids.scss';


export const Asteroids = () => {
  const { asteroids } = useTypedSelector(state => state);
  const { asteroidsList, loading, error } = asteroids;
  const [popUp, togglePopup] = useState(false);

  const createAsteroidsCalendar = (dates: any) => {
    return Object.keys(dates)
      .sort((dateA, dateB) => dateA.localeCompare(dateB))
      .map((date: string) => {
        return <AsteroidsCard
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