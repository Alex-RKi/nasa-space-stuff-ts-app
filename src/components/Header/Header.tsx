import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import './Header.scss';
export const Header = () => {
  return (
    <div className='header'>
      <NavLink className='header__logo' exact activeClassName='header__logo--activ' to='/'>POD</NavLink>
      <NavLink className='header__link' exact activeClassName='header__link--activ' to='/asteroids'>Asteroids</NavLink>
    </div>
  );
};
