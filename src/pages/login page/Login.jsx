import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {GiPadlock} from 'react-icons/gi'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">

        <div className="top">
          <h1 className="title">Login</h1>
            <select className="select" name="active" id="active">
              <option value="user">User</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>

        </div>

        <div className="center">
          <form className="form">
            <div className="formInput">
              <input type="text" placeholder="Enter your username" id="username" />
              <AiOutlineUser className="icon" />
            </div>
            <div className="formInput">
              <input type="password" placeholder="Enter your password" id="password" />
              <GiPadlock className="icon" />
            </div>
            </form>

            {/* login button */}
            <Link to="/home">
            <div className="button"
                // onclick go to home page
                
            >
              <button className="btn">Login</button>
            </div>
            </Link>
            {/* forgot password */}
            <div className="forgotPassword">
              <a href="/" className='first'>Forgot Password?</a>
              <a href="/" className='second'>Get help signed in.</a>
            </div>

        </div>

        <div className="bottom">
          <a href="/">
            Terms of Use. Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login