import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AsteroidsListBubble.scss';
import AsteroidDescription from "../AsteroidDescription";
import { AsteroidDescriptionProps } from "../AsteroidDescription/AsteroidDescription";

export default function AsteroidsListBubble(props: AsteroidDescriptionProps) {
  const { name, id, is_potentially_hazardous_asteroid: dangerous } = props;
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const bubbleStyles = {
      borderRadius: getRandomizedBorder(),
      backgroundImage: `url(${getRandomTextureUrl()})`,
      color: dangerous ? 'red' : 'black'
    }
    setStyles(bubbleStyles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getRandomizedBorder = () => {
    let style = "50% /"
    for (let i = 0; i <= 3; i++) {
      style += ` ${Math.floor(Math.random() * 90 + 10)}%`
    }
    return style;
  }
  const getRandomTextureUrl = () => {
    const rn = Math.floor(Math.random() * 10);
    return `/asteroid__texture${rn}.png`;
  }
  return (
    <div style={styles}
      className='asteroids-list__card'
    >
      <div className='card__bubble'>
        <div className='tag'> {name}</div>
        <div className='desc'>
          <AsteroidDescription {...props} />
        </div>
      </div>
    </div>
  )
}
