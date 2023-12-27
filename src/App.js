import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
//  let  a="vikash";
   a="vikash";
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
       
      </div>
    )
  }
}
