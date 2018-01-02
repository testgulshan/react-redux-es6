import React, { Component } from 'react';
import Circle from '../animation/Circle';
import {Motion, spring} from 'react-motion';

class AnimationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };

    this.toggleCircle = this.toggleCircle.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {isVisible: !prevState.isVisible};
    });
  }

  willLeave() {
    return {
      x: spring(0)
    };
  }

  toggleCircle() {
    window.console.log(this.state.isVisible);

    this.setState((prevState) => {
      return {isVisible: !prevState.isVisible};
    });
  }

  render() {
    const isVisible = this.state.isVisible,
      nothing = <div>Nothing</div>;

    return (
      <Motion willLeave={this.willLeave} defaultStyle={{x: 0}} style={{x: spring(50)}}>
        {
          value => (
            <div>
              <header>
                <button onClick={this.toggleCircle} className="btn btn-default">
                  {isVisible ? 'hide' : 'show'}
                </button>
              </header>
              <div className="circle">
                {isVisible ? <Circle value={value} /> : nothing}
              </div>
              <h1 style={{marginLeft: value.x}}>{value.x}</h1>
            </div>
          )
        }
      </Motion>
    );
  }
}

export default AnimationPage;
