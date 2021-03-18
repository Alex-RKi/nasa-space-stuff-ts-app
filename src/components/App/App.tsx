import React, { useEffect } from 'react';
import './App.css';
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector';


function App() {
  const { picOfDay: { picsData }, asteroids: { asteroidsList } } = useTypedSelector(state => state)
  const { getPicOfDay, getAsteroids } = useAction();

  useEffect(() => {
    getAsteroids();
  }, [])
  console.log(asteroidsList);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
