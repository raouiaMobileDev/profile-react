import React from 'react';


import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home'
import DetailPost from './containers/DetailPost/DetailPost'
import Posts from './containers/PostBuilder/PostBuilder'
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (

    <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/detailPost/:id" component={DetailPost} /> 
           <Route  path="/posts/:id" component={Posts} /> 
         </Switch>
    </BrowserRouter>

   
  
  );
}

export default App;
