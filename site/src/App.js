import React, { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Switch, Redirect,
  Route
} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./style/globalStyles";
import { lightTheme, darkTheme } from "./style/Themes"

import AppHeader from './component/AppHeader/AppHeader.jsx';
import Footer from './component/Footer/Footer';

import SearchPage from "./pages/SearchPage";
import CoursePage from "./pages/CoursePage/CoursePage.jsx";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false);

  const handleClick = () => {
    const altMode = !darkMode
    localStorage.setItem('darkMode', altMode)
    setDarkMode(altMode);
  }

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
        <AppHeader darkModeToggle={handleClick} darkModeState={darkMode}/>  
            <div style={{display: "flex", padding: "4rem 3rem"}}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/search/courses" />
                </Route>

                  <Route path="/search/:index" component={SearchPage} />
                  <Route path="/course/:id" component={CoursePage} />
                  <Route component={ErrorPage} />
              </Switch>
            </div>

          <Footer/>
      </ThemeProvider>
    </Router>
  )
}
