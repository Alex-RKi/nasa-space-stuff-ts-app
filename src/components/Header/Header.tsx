import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
export const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>LOGO</Link>
      <Link to='/asteroids'>Asteroids</Link>
    </div>
  );
};
