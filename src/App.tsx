import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/app.scss';

function App() {

  return (
    <body id="app">
      <Header />
      <Footer projectName="lies-of-p-calculator" />
    </body>
  );
}

export default App
