import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';
import { connect } from 'react-redux';

const App = props =>  {
  return (
    <div className="container-fluid">
      <Header 
        loading={props.loading}
      />
      {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
