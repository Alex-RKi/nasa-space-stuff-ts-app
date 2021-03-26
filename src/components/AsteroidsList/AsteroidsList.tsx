import React from 'react'

import './AsteroidsList.scss';
import AsteroidsListBubble from './AsteroidsListBubble';
interface I_AsteroidsList {
  list: any;
  showList: (event: React.MouseEvent<HTMLElement>) => void
}

export default function AsteroidsList(props: I_AsteroidsList) {
  const { list, showList } = props;

  const createAsteroidsList = (list: any) => {
    return list.map((item: any): any => {
      const { id } = item;
      return <AsteroidsListBubble key={id} id={id} {...item} />
    })
  }
  return (
    <div className='container'>
      <div className='asteroids-list' onClick={showList} >
        {createAsteroidsList(list)}
      </div>
      <button className='btn-close trigger' onClick={showList}></button>
    </div>

  )
}



