import React, { useState, useEffect } from 'react';
import Notification from './components/notification';
import News from './components/news'
import Footer from './components/footer'
import { Header, RectanglesSection } from './components/header'
import './App.css';
const App = () => {


  return (
    <div className="App">
      <div> <Header /> </div>
      <div> <RectanglesSection /> </div>
    <div>
  <div> <Notification /></div>
  <div> <News /></div>
  <div> <Footer /> </div>
</div>

    {/* Rest of your application */}
    
  </div>
);
};

export default App;
