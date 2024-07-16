import React from 'react';
import { FooterContainer, FooterContent, FooterLeft, FooterRight } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      {/* Footer content with location link */}
      <FooterContent>
        <FooterLeft>
          <a href="#">Rwanda</a>
        </FooterLeft>
      </FooterContent>
      {/* Footer content with other links */}
      <FooterContent>
        <FooterLeft>
          <a href="#">About</a>
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
        </FooterLeft>
        <FooterRight>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
