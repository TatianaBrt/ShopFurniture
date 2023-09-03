import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Account =()=>{
    const {user, isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
        <div className='log'>
      <p>{user.nickname}</p>
      <p>{user.email}</p>
      <img src={user.picture} alt='person'/>
        </div>
    ))
}

export default Account;
