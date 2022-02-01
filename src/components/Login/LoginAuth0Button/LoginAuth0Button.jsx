import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
const LoginAuth0Button = () => {
    const {loginWithRedirect}= useAuth0()
    const handleClick=()=>{
        
        loginWithRedirect()
    }
  return <button onClick={handleClick}>Login with Auth0</button>;
};

export default LoginAuth0Button;
