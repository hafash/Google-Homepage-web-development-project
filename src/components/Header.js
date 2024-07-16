import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import avatarImage from '../assets/images/Germain.JPG';
import searchLabImage from '../assets/images/search_lab.png';

// Import styled components for header layout and styling
import {
  HeaderContainer,
  IconsContainer,
  HeaderIcon,
  NavLink,
  AvatarContainer,
  SearchLabIcon
} from './styles';

const Header = () => (
  <HeaderContainer>
    {/* Container for icons and navigation links */}
    <IconsContainer>
      <NavLink href="#">Gmail</NavLink> {/* Gmail link */}
      <NavLink href="#">Images</NavLink> {/* Images link */}
      <HeaderIcon>
        <SearchLabIcon src={searchLabImage} alt="SearchLab" /> {/* SearchLab icon */}
      </HeaderIcon>
      <HeaderIcon>
        <AppsIcon style={{ fontSize: 28 }} /> {/* Apps icon */}
      </HeaderIcon>
      <HeaderIcon>
        <SearchIcon style={{ fontSize: 28 }} /> {/* Search icon */}
      </HeaderIcon>
      <HeaderIcon>
        <AvatarContainer>
          <Avatar alt="User Avatar" src={avatarImage} style={{ width: '100%', height: '100%' }} /> {/* User avatar */}
        </AvatarContainer>
      </HeaderIcon>
    </IconsContainer>
  </HeaderContainer>
);

export default Header;
