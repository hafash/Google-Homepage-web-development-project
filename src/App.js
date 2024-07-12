
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fff;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    </>
  </ThemeProvider>
);

export default App;
