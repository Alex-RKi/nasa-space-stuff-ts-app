import React from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './AsteroidsList.scss';
interface I_AsteroidsList {
  list: any;
  showList: (event: React.MouseEvent<HTMLElement>) => void
}

export default function AsteroidsList(props: I_AsteroidsList) {
  const { list, showList } = props;
  const createAsteroidsList = (list: any) => {
    return list.map((item: any): any => {
      const { name, id } = item;
      //console.log(item)
      return <AsteroidsListCard key={id} id={id} name={name} />
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




function AsteroidsListCard(props: { name: string, id: number }) {
  const { name, id } = props;
  return (
    <Link to={`/description/${id}`}>
      <div className='asteroids-list__card'>
        <div className='test'>{name}</div>
      </div>
    </Link>
  )
}
