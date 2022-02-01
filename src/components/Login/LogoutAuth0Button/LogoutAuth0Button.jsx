import React,{useContext} from 'react';
import {useAuth0} from '@auth0/auth0-react'
import {UserContext} from '../../Layout'
const LogoutAuth0Button = (props) => {
    const value = useContext(UserContext)
    const {logout} = useAuth0()
    const handleLogout=()=>{
        value.setUser(null)
        props.setUser1({...props.user,email_verified: false})
        logout()
    }
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutAuth0Button;
