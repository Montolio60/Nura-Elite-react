import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Download from './components/download/Download';
import Payment from './components/payment/Payment';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Technology from './components/technology/Technology';
import Location from './components/location/Location';
import Cottages from './components/cottages/Cottages';
import Benefits from './components/benefits/Benefits';
import Advantages from './components/advantages/Advantages';

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Cottages/>
    <Location/>
    <Advantages/>
    <Benefits/>
    <Technology/>
    <Download/>
    <Payment/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
