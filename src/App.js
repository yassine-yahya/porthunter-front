
import './App.css';
import React, { useState } from 'react';
import ScanForm from './components/ScanForm';
import ScanResults from './components/ScanResults'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DocsPage from './components/DocsPage';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';



function App() {
  const [results, setResults] = useState([]);
  


  return (
    <div className="App">
      <Navbar />
      
      <Hero />
      
      <ScanForm setResults={setResults} />
      <ScanResults results={results} />
      <About/>
      <DocsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
