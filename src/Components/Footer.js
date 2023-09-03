import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import '../App.css';

const Footer=()=>{
    return(
        <div className="footer">

<div className='textFooter'>
 <p>     
 <a href='https://react.dev/' target="_blank"> <AiFillFacebook > </AiFillFacebook></a>
 </p> 
 <p>
 <a href='https://react.dev/' target="_blank"> < AiFillInstagram></AiFillInstagram> </a> 
 </p>
 <p>
 <a href='https://react.dev/' target="_blank"> <AiFillTwitterCircle></AiFillTwitterCircle></a>   
 </p>     

<p>©2023 FURNIX | All Rights Reserved</p>      
</div>        
</div>
    )
}


export default Footer;