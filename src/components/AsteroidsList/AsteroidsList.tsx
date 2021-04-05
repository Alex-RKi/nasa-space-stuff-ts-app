import React from 'react'
import './AsteroidsList.scss';
import { AsteroidDescriptionProps } from '../AsteroidDescription/AsteroidDescription';
import AsteroidsListBubble from './AsteroidsListBubble';
interface I_AsteroidsList {
  list: AsteroidDescriptionProps[];
  showList: (event: React.MouseEvent<HTMLElement>) => void
}

export default function AsteroidsList(props: I_AsteroidsList) {
  const { list, showList } = props;

 


  const createAsteroidsList = (list: AsteroidDescriptionProps[]) => {
    return list.map((item: AsteroidDescriptionProps) => {
      const { id } = item;
      return <AsteroidsListBubble key={id} {...item} />
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



