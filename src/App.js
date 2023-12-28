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

 No_of_page=8;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/business" element={<News key="business" pageSize={this.No_of_page} col="danger" category="business" country="in"/>}> </Route>
        <Route path="/entertainment" element={<News key="entertainment" pageSize={this.No_of_page} col="primary" category="entertainment" country="in"/>}> </Route>
        <Route path="/" element={<News key="general" pageSize={this.No_of_page} col="secondary" category="general" country="in"/>}> </Route>
        <Route path="/health" element={<News key="health" pageSize={this.No_of_page} col="success" category="health" country="in"/>}> </Route>
        <Route path="/science" element={<News key="science" pageSize={this.No_of_page}col="dark" category="science" country="in"/>}> </Route>
        <Route path="/sports" element={<News key="sports" pageSize={this.No_of_page}col="warning" category="sports" country="in"/>}> </Route>
        <Route path="/technology" element={<News key="technology" pageSize={this.No_of_page}col="info" category="technology" country="in"/>}> </Route>
        </Routes>
      
    </Router>
       
        
      </div>
    )
  }
}
