import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
//  let  a="vikash";
  
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/business" element={<News key="business" pageSize={8} category="business" country="in"/>}> </Route>
        <Route path="/entertainment" element={<News key="entertainment" pageSize={8} category="entertainment" country="in"/>}> </Route>
        <Route path="/" element={<News key="general" pageSize={8} category="general" country="in"/>}> </Route>
        <Route path="/health" element={<News key="health" pageSize={8} category="health" country="in"/>}> </Route>
        <Route path="/science" element={<News key="science" pageSize={8} category="science" country="in"/>}> </Route>
        <Route path="/sports" element={<News key="sports" pageSize={8} category="sports" country="in"/>}> </Route>
        <Route path="/technology" element={<News key="technology" pageSize={8} category="technology" country="in"/>}> </Route>
        </Routes>
      
    </Router>
       
        
      </div>
    )
  }
}
