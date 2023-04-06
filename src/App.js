import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <main className="App">
        <Header />
      </main>


    </BrowserRouter>
  );
}

export default App;
