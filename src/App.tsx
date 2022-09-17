import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import Footer from './components/footer/Footer';
import MainWindow from './components/mainWindow/MainWindow';
import Navbar from './components/navbar/Navbar';
import Language from './settings/language/Language';
import Theme from './settings/theme/Theme';

function App() {

  // #region Language Settings
  const [language, setLanguage] = useState<string>(document.documentElement.lang);
  const handleChangeLanguage = (lang: string):void => {
    setLanguage(lang);
    Language.handleChangeLanguage(lang);
  }
  // #endregion

  Theme.loadTheme();

  return(
    <div className='app-wrapper'>
      <BrowserRouter>
        <Navbar handleChangeLanguage={handleChangeLanguage} language={language}/>
        <div>
          <div className='left-column-wrapper'>
            <ActivityFeed />
            <ContactMeBox />
          </div>
          <MainWindow language={language}/>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
