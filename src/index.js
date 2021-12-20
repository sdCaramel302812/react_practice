import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LoginControl} from './conditional_rendering.js';
import {WarningBanner} from './conditional_rendering.js';
import {Clock} from './component.js';
import {Toggle} from './event_handler.js';
import {NumberLists} from './list.js';

function FancyBorder(props) {
  return (
    <div className='FancyBorder'>
      {props.children}
      {props.first}
      {props.second}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder
      first={<p>first line</p>}
      second={<p>second line</p>}
    >
      <h1>{props.title}</h1>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome Dialog"/>
  );
}

function App(props) {
  return (
    <div>
      <WelcomeDialog/>
      <LoginControl/>
      <WarningBanner
        warn={true}
      />
      <Clock
        increment={1}
      />
      <Toggle />
      <NumberLists numbers={[1, 2, 3, 4, 5]}/>
    </div>
  );
}


// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
  