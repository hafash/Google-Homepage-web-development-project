import styled from 'styled-components';
import { lightTheme, darkTheme } from '../theme';

// Styled component for Footer layout and styling
export const FooterContainer = styled.div`
  position: flexible;
  bottom: 0;
  width: 100%;
  background-color: #303134;
  color: white;
`;

// Styled component for each section within the footer for layout and spacing
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

// Styled component for left-aligned content in the footer (e.g., links)
export const FooterLeft = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

// Styled component for right-aligned content in the footer (e.g., links)
export const FooterRight = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

// Styled component for the main container of the application, using flex column layout
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Styled component for a toggle theme button, positioned fixed at the bottom right
export const ToggleThemeButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

// Styled component for the search icon image, with hover effect for opacity change
export const SearchLabIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 100;
  &:hover {
    opacity: 0.8; 
  }
`;

// Styled component for the header container, positioned absolutely at the top right
export const HeaderContainer = styled.header`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background: transparent;
  z-index: 1000; 
  width: 100%;
`;

// Styled component for container of icons in the header
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for individual icons in the header, with hover effect for opacity change
export const HeaderIcon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for navigation links, styled as anchor tags
export const NavLink = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Styled component for the avatar container, styled as a circular gradient background
export const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), 
                    linear-gradient(to right, #4285f4, #ea4335, #fbbc05, #34a853);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

// Styled component for the main container of the application content, with centered layout
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(140vh - 140px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// Styled component for the logo image, with conditional filter based on theme for brightness invert
export const Logo = styled.img`
  width: 80%;
  max-width: 272px;
  height: auto;
  margin-bottom: 30px;
  filter: ${({ theme }) => (theme === lightTheme ? 'none' : 'brightness(0) invert(1)')};
  transition: filter 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

// Styled component for the search container, with flexible layout and border styling
export const SearchContainer = styled.div`
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
  background-color: ${({ theme }) => theme.colors.background};
`;

// Styled component for the search input field, with flexible sizing and theme-based styling
export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.text};
  caret-color: ${({ theme }) => theme.colors.text};
`;

// Styled component for the theme toggle button, with styled background and hover effect
export const ThemeToggleButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  position: flex;
  top: 20px; 
  left: 20px; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for the voice search icon image, with hover effect for opacity change
export const VoiceIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for the lens search icon image, with hover effect for opacity change
export const LensIcon = styled.img`
  width: 54px;
  height: 54px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for a container of buttons, centered and with flexible layout
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

// Styled component for a search button, with styled background and hover effect
export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for a "Feeling Lucky" button, with styled background and hover effect
export const FeelingLuckyButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for a container of language information, styled with color and font size
export const LanguageContainer = styled.div`
  margin-top: 20px;
  color: #9aa0a6;
  font-size: 14px;
  text-align: center;
`;

// Styled component for a container of search results, styled with text color and margin
export const ResultsContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
`;
