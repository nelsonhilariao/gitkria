import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <div align="center">
        <a href="https://github.com/nelsonhilariao" />

      </div>

      <div className='contact'>
        <div>
          <a href="https://www.youtube.com/channel/UCrFbNbTJ4qg9c8x2dxUrlgw" target="_blank">
            <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></img>
          </a>
        </div>
        <div>
          <a href="https://instagram.com/nelsonhilariao" target="_blank">
            <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" />
          </a>
        </div>
        <div>
          <a href="https://discord.gg/SmeQfwwA" target="_blank">
            <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank" />
          </a>
        </div>
        <div>
          <a href="mailto:nelson.hilariao@oceantek.com.br">
            <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nelson-hilariao/" target="_blank">
            <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
          </a>
        </div>
      </div>
      <div>
        <p className='copy-right' >Copyright © 2023 GitKRIA</p>
      </div>
    </footer >
  );
}

export default Footer;