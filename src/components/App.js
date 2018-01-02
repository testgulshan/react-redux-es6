import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

const App = props =>  {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
