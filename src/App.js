import logo from './logo.svg';
import Header from './components/Header.js';
import LocalizedStrings from 'react-localization';
import Localization from './localization/Localization';

import './App.css';

function App() {

  const strings = new LocalizedStrings(Localization);
  strings.setLanguage("en");

  return (
    <div className="App">
      <Header strings={strings}/>
    </div>
  );
}

export default App;
