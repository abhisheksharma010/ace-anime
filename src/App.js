import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home  from './components/Home'

// import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
         </div>
  );
}

export default App;
