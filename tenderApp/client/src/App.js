import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import HomePage from './views/HomePage';
import TendersList from './views/TendersList';
import AddTender from './views/AddTender';


function App() {
  return (
    <div className="App">
      <Router>
          <div className='links'>
          <Link to="/">Home Page</Link>
            <Link to="/addTender">Add tender</Link>
          </div>
          <Routes>
            <Route path='/' exact Component={HomePage} />
            <Route path='/addTender' exact Component={AddTender} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
