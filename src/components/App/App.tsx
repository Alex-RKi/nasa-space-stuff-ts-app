import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PictureOfDay from '../PictureOfDay';
import Asteroids from '../Asteroids';
import Header from '../Header';


function App() {
  const { picOfDay: { picsData }, asteroids: { asteroidsList } } = useTypedSelector(state => state);
  const { getPicOfDay, getAsteroids } = useAction();

  useEffect(() => {
    //getPicOfDay();
  }, [])
  //console.log(picsData);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path='/' exact render={(): JSX.Element => <PictureOfDay />} />
          <Route path='/asteroids' exact render={(): JSX.Element => <Asteroids />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
