import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <div className='App'>
      <Homepage/>
    </div>
  );
};

export default App;