import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// fuction component
function Welcome(props) {
  return <h1>{props.name}</h1>;
}

// class component
class WelcomeES6 extends React.Component {
  render() {
    return (
      <div>
      <Welcome
        name="John"
      />
      <h1>welcome ES6, {this.props.name}</h1>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });

    // if new state is based on old state or new props
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <p>{this.state.counter}</p>
    </div>
  };
}

function App(props) {
  return (
    <div>
      <Clock
        increment={1}
      />
      <Clock
        increment={2}
      />
      <Clock
        increment={3}
      />
    </div>
  );
}


// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
  