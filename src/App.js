import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer';
import LocalizedStrings from 'react-localization';
import Localization from './localization/Localization';

import './App.css';
import React from 'react';

function App() {

  const [strings, setStrings] = React.useState(new LocalizedStrings(Localization));
  //const strings = new LocalizedStrings(Localization);


  const setLanguage = (code) =>{
    console.log(code,strings);
    strings.setLanguage("Nl")
    console.log(strings.getLanguage());
    setStrings(strings.setLanguage("Nl"))
  }


  return (
    <div onClick={() =>{setLanguage("Nl")}} className="App">
      <Header strings={strings} setLanguage={setLanguage}/>
      <Footer strings={strings}/>
    </div>
  );
}

export default App;
