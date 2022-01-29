import React,{useState,useContext} from "react";
import createUser from "../../functions/createUser";
import './Register.css'
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
  const handleSubmit = (event) => {
    event.preventDefault()
    createUser(
      user,

      value.dispatchCart
    );
    setSubmitted(true)
  };
  const handleChange = (event) => {
      setUser({...user,[event.target.name]: event.target.value})
  }
  return (
      <div>
    {submitted?<div><h1>Thank you and Welcome</h1></div>:<div className="Register">
        <h2>Register</h2>
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
        <label htmlFor='userName'>UserName:</label>
        <input
        id="userName"
          type="userName"
          name="userName"
          placeholder="userName"
          value={user.userName}
          onChange={handleChange}
          required
        />
        <label htmlFor='firstName'>First Name</label>
        <input
        id="firstName"
          type="firstName"
          name="firstName"
          placeholder="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor='lastName'>Last Name:</label>
        <input
        id="lastName"
          type="lastName"
          name="lastName"
          placeholder="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor='city'>City:</label>
        <input
        id="city"
          type="city"
          name="city"
          placeholder="city"
          value={user.city}
          onChange={handleChange}
          required
        />
        <label htmlFor='street'>Street:</label>
        <input
        id="street"
          type="street"
          name="street"
          placeholder="street"
          value={user.street}
          onChange={handleChange}
          required
        />
        <label htmlFor='number'>Number:</label>
        <input
        id="number"
          type="number"
          name="number"
          placeholder="home number"
          value={user.number}
          onChange={handleChange}
          required
        />
        <label htmlFor='zipcode'>Zip Code:</label>
        <input
        id="zipcode"
          type="zipcode"
          name="zipcode"
          placeholder="Zip-code"
          value={user.zipcode}
          onChange={handleChange}
          required
        />
        <label htmlFor='phone'>Phone:</label>
        <input
        id = 'phone'
          type="phone"
          name="phone"
          placeholder="Phone"
          value={user.phone}
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
<label htmlFor='password_confirmation'>Password Confirmation:</label>
        <input
            id = 'password_confirmation'
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={user.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>}
    </div>
  );
}