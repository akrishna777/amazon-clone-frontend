import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext, useStateValue } from '../Context/StateProvider'
import './NavFlyout.css'

const NavFlyout = ({ showNavFlyout, setShowNavFlyout }) => {
  const navigate = useNavigate()
  const [{ cart, user }, dispatch] = useStateValue()
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }
  return (
    <div
      id="nav-flyout-accountList"
      class="nav-coreFlyout nav-flyout"
      style={{
        display: showNavFlyout,
        position: 'absolute',
        top: '52px',
        left: '700px',
      }}
      onMouseOver={() => setShowNavFlyout('block')}
      onMouseLeave={() => setShowNavFlyout('none')}
    >
      <div
        class="nav-arrow"
        style={{ position: 'absolute', left: '361.521px' }}
      >
        <div class="nav-arrow-inner"></div>
      </div>
      <div class="nav-template nav-flyout-content">
        <div id="nav-al-container">
          {!localStorage.getItem('profile') && (
            <div id="nav-al-signin">
              <div
                id="nav-flyout-ya-signin"
                class="nav-flyout-content nav-flyout-accessibility"
              >
                <Link to="/login">
                  <a
                    href=""
                    rel="nofollow"
                    class="nav-action-button"
                    data-nav-role="signin"
                    data-nav-ref="nav_signin"
                  >
                    <span class="nav-action-inner">Sign in</span>
                  </a>
                </Link>
                <div
                  id="nav-flyout-ya-newCust"
                  class="nav_pop_new_cust nav-flyout-content nav-flyout-accessibility"
                >
                  New customer?{' '}
                  <Link to="/register">
                    <a href="" rel="nofollow" class="nav-a">
                      Start here.
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div
            id="nav-al-wishlist"
            class="nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility"
          >
            <div class="nav-title" id="nav-al-title">
              Your Lists
            </div>
            <a
              href="/hz/wishlist/ls?triggerElementID=createList&amp;ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"
              class="nav-link nav-item"
            >
              <span class="nav-text">Create a Wish List</span>
            </a>{' '}
            <a
              href="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl"
              class="nav-link nav-item"
            >
              <span class="nav-text">Wish from Any Website</span>
            </a>{' '}
            <a
              href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br"
              class="nav-link nav-item"
            >
              <span class="nav-text">Baby Wishlist</span>
            </a>{' '}
            <a
              href="/discover/?ref_=nav_ListFlyout_sbl"
              class="nav-link nav-item"
            >
              <span class="nav-text">Discover Your Style</span>
            </a>{' '}
            <a
              href="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_in"
              class="nav-link nav-item"
            >
              <span class="nav-text">Explore Showroom</span>
            </a>
          </div>
          <div
            id="nav-al-your-account"
            class="nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility"
          >
            <div class="nav-title">Your Account</div>
            <a
              href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Account</span>
            </a>{' '}
            <a
              id="nav_prefetch_yourorders"
              href="/gp/css/order-history?ref_=nav_AccountFlyout_orders"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Orders</span>
            </a>{' '}
            <a
              href="/hz/wishlist/ls?requiresSignIn=1&amp;ref_=nav_AccountFlyout_wl"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Wish List</span>
            </a>{' '}
            <a
              href="/gp/yourstore?ref_=nav_AccountFlyout_recs"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Recommendations</span>
            </a>{' '}
            <a
              href="/gp/primecentral?ref_=nav_AccountFlyout_prime"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Prime Membership</span>
            </a>{' '}
            <a
              href="/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&amp;source=nav_linktree&amp;token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Prime Video</span>
            </a>{' '}
            <a
              href="/auto-deliveries?ref_=nav_AccountFlyout_sns"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Subscribe &amp; Save Items</span>
            </a>{' '}
            <a
              href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions"
              class="nav-link nav-item"
            >
              <span class="nav-text">Memberships &amp; Subscriptions</span>
            </a>{' '}
            <a
              href="/gp/browse.html?node=21102587031&amp;ref_=nav_ya_flyout_b2b_reg"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Amazon Business Account</span>
            </a>{' '}
            <a
              href="/b/?node=2838698031&amp;ld=AZINSOAYAFlyout&amp;ref_=nav_AccountFlyout_sell"
              class="nav-link nav-item"
            >
              <span class="nav-text">Your Seller Account</span>
            </a>{' '}
            <a
              href="/hz/mycd/myx?ref_=nav_AccountFlyout_myk"
              class="nav-link nav-item"
            >
              <span class="nav-text">Manage Your Content and Devices</span>
            </a>
            {localStorage.getItem('profile') && (
              <a href="" class="nav-link nav-item" onClick={logout}>
                <span class="nav-text">Sign out</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div class="nav-flyout-buffer-left"></div>
      <div class="nav-flyout-buffer-right"></div>
      <div class="nav-flyout-buffer-top"></div>
      <div class="nav-flyout-buffer-bottom"></div>
    </div>
  )
}

export default NavFlyout
