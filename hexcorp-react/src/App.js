import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SideNav from './SideNav';
import './App.css';

function App() {
  const [navLinks] = useState([
    {'text': 'Services', 'href': '#'},
    {'text': 'About the Company', 'href': '#'},
    {'text': 'Projects', 'href': '#'},
    {'text': 'Media', 'href': '#'},
    {'text': 'Contact Us', 'href': '#'}
  ]);

  return (
    <div className="App">
    <Header navLinks={navLinks} />
    <Main />
    <Footer />
    <SideNav navLinks={navLinks} />
    </div>
  );
}

export default App;
