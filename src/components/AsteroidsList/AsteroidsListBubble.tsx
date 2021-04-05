import React, { useEffect, useState, MouseEvent } from "react";
import './AsteroidsListBubble.scss';
import AsteroidDescription from "../AsteroidDescription";
import { AsteroidDescriptionProps } from "../AsteroidDescription/AsteroidDescription";

export default function AsteroidsListBubble(props: AsteroidDescriptionProps) {
  const { name, id, is_potentially_hazardous_asteroid: dangerous } = props;
  const [cardStyles, setCardStyles] = useState({});
  const [descStyles, setDescStyles] = useState({ top: '30%', left: '0%' })

  useEffect(() => {
    const cardStyle = {
      borderRadius: getRandomizedBorder(),
      backgroundImage: `url(${getRandomTextureUrl()})`,
      color: dangerous ? 'red' : 'black',
    }
    setCardStyles(cardStyle)
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


  const calculatePosition = (e: MouseEvent<HTMLElement>) => {
    let leftPos = 15;
    let topPos = 101;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let { width, height, top, right } = e.currentTarget.getBoundingClientRect();


    if (width + right > windowWidth * 0.9) {
      leftPos = -70;
    }
    if (height + top > windowHeight * 0.8) {
      topPos = -101;
    }
    setDescStyles({
      left: `${leftPos}%`,
      top: `${topPos}%`
    })
  }
  function restorePosition() {
    setDescStyles({
      left: `0%`,
      top: `30%`
    });
    return;
  }

  return (
    <div
      onMouseOver={(e) => calculatePosition(e)}
      onMouseOut={restorePosition}
      style={cardStyles}
      className='asteroids-list__card'
    >
      <div className='card__bubble' style={descStyles}>
        <div className='tag'> {name}</div>
        <div className='desc'>
          <AsteroidDescription {...props} />
        </div>
      </div>
    </div>
  )
}
