import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const navItems = [
    'Best Sellers',
    'Mobiles',
    'Customer Service',
    "Today's Deals",
    'Books',
    'Electronics',
    'Fashion',
    'Prime',
    'New Releases',
    'Home & Kitchen',
    'Amazon Pay',
    'Computers',
    'Sell',
    'Coupons',
  ]
  return (
    <div id="nav-main" class="nav-sprite">
      <div class="nav-left">
        <a
          href="javascript: void(0)"
          id="nav-hamburger-menu"
          role="button"
          aria-label="Open Menu"
          data-csa-c-type="widget"
          data-csa-c-slot-id="HamburgerMenuDesktop"
          data-csa-c-interaction-events="click"
          data-csa-c-id="aavear-8w27w9-x7qw9w-j7g2xm"
        >
          <i class="hm-icon nav-sprite"></i>
          <span class="hm-icon-label">All</span>
        </a>
      </div>
      {navItems.map((item) => (
        <div className="nav-fill">
          <a
            href="/gp/bestsellers/?ref_=nav_cs_bestsellers"
            class="nav-a"
            tabindex="0"
            data-csa-c-type="link"
            data-csa-c-slot-id="nav_cs_0"
            data-csa-c-content-id="nav_cs_bestsellers"
            data-csa-c-id="3dmmwt-8yu2mq-3zlt8k-q5xrz6"
          >
            {item}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Navbar
