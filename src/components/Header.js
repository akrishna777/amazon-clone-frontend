import React, { useContext, useState } from 'react'
import './Header.css'
import Logo from '../assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CartIcon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { StateContext, useStateValue } from '../Context/StateProvider'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import Flag from '../assets/india-flag-icon.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import NavFlyout from './NavFlyout'

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [showNavFlyout, setShowNavFlyout] = useState('none')

  return (
    <div className="header">
      <div className="header__nav__left">
        {/* <div className="header__logo__container"> */}
        {/* <Link to="/">
            <img src={Logo} className="header__logo" />
          </Link> */}
        <div id="nav-logo">
          <Link to="/">
            <a
              href=""
              id="nav-logo-sprites"
              class="nav-logo-link nav-progressive-attribute"
              aria-label="Amazon"
            >
              <span class="nav-sprite nav-logo-base">
                {/* <img className="nav-logo-base " src={Logo} alt="" srcset="" /> */}
              </span>
              <span
                id="logo-ext"
                class="nav-sprite nav-logo-ext nav-progressive-content"
              ></span>
              <span class="nav-logo-locale">.in</span>
            </a>
          </Link>
        </div>
        {/* </div> */}

        <div className="header__options__container">
          <div className="header__locationOption">
            <div>
              <LocationOnIcon />
            </div>
            <div className="header__locationOptionText">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">Select Your Address</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header__search">
        <select className="header__select">
          <option value="search-alias=aps">All</option>
        </select>
        <input className="header__searchInput" type="text" />

        <button className="header__searchIcon">
          <SearchIcon />
        </button>
      </div>

      <div className="header__nav__right">
        <div className="header__options__container">
          <div className="header__option">
            <div className="header__optionFlag">
              <img src={Flag} />
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>

        <div
          className="header__options__container"
          onMouseOver={() => setShowNavFlyout('block')}
          onMouseLeave={() => setShowNavFlyout('none')}
        >
          <div className="header__option">
            <span className="header__optionLineOne">
              {localStorage.getItem('profile')
                ? `Hello, ${
                    JSON.parse(localStorage.getItem('profile')).result.name
                  }`
                : `Hello, sign in`}
            </span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
        </div>

        <div className="header__options__container">
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
        </div>

        <div className="header__options__container">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__options__container">
          <Link to="/checkout">
            <div className="header__optionBasket header__option">
              <ShoppingCartIcon
                sx={{ fontSize: 'auto', position: 'relative' }}
              />
              <span className="header__optionLineTwo header__basketCount">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <NavFlyout
        showNavFlyout={showNavFlyout}
        setShowNavFlyout={setShowNavFlyout}
      />
    </div>
  )
}

export default Header
