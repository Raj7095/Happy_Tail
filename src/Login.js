import React from 'react';
import './App.css';


export default function Login() {
  return (
    <>
    <body className='bd'> 
      
      <form className="Login">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" size={5} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
    <label for="Email" className="lbl">Email :</label>
    <input type="Email" className="int1"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" size="5" id="exampleInputPassword1"/>
  </div>
  <div>
        <select classname="form-select" aria-label="Default select example" >
  <option selected>Open this select menu</option>
  <option value="1">Admin</option>
  <option value="2">Customer</option>
  <option value="3">Trainer</option>
  <option value="4">Doctor</option>
</select>
    </div>
  
  <button type="submit" classname="btn btn-primary ">Submit</button>
</form>
    
</body>
    </>
  )
}
