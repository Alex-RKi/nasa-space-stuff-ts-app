import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useAction } from '../../hooks/useAction'
import Asteroids from '../Asteroids';
import Header from '../Header';
import PictureOfDay from '../PictureOfDay';
import AsteroidDescription from '../AsteroidDescription';
import { AsteroidDescriptionProps } from '../AsteroidDescription/AsteroidDescription';


function App() {
  const { getPicOfDay, getAsteroids } = useAction();

  useEffect(() => {
    getPicOfDay();
    getAsteroids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={(): JSX.Element => <PictureOfDay picsToLoad={10} />} />
          <Route path='/asteroids' exact render={(): JSX.Element => <Asteroids />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

