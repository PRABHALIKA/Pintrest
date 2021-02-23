import { Component } from 'react';
import './App.css';
import Header from "./Components/Header"
import MainBoard from "./Components/MainBoard"
import unsplash from "./api/unsplash"

function App() {
  return (
    <div className="app">
      <Header></Header>
      <MainBoard></MainBoard>      
    </div>
  );
}

export default App;
