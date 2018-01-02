import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

// const myPropTypes = {
//   children: PropTypes.object.isRequired
// };
//
// const props = {
//   children: 'test'
// };
//
// PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'App');

export default App;
