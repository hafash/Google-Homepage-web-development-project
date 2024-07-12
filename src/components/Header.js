import React from 'react';
import styled from 'styled-components';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import avatarImage from '../assets/images/Germain.JPG';
import searchLabImage from '../assets/images/search_lab.png';


const SearchLabIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 100;
  &:hover {
    opacity: 0.8; 
  }
`;

const HeaderContainer = styled.header`
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

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderIcon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

const NavLink = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const AvatarContainer = styled.div`
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

const Header = () => (
  <HeaderContainer>
    <IconsContainer>
      <NavLink href="#">Gmail</NavLink>
      <NavLink href="#">Images</NavLink>

      <HeaderIcon>
        <SearchLabIcon src={searchLabImage} alt="SearchLab" />
      </HeaderIcon>
      <HeaderIcon>
        <AppsIcon style={{ fontSize: 28 }} />
      </HeaderIcon>
      <HeaderIcon>
        <SearchIcon style={{ fontSize: 28 }} />
      </HeaderIcon>
      <HeaderIcon>
        <AvatarContainer>
          <Avatar alt="User Avatar" src={avatarImage} style={{ width: '100%', height: '100%' }} />
        </AvatarContainer>
      </HeaderIcon>
    </IconsContainer>
  </HeaderContainer>
);

export default Header;
