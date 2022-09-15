import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fileURLToPath } from 'url';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import MainWindow from './components/mainWindow/MainWindow';
import Navbar from './components/navbar/Navbar';
import Language from './settings/language/Language';
import Theme from './settings/theme/Theme';

function App() {

  Theme.loadTheme();

  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <div className='left-column-wrapper'>
            <ActivityFeed />
            <ContactMeBox />
          </div>
          <MainWindow />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
