import React from 'react'
import AsteroidsSwiper from '../PictureOfDaySwiper'

export const PictureOfDay = () => {
  return (
    <div>
      <AsteroidsSwiper picsToLoad={10}/>
    </div>
  )
}
