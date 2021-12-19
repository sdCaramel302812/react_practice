import React from 'react';
import './index.css';

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

export {Toggle};