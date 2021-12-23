import React from 'react';
import './index.css';

function ListItem(props) {
    // don't assign key here
    return <li>{props.value}</li>;
  }
  
  function NumberLists(props) {
    const numbers = props.numbers;
    // assign the key here
    const numberLists = numbers.map((number) => 
      <ListItem key={number.toString()} value={number}/>);
    return (
      <ul>
        {numberLists}
      </ul>
    );
  }

export {NumberLists};