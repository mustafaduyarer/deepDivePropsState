import React, { Component } from 'react';
import JournalList from "./journals/journal_list";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starterby Mustafa</h1>
        <h2>React Skeleton</h2>
        <JournalList heading= "list 1"/>
       
      </div>
    );
  }
}

