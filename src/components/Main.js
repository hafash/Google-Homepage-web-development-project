
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useGetProductByIdQuery } from '../app/service/API';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../theme';
import GoogleLensIcon from '../assets/images/search by image.png';
import GoogleVoiceIcon from '../assets/images/search by voice.png';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 140px);
  background-color: #232121;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 80%;
  max-width: 272px;
  height: auto;
  margin-bottom: 30px;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12px;
  max-width: 560px;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 20px 10px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  background-color: #232121;
`;

const SearchInput = styled.input`
  position: flexible;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  caret-color: white;
`;

const VoiceIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-left: 210px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LensIcon = styled.img`
  width: 54px;
  height: 54px;
  margin-left: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #413d3d;
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const FeelingLuckyButton = styled.button`
  padding: 10px 20px;
  background-color: #413d3d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LanguageContainer = styled.div`
  margin-top: 20px;
  color: #9aa0a6;
  font-size: 14px;
  text-align: center;
`;

const ResultsContainer = styled.div`
  color: white;
  margin-top: 20px;
`;

const Main = () => {
  const [productId, setProductId] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { data, isError, isLoading, refetch } = useGetProductByIdQuery(productId, { skip: !productId });

  const handleSearch = () => {
    if (productId) {
      refetch();
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setProductId(value);
    if (!value) {
      setShowResults(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Logo src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
        <SearchContainer>
          <SearchIcon style={{ marginRight: '10px', color: '#9aa0a6' }} />
          <SearchInput
            type="text"
            placeholder="Enter any number"
            value={productId}
            onChange={handleInputChange}
          />
          <VoiceIcon src={GoogleVoiceIcon} alt="Google Voice" />
          <LensIcon src={GoogleLensIcon} alt="Google Lens" />
        </SearchContainer>
        <ButtonContainer>
          <SearchButton onClick={handleSearch}>Google Search</SearchButton>
          <FeelingLuckyButton>I'm Feeling Lucky</FeelingLuckyButton>
        </ButtonContainer>
        <LanguageContainer>
          Google offered in: <a href="#">Français</a> <a href="#">Kiswahili</a> <a href="#">Kinyarwanda</a>
        </LanguageContainer>
        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>We got an error</h1>}
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
