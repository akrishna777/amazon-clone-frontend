import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'
import { countryListAllIsoData } from './CountryList'
import './DeliveryAddress.css'
import { states } from './StateList'

const DeliveryAddress = () => {
  const navigate = useNavigate()
  const [{ cart, user }, dispatch] = useStateValue()

  const [formData, setFormData] = useState({
    country: '',
    name: '',
    mobile: '',
    pincode: '',
    address: { house: '', area: '', landmark: '', city: '', state: '' },
    addressType: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch({ type: 'SET_ADDRESS', payload: formData })

    if (!localStorage.getItem('profile')) {
      navigate('/login')
    } else {
      navigate('/payment')
    }
  }

  return (
    <div className="delivery__container">
      <div className="delivery__container__header">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
          alt="Select a Shipping Address - Amazon.in Checkout"
          data-testid=""
        />
      </div>
      <div className="delivery__container__body">
        <h1>Select a delivery address</h1>
        <div class="a-divider a-divider-section">
          <div class="a-divider-inner"></div>
        </div>

        <div className="delivery__new__address">
          <h3>Add a new address</h3>
          <div className="delivery__autofill">
            <div className="delivery__autofill__inner">
              <div className="delivery__autofill__inner__p">
                <p>Save time. Autofill your current location.</p>
              </div>
              <div className="delivery__autofill__inner__button">
                <button>Autofill</button>
              </div>
            </div>
          </div>

          <div className="delivery__form">
            <form action="" onSubmit={handleSubmit}>
              <div className="delivery__form__field">
                <label htmlFor="">Country/Region</label>
                <select
                  name="country"
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  value={formData.country}
                >
                  {countryListAllIsoData.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">Full name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                />
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">Mobile number</label>
                <input
                  type="text"
                  name="mobile"
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  value={formData.mobile}
                />
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="6 digit [0-9] PIN code"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                />
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">
                  Flat, House no., Building, Company, Apartment
                </label>
                <input
                  type="text"
                  name="house"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, house: e.target.value },
                    })
                  }
                  value={formData.address.house}
                />
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">Area, Street, Sector, Village</label>
                <input
                  type="text"
                  name="area"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, area: e.target.value },
                    })
                  }
                  value={formData.address.area}
                />
              </div>
              <div className="delivery__form__field">
                <label htmlFor="">Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  placeholder="E.g. near apollo hospital"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        landmark: e.target.value,
                      },
                    })
                  }
                  value={formData.address.landmark}
                />
              </div>
              <div className="delivery__form__field">
                <div className="delivery__form__field__inner">
                  <div className="delivery__form__field__inner1">
                    <label htmlFor="">Town/City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="E.g. near apollo hospital"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            city: e.target.value,
                          },
                        })
                      }
                      value={formData.address.city}
                    />
                  </div>
                  <div className="delivery__form__field__inner2">
                    <label htmlFor="">State</label>
                    <select
                      name="state"
                      id=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            state: e.target.value,
                          },
                        })
                      }
                      value={formData.address.state}
                    >
                      {states.map((item) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="delivery__form__bottom__section">
                <h3>Add delivery instructions</h3>
                <p>
                  Preferences are used to plan your delivery. However, shipments
                  can sometimes arrive early or later than planned.
                </p>
                <div className="delivery__form__field">
                  <label htmlFor="">Address Type</label>
                  <select
                    name="addressType"
                    id=""
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        addressType: e.target.value,
                      })
                    }
                    value={formData.addressType}
                  >
                    <option value="Select an Address Type">
                      Select an Address Type
                    </option>
                    <option value="home">Home (7 am - 9 pm delivery)</option>
                    <option value="office">
                      Office/Commercial (10 AM - 6 PM delivery)
                    </option>
                  </select>
                </div>
              </div>

              <button className="delivery__form__submit" type="submit">
                Use this address
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="a-divider a-divider-section" style={{ marginTop: '50px' }}>
        <div class="a-divider-inner"></div>
      </div>
      <p class="a-size-small a-text-center a-color-secondary" data-testid="">
        <a
          href="/gp/help/customer/display.html/ref=ox_shipaddress_condition_of_use?ie=UTF8&amp;nodeId=200545940&amp;pop-up=1"
          onclick="window.open(this.href,'AmazonHelp','width=340,height=340,resizable=1,scrollbars=1,toolbar=1,status=1').focus();false;"
          target="AmazonHelp"
        >
          Conditions of Use
        </a>{' '}
        |{' '}
        <a
          href="/gp/help/customer/display.html/ref=ox_shipaddress_page_privacy?ie=UTF8&amp;nodeId=200522700&amp;pop-up=1"
          onclick="window.open(this.href,'AmazonHelp','width=340,height=340,resizable=1,scrollbars=1,toolbar=1,status=1').focus();false;"
          target="AmazonHelp"
        >
          Privacy Notice
        </a>{' '}
        © 2012-2022, Amazon.com, Inc. and its affiliates
      </p>
    </div>
  )
}

export default DeliveryAddress
