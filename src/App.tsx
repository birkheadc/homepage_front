import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Api from './api/Api';
import { AppData } from './api/AppData';
import './App.css';
import ActivityFeed from './components/activityFeed/ActivityFeed';
import ContactMeBox from './components/contactMeBox/ContactMeBox';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import MainWindow from './components/mainWindow/MainWindow';
import BlogsPreview from './components/navbar/blogsPreview/BlogsPreview';
import Navbar from './components/navbar/Navbar';
import ProjectsPreview from './components/navbar/projectsPreview/ProjectsPreview';
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

  // #region Theme Settings
  const [theme, setTheme] = useState<string>(Theme.getCurrentTheme());
  const handleChangeTheme = (): void => {
    Theme.handleChangeTheme();
    setTheme(Theme.getCurrentTheme());
  }
  // #endregion

  // #region Load Data from Apis
  const [isLoading, setLoading] = useState<boolean>(true);
  const [appData, setAppData] = useState<AppData>(new AppData());
  async function fetchData(): Promise<void> {
    let data = await Api.fetchAppData();
    setLoading(false);
    setAppData(data);
  }
  // #endregion

  // #region Initialize App
  Theme.loadTheme();
  if (isLoading === true) {
    fetchData();
  }
  // #endregion

  const [width, setWidth] = React.useState(window.innerWidth);
  const MOBILE_WIDTH = 800;

  React.useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
})

  if (isLoading === true) {
    return (
      <Loading />
    );
  }

  return(
    <div className='app-wrapper' id='app-wrapper'>
      <BrowserRouter>
        <Navbar isMobile={width <= MOBILE_WIDTH} handleChangeLanguage={handleChangeLanguage} language={language} handleChangeTheme={handleChangeTheme} theme={theme} projectsPreview={<ProjectsPreview language={language} projects={appData.projects}/>} blogsPreview={<BlogsPreview blurbs={appData.blurbs}/>}/>
        <div>
          <div className='left-column-wrapper'>
            <ActivityFeed language={language} activities={appData.activities}/>
            <ContactMeBox />
          </div>
          <MainWindow blurbs={appData.blurbs} language={language} projects={appData.projects}/>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
