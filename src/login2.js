import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <>
  
     <center >

      <body >
      <form className="Login">
      <div className="divn">
        <h1 className="happy">Happy Tail</h1>
        
       <h3>Login</h3>
          {/* <label htmlFor="email" className="lbl">
            Email Address:
          </label> */}
          <input type="text" id="email" className="int" size="30" placeholder="Email Address"/><i className='bx bxs-user'></i>
          <br />
          <br />
          {/* <label htmlFor="password" className="lbl2">
            Password:
          </label> */}
          <input type="password" id="password" className="int2" size="30" placeholder="Password"/><i className='bx bx-lock-alt' ></i>
          <br />
         
          <br />
          <div>
            {/* <label htmlFor="role" className="lbl">
              Login As:
            </label> */}
            <select id="role" className="select" aria-label="Default select example">
              <option value="" selected disabled>
                Login As
              </option>
              <option value="1" >Admin</option>
              <option value="2">Customer</option>
              <option value="3">Trainer</option>
              <option value="4">Doctor</option>
            </select>
            
          </div>
          <br />
          <a href="/" className="a">Forget Password</a>
          <br></br>
        <br></br>
        <button type="submit" className="btn btn-outline-success">
          Log In
        </button>
        <label className="labl">Don't have an account?</label>
        <Link to="/register" className="a2">Register</Link>
        </div>
        </form>
     
      </body>
       </center>
       
    </>
  );
}
