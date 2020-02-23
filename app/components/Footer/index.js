import React from 'react';
import {
  FooterWrapper,
  StyledText,
  StyledRight,
  StyledLeft,
} from './styledComponent';

const Footer = () => (
  <FooterWrapper>
    <StyledLeft>
      <div>CodeFix</div>
      <StyledText>|</StyledText>
      <div>Don&#39;t fix bugs later; fix them now.</div>
    </StyledLeft>
    <StyledRight>
      <div>{`© ${new Date().getFullYear()} CodeFix, LLC`}</div>
      <StyledText>|</StyledText>
      <div>All rights reserved</div>
    </StyledRight>
  </FooterWrapper>
);

export default Footer;
