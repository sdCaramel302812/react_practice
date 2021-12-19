import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LoginControl} from './conditional_rendering.js';
import {WarningBanner} from './conditional_rendering.js';
import {Clock} from './component.js';
import {Toggle} from './event_handler.js';
import {NumberLists} from './list.js';


function App(props) {
  return (
    <div>
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
  