import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AsteroidsListBubble.scss';
import AsteroidDescription from "../AsteroidDescription";

interface I_AsteroidsListBubble {
  name: string;
  id: number;
  item: any;
  is_potentially_hazardous_asteroid: boolean
}

export default function AsteroidsListBubble(props: I_AsteroidsListBubble) {
  const { name, id, is_potentially_hazardous_asteroid: dangerous } = props;
  const [styles, setStyles] = useState({});
  useEffect(() => {
    const styleRandom = {
      borderRadius: getRandomizedBorder(),
      backgroundImage: `url(${getRandomTextureUrl()})`,
      color: dangerous ? 'red' : 'black'
    }
    setStyles(styleRandom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getRandomizedBorder = () => {
    let rand: number[] = [];
    for (let i = 0; i <= 3; i++) {
      rand.push(Math.floor(Math.random() * 90 + 10));
    }
    return `50% / ${rand[0]}% ${rand[1]}% 
    ${rand[2]}% ${rand[3]}%`;
  }
  const getRandomTextureUrl = () => {
    const rn = Math.floor(Math.random() * 10);
    return `/asteroid__texture${rn}.png`;
  }

  return (
    <Link style={styles}
      className='asteroids-list__card'
      to={{ pathname: `/asteroid:${id}`, state: { ...props } }}
    >
      <div className='card__bubble'>
        <div className='tag'>
          {name}
        </div>
        <div className='desc'>
          <AsteroidDescription {...props} />
        </div>

      </div>
    </Link>
  )
}
