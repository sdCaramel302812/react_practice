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

// Learning Event Handler
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // let the "this" be "Toggle" if it be called by callback
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      isToggled: true
    }
  }

  handleButtonClick() {
    this.setState(state => ({
      isToggled: !state.isToggled
    }));
  }

  deleteRow(id) {
    console.log(this, id);
  }

  /**
   * if the callback has been sent to child components through props, using arrow function may cause
   * all child components been rerendered every time. It may lead to performance issue. Use bind instead
   * to avoid this problem.
   */
  render() {
    return (
    <div>
      <button onClick={this.handleButtonClick}>
        {this.state.isToggled ? 'ON' : 'OFF'}
      </button>
      <button onClick={() => this.deleteRow(1)}>Delete with Arrow Function</button>
      <button onClick={this.deleteRow.bind(this, 1)}>Delete with Arrow Function</button>
    </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <Clock
        increment={1}
      />
      <Toggle />
    </div>
  );
}


// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
  