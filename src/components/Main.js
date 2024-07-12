import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../theme';
import GoogleLensIcon from '../assets/images/search by image.png';
import GoogleVoiceIcon from '../assets/images/search by voice.png';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(140vh - 140px); 
  background-color: #232121; 
`;

const Logo = styled.img`
  width: 272px;
  height: 92px;
  margin-bottom: 30px;
  filter: brightness(0) invert(1); 
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

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #413D3D; 
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
  background-color:#413D3D ;
  color: white;
  border: none;
  border-radius: 4px;
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

const LanguageContainer = styled.div`
  margin-top: 20px; 
  color: #9aa0a6; 
  font-size: 14px;
  text-align: center;
`;

const Main = () => {
  const handleSearch = () => {
    // Define your search logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Logo src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
        <SearchContainer>
          <SearchIcon style={{ marginRight: '10px', color: '#9aa0a6' }} />
          <SearchInput type="text" placeholder="Search Google or type a URL" />
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
      </MainContainer>
    </ThemeProvider>
  );
};

export default Main;
