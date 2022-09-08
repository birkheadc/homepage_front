import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import MainWindow from './components/mainWindow/MainWindow';
import Navbar from './components/navbar/Navbar';

function App() {

  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <ActivityFeed />
          <ContactMeBox />
          <MainWindow />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
