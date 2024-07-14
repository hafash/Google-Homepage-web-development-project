import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (

    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <a href="#">Rwanda</a>
        </FooterLeft>
      </FooterContent>
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

const FooterContainer = styled.div`
  position: flexible;
  bottom: 0;
  width: 100%;
  background-color: #303134;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const FooterLeft = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

const FooterRight = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
  
`;

export default Footer;
