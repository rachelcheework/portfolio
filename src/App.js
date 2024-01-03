import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation/>        
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ portfolio" component={Portfolio} />
        </Routes>
      </div>
    </Router>
    // <div>
    //   <h1>hello there!</h1>
    // </div>
  );
};

export default App;