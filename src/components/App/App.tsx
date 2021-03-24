import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Asteroids from '../Asteroids';
import Header from '../Header';
import PictureOfDay from '../PictureOfDay';
import AsteroidDescription from '../AsteroidDescription';


function App() {
  const { getPicOfDay, getAsteroids } = useAction();

  useEffect(() => {
    getPicOfDay();
    //getAsteroids();
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path='/' exact render={(): JSX.Element => <PictureOfDay picsToLoad={10} />} />
          <Route path='/asteroids' exact render={(): JSX.Element => <Asteroids />} />
          <Route path='/asteroid:id' render={({ match }): JSX.Element => {
            const { id } = match.params;
            return <AsteroidDescription id={id} />
          }} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
