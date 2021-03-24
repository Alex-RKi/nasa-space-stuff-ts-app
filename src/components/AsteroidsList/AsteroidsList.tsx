import React, { useEffect, useState } from 'react'
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
      const { name, id, ...props } = item;
      //console.log(props)
      return <AsteroidsListCard key={id} id={id} name={name} {...props} />
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
  console.log(props)
  const [styles, setStyles] = useState({});
  useEffect(() => {
    const styleRandom = {
      borderRadius: getRandomizedBorder(),
      backgroundImage: getRandomTextureUrl()
    }
    setStyles(styleRandom)

  }, [])
  const getRandomizedBorder = () => {
    let rand = [];
    for (let i = 0; i <= 3; i++) {
      rand.push(Math.floor(Math.random() * 90 + 10));
    }
    return `50% / ${rand[0]}% ${rand[1]}% 
    ${rand[2]}% ${rand[3]}%`;
  }
  const getRandomTextureUrl = () => {
    const rn = Math.floor(Math.random() * 10);
    return `url(http://localhost:3000/asteroid__texture${rn}.png)`;
  }
  // const
  console.log(Math.floor(Math.random() * 10))
  return (
    <Link style={styles} className='asteroids-list__card' to={`/asteroid:${id}`}>
      <div className='card__name'>
          {name}
      </div>
    </Link>
  )
}
