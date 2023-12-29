import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
    // console.log(this.props.pageSize);
    state = {
     progress:0,
      
    };
  
  No_of_page=8;
  api_key=process.env.REACT_APP_NEWS_API;
  myprogress=(pro)=>{
      this.setState({progress:pro});
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height='3px'
        progress={this.state.progress}
        
        />
        
        <Routes>
        <Route path="/business" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="business" pageSize={this.No_of_page} col="danger" category="business" country="in"/>}> </Route>
        <Route path="/entertainment" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="entertainment" pageSize={this.No_of_page} col="primary" category="entertainment" country="in"/>}> </Route>
        <Route path="/" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="general" pageSize={this.No_of_page} col="secondary" category="general" country="in"/>}> </Route>
        <Route path="/health" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="health" pageSize={this.No_of_page} col="success" category="health" country="in"/>}> </Route>
        <Route path="/science" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="science" pageSize={this.No_of_page}col="dark" category="science" country="in"/>}> </Route>
        <Route path="/sports" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="sports" pageSize={this.No_of_page}col="warning" category="sports" country="in"/>}> </Route>
        <Route path="/technology" element={<News api_key={this.api_key}  pro_Val={this.myprogress}  key="technology" pageSize={this.No_of_page}col="info" category="technology" country="in"/>}> </Route>
        </Routes>
      
    </Router>
       
        
      </div>
    )
  }
}
