import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Secret from '../Secret';

const LogOut=()=>{
   
 const { logout, isAuthenticated} = useAuth0();
    return( 
      isAuthenticated && (
    <div className='log'>
        <button className='logout'  onClick={() => logout()} >Log Out</button>
      <div className='log'>
    <Secret/>
    </div>
    </div>
      
    ))
}


export default LogOut;