import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'
import './Signup.css'
import * as api from '../axios'

const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  })

  const [{ cart, user }, dispatch] = useStateValue()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const signup = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const { data } = await api.signUp(formData)

      dispatch({
        type: 'SET_USER',
        action: data,
      })

      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="signup__container">
        <div className="login__container__inner">
          <h1>Create Account</h1>
          {/* <div className="login__container__inner__form"> */}
          <form action="">
            <label>Your name</label>

            <input
              type="text"
              name="name"
              placeholder="First and last name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Mobile number</label>
            <div className="mobile">
              <div className="mobile__select">
                <select name="" id="">
                  <option value="+91">IN +91</option>
                </select>
              </div>
              <div className="mobile__select__arrow">
                <i className="a-icon a-icon-dropdown"></i>
              </div>

              <input
                type="text"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <label>Email</label>

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="password__info">
              <div className="password__info__inner">
                <div className="a-icon2"></div>
                <div class="a-alert-content">
                  Passwords must be at least 6 characters.
                </div>
              </div>
            </div>
            <div className="signup__button">
              <button className="login__signInButton " onClick={signup}>
                Continue
              </button>
            </div>

            <div className="login__extra">
              <div class="a-divider a-divider-section">
                <div class="a-divider-inner"></div>
              </div>
              <div class="a-row">
                Already have an account?&nbsp;
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <a class="a-link-emphasis">Sign in</a>
                </Link>
              </div>
              <div id="ab-reg-link-section" class="a-section">
                <div class="a-row">
                  Buying for work?&nbsp;
                  <a
                    id="ab-registration-link"
                    class="a-link-emphasis"
                    href="https://www.amazon.in/business/register/org/landing?ref_=ap_altreg_ab"
                  >
                    Create a free business account
                  </a>
                </div>
              </div>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>

      <hr />

      <div className="login__footer">
        <div className="login__divider">
          <div className="login__divider__inner"></div>
          <div className="login__footer__content">
            <span class="auth-footer-seperator"></span>

            <a
              class="a-link-normal"
              target="_blank"
              href="/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&amp;nodeId=200545940"
            >
              Conditions of Use
            </a>
            <span class="auth-footer-seperator"></span>

            <a
              class="a-link-normal"
              target="_blank"
              href="/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&amp;nodeId=200534380"
            >
              Privacy Notice
            </a>
            <span class="auth-footer-seperator"></span>

            <a class="a-link-normal" target="_blank" href="/help">
              Help
            </a>
            <span class="auth-footer-seperator"></span>
          </div>
          <div class="login__footer__content2">
            <span class="login__footer_content2__span">
              © 1996-2022, Amazon.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
