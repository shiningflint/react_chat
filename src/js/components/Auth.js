import React from 'react'
import PropTypes from 'prop-types'

const Auth = (props) => {
  return (
    <div className='login-wrapper'>
      <form className='login-form'>
        <div>
          <label>
            <p className='login-label'>{'email'}</p>
            <input id='login_username' className='input-text input-text--login' type='text' value={props.email} />
          </label>
        </div>
        <div>
          <label>
            <p className='login-label'>{'password'}</p>
            <input id='login_password' className='input-text input-text--login' type='password' />
          </label>
        </div>
        <div className='center mt1'>
          <button className='button-primary'>{'Login'}</button>
        </div>
      </form>
    </div>
  )
}

Auth.propTypes = {
  email: PropTypes.string.isRequired,
}

export default Auth
