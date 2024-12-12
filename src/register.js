import React, { useState } from "react";
import "./registor.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const logine = () => {
    navigate("/");
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <>
      <center>
        <form className="Register">
          <div className="divr">
            <h1 className="happy">Happy Tail</h1>
            <h3>Register</h3>

            <div>
              <span className="sp">First Name:</span>
              <input
                type="text"
                className="int1"
                size="30"
                placeholder="First Name"
                required
              />
              <span className="sp">Last Name:</span>
              <input
                type="text"
                className="int1"
                size="30"
                placeholder="Last Name"
                required
              />
            </div>

            <div>
              <span className="sp2-1">E-mail:</span>
              <input
                type="email"
                className="int3"
                size="30"
                placeholder="E-mail"
                required
              />
              <span className="sp2-2">Phone No:</span>
              <input
                type="Number"
                className="int3"
                size="30"
                placeholder="Phone Number"
                required
              />
            </div>

            <div>
              <span className="sp3">Password:</span>
              <input
                type="password"
                className="int3"
                size="30"
                placeholder="Password"
                required
              />
              <br />
              <span className="sp3-1">Confirm Password:</span>
              <input
                type="password"
                className="int3"
                size="30"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div>
              <label className="sp4">Address:</label>
              <br />
              <textarea
                className="sp4-1"
                placeholder="Enter the Address"
                required
              ></textarea>
            </div>

            <label className="pin">Pincode:</label>
            <input
              type="text"
              className="int3"
              placeholder="Pincode"
              required
            />

            <div>
              <span className="sp5">Date of Birth:</span>
              <input
                type="date"
                className="sp5-1"
                size="30"
                placeholder="Password"
                required
              />
              <br />
            </div>

            <div>
              <span className="sp6">Gender:</span>
              <select
                id="role2"
                className="select1"
                aria-label="Default select example"
              >
                <option value="" selected disabled>
                  Select Gender
                </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>

            <div>
            <span className="sp7">Register As:</span>
              <select
                id="role2"
                className="select1"
                aria-label="Default select example"
                onChange={handleRoleChange}
                value={selectedRole}
              >
                <option value="" disabled>
                  Select the type Register
                </option>
                <option value="1">Admin</option>
                <option value="2">Customer</option>
                <option value="3">Trainer</option>
                <option value="4">Doctor</option>
              </select>

              {selectedRole === "1" && (
                <div>
                </div>
              )}

              {selectedRole === "2" && (
                <div>
                </div>
              )}

              {selectedRole === "3" && (
               <div>
                
                  <label className="lr1">Specialization :</label>
                  <input type="text" className="ri" name="" placeholder="Enter Your Specialization"></input><br></br>
                  <label className="lr2">Certifications :</label>
                  <input type="text" name="" className="ri" placeholder="Enter Your Certifications"></input><br></br>
                  <label className="lr3">Species-Trained :</label>
                  <input type="text" name=""  className="ri" placeholder="Enter Species Names"></input><br></br>
                  <label className="lr4">Certification-Image :</label>
                  <input type="file" className="ri4"></input>
               </div>
              )}

              {selectedRole === "4" && (
               <div>
                  <label className="lr1" >Qualifications :</label>
                  <input type="text" className="ri2" name="" placeholder="Enter Your Qualifications"></input><br></br>
                  <label className="lr1" >Certifications :</label>
                  <input type="text" className="ri2" name="" placeholder="Enter Your Certifications"></input><br></br>
                  <label className="lr4" >Qualification-Image :</label>
                  <input type="file" className="ri4"></input>
               </div>
              )}
            </div>

            <br />
            <button type="submit" className="btn btn-outline-success">
              Register
            </button>
            <br />
            <label className="lab2">If You are already logged in then,</label>
            <a className="a2" onClick={logine}>
              Login
            </a>
          </div>
        </form>
      </center>
    </>
  );
}
