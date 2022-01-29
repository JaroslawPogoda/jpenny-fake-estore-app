import React,{useState,useContext} from "react";

import signIn from '../../functions/signIn'
import {CartStateContext} from '../Layout'






export default function Register(props) {
const value= useContext(CartStateContext)

    const [submitted,setSubmitted]=useState(false)
    const [token,setToken]=useState(null);
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    phone: "",
    password_confirmation: "",
  });
  
const  handleSubmit =  (event) => {
    event.preventDefault()
   signIn(
      user,
      setToken,
      value.dispatchCart
    );
    
    setSubmitted(true)
  };
  const handleChange = (event) => {
      setUser({...user,[event.target.name]: event.target.value})
  }
  return (
      <div>
    {submitted?<div><h1> Welcome</h1></div>:<div className="Register">
    
        <h2>login</h2>
      <form className="RegisterForm" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
        <input
        id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
/>
 
        <label htmlFor='password'>Password:</label>
        <input
        id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />


        <button type="submit">Register</button>
      </form>
    </div>}
    </div>
  );
}
