import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import Service from './components/Service';
import { Children } from 'react';
import ChoseUs from './components/ChoseUs';
import Testimonial from './components/testimonial';
import Capabilities from './components/Capabilities';
import SimplePricing from './components/SimplePricing';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <FirstSection />
    <Service/>
    <ChoseUs />
    <Testimonial />
    <Capabilities />
    <SimplePricing />
    <Blogs/>
    <Footer />
    
    </>
  );
}

export default App;
