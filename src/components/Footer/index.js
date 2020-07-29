import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'
import Logo2 from '../../assets/img/Logo2.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
       <img className="Logo" src={Logo2} alt="Logo da AluraFlix" />
      </a>
      <p>

      <a >
      
        </a>


        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
