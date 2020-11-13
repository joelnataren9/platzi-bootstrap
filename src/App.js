import React from 'react';

import './App.css';
import BecomeSpeaker from './components/BecomeSpeaker';
import DateTime from './components/DateTime';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Speakers from './components/Speakers';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Speakers />
      <DateTime />
      <BecomeSpeaker />
      <Footer />
    </React.Fragment>
  );
}

export default App;
