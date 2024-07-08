import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }
  const handleCartClick = () => {
    navigate('/cart');
  }

  return (
    <div className='header'>
      <img className='header-logo'
        src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' alt='Logo' />

      <div className='header-center'>
        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>View Model</li>
          <li>Help me</li>
        </ul>
      </div>

      <div className='header-panel'>
        <ul>
          <li onClick={handleCartClick}>
            <FontAwesomeIcon icon={faList} />
          </li>
          <li>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
