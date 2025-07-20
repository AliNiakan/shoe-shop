import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };
  const handleCartClick = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  };
  const handleViewModelsClick = () => {
    navigate('/models');
    setIsMenuOpen(false);
  };
  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };
  const handleUserSettingClick = () => {
    navigate('/user-setting');
    setIsMenuOpen(false);
  };

  // Admin routes :
  const handleAdminPanelClick = () => {
    navigate('/admin-dashbord');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <img onClick={handleHomeClick} className='header-logo'
        src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' alt='Logo' />
      <div className='header-center'>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li onClick={handleHomeClick}>{t('home')}</li>
          <li>{t('contactUs')}</li>
          <li onClick={handleViewModelsClick}>{t('viewModels')}</li>
          <li onClick={handleLoginClick}>{t('login')}</li>
          <li onClick={handleAdminPanelClick} className='gold'>{t('adminPanel')}</li>
        </ul>
      </div>

      <div className='header-panel'>
        <LanguageSelector />
        <ul>
          <li onClick={handleUserSettingClick}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li onClick={handleCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
      </div>

      <div className='burger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
