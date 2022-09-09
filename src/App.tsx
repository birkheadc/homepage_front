import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import MainWindow from './components/mainWindow/MainWindow';
import Navbar from './components/navbar/Navbar';

function App() {

  function handleChangeTheme():void {
    console.log("Change theme now.");
  }

  return(
    <div>
      <BrowserRouter>
        <Navbar handleChangeTheme={handleChangeTheme}/>
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
