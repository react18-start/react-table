/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react"
import './LoginForm.css'


const LoginForm = ({setIsTable}) => {
  return (
    <div className="wrapper">
    <form action="">
      <h1>Login</h1>

      <div className="input-box">
       <input type="text" placeholder="username" required />
      </div>

      <div className="input-box">
       <input type="password" placeholder="password" required />
      </div>

      <div className="remember-forgot">
        <label><input type="checkbox" />Remember me</label>
        <a href="#">forgot password</a>
      </div>

      <button type="submit" onClick={setIsTable(true)}>Login</button>

      <div className="register-link">
       <p>Don't have an accont?<a href="#">Register</a></p>
      </div>
    </form>

    </div>
  )
}

export default LoginForm
