import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className='log'>

        <h1 className='text-center'>Login</h1>
        <p className='text-center mt-3'>Don't have an account? <span className='account'>Create a free account</span></p>
        <div className='lpage'>

          <div>
            <p className='usern'>Enter Username</p>
            <input type="text" placeholder='Enter username' className='usernnm' />
          </div>
          <div>
            <div className='password'>
              <p className='usern'>Enter Password</p>
              <p className='usern'>Forgot password?</p>

            </div>
            <input type="text" placeholder='Enter Password' className='usernnm' />
          </div>
        </div>
        <div className='btnlogin'>

      <a className='btnl'>LogIn</a>
        </div>
      </div>
    </div>
  )
}

export default Login;
