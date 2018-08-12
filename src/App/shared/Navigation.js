import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
  </div>
);
