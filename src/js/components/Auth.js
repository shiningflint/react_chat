import React from 'react'
import PropTypes from 'prop-types'

const Auth = (props) => {
  return (
    <div className='login-wrapper'>
      <form className='login-form' onSubmit={props.submit}>
        <div>
          <label>
            <p className='login-label'>{'email'}</p>
            <input
              id='login_email'
              name='loginEmail'
              className='input-text input-text--login'
              type='text'
              value={props.loginEmail}
              onChange={props.emailChange} />
          </label>
        </div>
        <div>
          <label>
            <p className='login-label'>{'password'}</p>
            <input
              id='login_password'
              name='loginPassword'
              className='input-text input-text--login'
              type='password'
              value={props.loginPassword}
              onChange={props.passwordChange} />
          </label>
        </div>
        <div className='center mt1'>
          <button onClick={props.submit} className='button-primary'>{'Login'}</button>
        </div>
      </form>
    </div>
  )
}

Auth.propTypes = {
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

export default Auth
