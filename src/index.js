import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home'
import AdminHome from './components/AdminHome'
import ContestHome from './components/ContestHome'
import CreatePuzzle from './components/CreatePuzzle'
import ViewPuzzle from './components/ViewPuzzle'
import StartPool from './components/StartPool'
import ViewScore from './components/ViewScore'
import Board from './components/Board'

{/* <React.StrictMode>
      <App />
  </React.StrictMode> */}
ReactDOM.render(
  <BrowserRouter >  
    <Routes>
      <Route path='/' element={<App />}/>
        <Route path='home' element={<Home />}/>
        <Route path='admin' element={<AdminHome />}/>
        <Route path='puzzle' element={<CreatePuzzle />}/>
        <Route path='view' element={<ViewPuzzle />}/>
        <Route path='contestant' element={<ContestHome />}/>
        <Route path='pool' element={<StartPool />}/>
        <Route path='score' element={<ViewScore />}/> 
        <Route path='board' element={<Board />}/>                            
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
