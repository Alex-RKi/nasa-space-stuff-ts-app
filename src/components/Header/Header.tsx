import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to='/'>LOGO</Link>
      <Link to='/asteroids'>Asteroids</Link>
    </div>
  );
};
