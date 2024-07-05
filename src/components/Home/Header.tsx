import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  return (
    <div className='header'>

      <img className='header-logo'
        src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' alt='Logo' />

      <div className='header-center'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>View Model</li>
          <li>Help me</li>
        </ul>
      </div>

      <div className='header-panel'>
        <ul>
          <li>
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