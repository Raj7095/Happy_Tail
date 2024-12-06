import React from 'react'
import './App.css'

export default function Login() {
  return (
    <>
    <form className="Login">
    
        <h1>Login</h1><br/>
        <label for="Email Address :" className="lbl">Email Address : </label>
        <input type="text" className="int" size="30"></input><br/><br/>
        <label for="Password" className="lbl2">Password    :</label>
        <input type="password" className="int2" size="30"></input><br/><br/>

        

        <div>
        <select className="select" aria-label="Default select example" >
  <option selected>Open this select menu</option>
  <option value="1">Admin</option>
  <option value="2">Customer</option>
  <option value="3">Trainer</option>
  <option value="4">Doctor</option>
</select>
    </div><br/><br/>
    <button type="submit" classname="btn btn-primary">Submit</button>
    </form>
   
    </>
  )
}
