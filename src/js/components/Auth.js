import React from 'react'

const Auth = (props) => {
  return (
    <div className='login-wrapper'>
      <form className='login-form'>
        <div>
          <label>
            <p className='login-label'>{'email'}</p>
            <input id='login_username' className='input-text input-text--login' type='text' />
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

export default Auth
