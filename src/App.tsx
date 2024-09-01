import { useState } from 'react'
import Header from './components/Header';
import BuildCalculator from './components/BuildCalculator';
import Footer from './components/Footer';
import './styles/app.scss';

function App() {

  return (
    <div id="app">
      <Header />
      <BuildCalculator />
      <Footer projectName="lies-of-p-calculator" />
    </div>
  );
}

export default App
