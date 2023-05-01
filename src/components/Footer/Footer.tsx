import React from 'react';

import ghLogo from '../../assets/images/gh_logo.png';
import ramLogo from '../../assets/images/ram_logo.gif';
import rssLogo from '../../assets/images/rss_logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/bromotdi" className="footer__link">
        <img className="ghLogo" src={ghLogo} alt="GitHub logo" />
      </a>
      <img className="footer__logo" src={ramLogo} alt="Rick and Morty logo" />
      <a href="https://rs.school/" className="footer__link">
        <img className="rssLogo" src={rssLogo} alt="RSS logo" />
      </a>
    </footer>
  );
};

export default Footer;
