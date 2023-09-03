import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./LogIn"
import LogOut from "./LogOut";
import Account from "./Account";

const Log=()=>{
    const {isLoading}=useAuth0();
    if (isLoading) return <h1>Wait a few seconds...</h1>
    return(
        <div >
<LogIn/>
<LogOut/>
<Account/>

        </div>
    )
}



export default Log;