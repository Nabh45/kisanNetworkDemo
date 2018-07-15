import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css';

export default () => 

(

  <BrowserRouter>
  <Route path='/' component={Home} />
  </BrowserRouter>

)
