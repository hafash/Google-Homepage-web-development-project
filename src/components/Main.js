import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useGetProductByIdQuery } from '../app/service/API';
import SearchIcon from '@mui/icons-material/Search';
import { lightTheme, darkTheme } from '../theme';
import GoogleLensIcon from '../assets/images/search by image.png';
import GoogleVoiceIcon from '../assets/images/search by voice.png';

// Import styled components for various UI elements
import {
  MainContainer,
  Logo,
  SearchContainer,
  SearchInput,
  ThemeToggleButton,
  VoiceIcon,
  LensIcon,
  ButtonContainer,
  SearchButton,
  FeelingLuckyButton,
  LanguageContainer,
  ResultsContainer
} from './styles';

const Main = () => {
  // State variables for product ID, result visibility, and theme mode
  const [productId, setProductId] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Validation function for product ID
  const isValidProductId = (id) => !isNaN(id) && id > 0;

  // Query hook to fetch product data by ID, refetching only if productId is valid
  const { data, isError, isLoading, refetch } = useGetProductByIdQuery(productId, { skip: !isValidProductId(productId) });

  // Handler for search button click
  const handleSearch = () => {
    if (isValidProductId(productId)) {
      console.log('Fetching product with ID:', productId); // Log the search action
      refetch(); // Refetch data for the provided product ID
      setShowResults(true);
    } else {
      console.error('Invalid product ID:', productId); // Log an error for invalid product ID
      setShowResults(false);
    }
  };

  // Handler for input change, updating product ID state
  const handleInputChange = (e) => {
    const value = e.target.value;
    setProductId(value);
    if (!value) {
      setShowResults(false);
    }
  };

  // Toggle function for theme mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <MainContainer>
        {/* Google logo */}
        <Logo
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
          theme={isDarkMode ? darkTheme : lightTheme}
        />
        {/* Search input container */}
        <SearchContainer>
          <SearchIcon style={{ marginRight: '10px', color: '#9aa0a6' }} />
          <SearchInput
            type="text"
            placeholder="Enter a product ID"
            value={productId}
            onChange={handleInputChange}
          />
          <VoiceIcon src={GoogleVoiceIcon} alt="Google Voice" />
          <LensIcon src={GoogleLensIcon} alt="Google Lens" />
        </SearchContainer>

        {/* Toggle button for theme mode */}
        <ThemeToggleButton onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </ThemeToggleButton>
        {/* Buttons for search and "I'm Feeling Lucky" */}
        <ButtonContainer>
          <SearchButton onClick={handleSearch}>Google Search</SearchButton>
          <FeelingLuckyButton>I'm Feeling Lucky</FeelingLuckyButton>
        </ButtonContainer>
       
        <LanguageContainer>
          Google offered in: <a href="#">Français</a> <a href="#">Kiswahili</a> <a href="#">Kinyarwanda</a>
        </LanguageContainer>
        {/* Conditional rendering for loading, error, and result states */}
        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>Product not found</h1>}
        {showResults && data && (
          <ResultsContainer>
            <h1>{data?.title}</h1>
            <h2>{data?.brand}</h2>
            <h3>{data?.category}</h3>
            <h4>{data?.description}</h4>
            <h5>{data?.warrantyInformation}</h5>
            <h6>{data?.shippingInformation}</h6>
            <h7>{data?.category}</h7>
          </ResultsContainer>
        )}
      </MainContainer>
    </ThemeProvider>
  );
};

export default Main;
