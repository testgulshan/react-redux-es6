import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/graph" activeClassName="active">Graph</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/animation" activeClassName="active">Animations</Link>
    </header>
  );
};

export default Header;
