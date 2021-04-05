import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AsteroidDescriptionProps } from '../AsteroidDescription/AsteroidDescription';
import AsteroidsCard from '../AsteroidsCard';
import ErrorNotification from '../ErrorNotification';
import LoadingScreen from '../LoadingScreen';
import './Asteroids.scss';

interface I_dates {
  [key: string]: AsteroidDescriptionProps[];
} 

export const Asteroids = () => {
  const { asteroids } = useTypedSelector(state => state);
  const { asteroidsList, loading, error } = asteroids;
  const [popUp, togglePopup] = useState(false);

  const createAsteroidsCalendar = (dates: I_dates) => {
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
  if (error) {
    return (
      <ErrorNotification />
    )
  }
  return (
    <div className='calendar'>
      {loading ? <LoadingScreen /> : null}
      {createAsteroidsCalendar(asteroidsList)}
    </div>

  )
}