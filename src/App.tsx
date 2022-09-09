import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import MainWindow from './components/mainWindow/MainWindow';
import Navbar from './components/navbar/Navbar';

function App() {

  function handleChangeTheme():void {
    let theme: string = getCurrentTheme();
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
    localStorage.setItem('birkheadc_homepage-theme', theme);
    loadTheme(theme);
  }

  function getCurrentTheme(): string {
    let localTheme: string | null = localStorage.getItem('birkheadc_homepage-theme');
    if (localTheme) return localTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function loadTheme(theme: string) {
    const root = document.querySelector(':root');
    if (root) root.setAttribute('color-scheme', theme);
  }

  loadTheme(getCurrentTheme());

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
