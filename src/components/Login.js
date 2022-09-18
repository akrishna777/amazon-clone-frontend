import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'
import * as api from '../axios'

import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [{ cart, user }, dispatch] = useStateValue()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const signIn = async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      const { data } = await api.signIn(formData)

      dispatch({
        type: 'SET_USER',
        payload: data,
      })

      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
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

      <div className="login__container">
        <div className="login__container__inner">
          <h1>Sign-in</h1>
          {/* <div className="login__container__inner__form"> */}
          <form action="">
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
              value={formData.password}
              onChange={handleChange}
            />

            <button className="login__signInButton " onClick={signIn}>
              Sign-in
            </button>
          </form>
          {/* </div> */}

          <p>
            By continuing, you agree to Amazon's{' '}
            <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
              Privacy Notice.
            </a>
          </p>
        </div>
      </div>

      {error ? <p style={{ color: 'red' }}>{error}</p> : null}

      <hr />

      <div className="outer">
        <h5>
          <span>New to Amazon?</span>
        </h5>

        <button
          className="login__registerButton"
          onClick={() => navigate('/register')}
        >
          Create your Amazon Account
        </button>
      </div>

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

export default Login
