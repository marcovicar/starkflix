import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Logo" src={Logo} alt="StarkFlix Logo"/>
      </a>
      <p>
        Prótotipo de uma NetFlix
      </p>
    </FooterBase>
  );
}

export default Footer;