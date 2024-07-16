import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyles';

// Import styled components for App container and toggle button
import { AppContainer, ToggleThemeButton } from './components/styles';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set initial state to true for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle /> {/* Global styles */}
        <AppContainer>
          <Header /> {/* Header component */}
          <Main /> {/* Main content component */}
          <Footer /> {/* Footer component */}
        </AppContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
