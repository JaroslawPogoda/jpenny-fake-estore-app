import React,{useContext} from 'react';
import {UserContext} from '../Layout'
import {useAuth0} from '@auth0/auth0-react'
import './Profile.css'
function Profile() {
    const value= useContext(UserContext)
    const {user} = useAuth0()
    user?value.setUser(user):console.log(value)
  return <div className="profile">
      {value.user.name?<div className="profile-items">
      <img src={value.user.picture} alt={"profile Picture"}/>
      <h2>Name:{value.user.name}</h2>
      </div>:null}
  </div>;
}

export default Profile;
