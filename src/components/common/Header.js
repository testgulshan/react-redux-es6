import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
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
      {loading && <LoadingDots interval={60} dost={20} />}
    </header>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
