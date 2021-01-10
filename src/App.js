import React, { useState, useEffect } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';

const App = props => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    setLanguage('tr');
  }, []);

  const SwitchLanguageHandler = (language) => {
    setLanguage(language);
  }

  return (
    <div className="App">
      <Layout language={language} clicked={{ SwitchLanguageHandler: (language) => SwitchLanguageHandler(language) }}>
        <LandingPage language={language}/>
      </Layout>
    </div>
  );
}

export default App;
