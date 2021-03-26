import moment from 'moment';
import React, { Dispatch, SetStateAction, useState } from 'react'
import AsteroidsList from '../AsteroidsList';

import './AsteroidsCard.scss';

interface I_AsteroidsCard {
  date: string;
  list: object;
  togglePopup: (Dispatch<SetStateAction<boolean>>);
  popUp: boolean;
}

export default function AsteroidsCard(props: I_AsteroidsCard) {
  const { date, list, togglePopup, popUp } = props;
  const [clazz, setClazz] = useState('slide');

  const day = moment(date).format('dd');
  const previewList = Object.values(list).map(elem => {
    return <div className='trigger' key={elem.id}>{elem.name}</div>;
  })
  const AsteroidsQTY = previewList.length;

  const showList = (e: any) => {
    let check = e.target.className?.includes('trigger');
    if (!check) return;
    if (popUp) {
      togglePopup(!popUp);
      setClazz('slide');
    } else {
      togglePopup(!popUp);
      setClazz('slide active');
    }
  }
  return (
    <>
      <div className={clazz}>
        <AsteroidsList showList={showList} list={list} />
      </div>
      <div className='calendar__card card trigger' onClick={(e) => showList(e)}>
        <h2 className='card__date trigger'>{date} ({day})</h2>
        <div className='card__events trigger'>Object(s) in proximity: {AsteroidsQTY}</div>
        <div className='card__preview-list trigger'>
          {previewList}
        </div>
      </div >
    </>
  )
}
