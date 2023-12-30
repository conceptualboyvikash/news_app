import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App =()=> {
  
    // console.log(props.pageSize);
    const[progress,setProgress]=useState(0);
    
      
    
  
 const No_of_page=8;
 const api_key=process.env.REACT_APP_NEWS_API;
 const myprogress=(pro)=>{
     setProgress(pro);
  }
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height='3px'
        progress={progress}
        
        />
        
        <Routes>
        <Route path="/business" element={<News api_key={api_key}  pro_Val={myprogress}  key="business" pageSize={No_of_page} col="danger" category="business" country="in"/>}> </Route>
        <Route path="/entertainment" element={<News api_key={api_key}  pro_Val={myprogress}  key="entertainment" pageSize={No_of_page} col="primary" category="entertainment" country="in"/>}> </Route>
        <Route path="/" element={<News api_key={api_key}  pro_Val={myprogress}  key="general" pageSize={No_of_page} col="secondary" category="general" country="in"/>}> </Route>
        <Route path="/health" element={<News api_key={api_key}  pro_Val={myprogress}  key="health" pageSize={No_of_page} col="success" category="health" country="in"/>}> </Route>
        <Route path="/science" element={<News api_key={api_key}  pro_Val={myprogress}  key="science" pageSize={No_of_page}col="dark" category="science" country="in"/>}> </Route>
        <Route path="/sports" element={<News api_key={api_key}  pro_Val={myprogress}  key="sports" pageSize={No_of_page}col="warning" category="sports" country="in"/>}> </Route>
        <Route path="/technology" element={<News api_key={api_key}  pro_Val={myprogress}  key="technology" pageSize={No_of_page}col="info" category="technology" country="in"/>}> </Route>
        </Routes>
      
    </Router>
       
        
      </div>
    )
  
}
export default App