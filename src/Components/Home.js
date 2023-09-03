import { useState } from "react";
import { data } from "../dataSlider";
import '../App.css';





function Home() 
{
    const[product,setProduct]=useState(0);
    const{image}=data[product];
    
    const previousProduct =()=>{
        setProduct((product=>{
            product--;
            if (product<0){
            return data.length-1;
            }
            return product;
        }))
    }
    const nextProduct =()=>{
        setProduct((product=>{
            product++;
           
            if (product>data.length-1){
                product=0;
            }
            return product;
    }))
        
    }
    
    return(
       
    <div>
    <div className="header">
    <h1>Find your Dream Furniture</h1>
    </div>
            <div className="containerHome">
            <button className="buttonHome" onClick={previousProduct} > <img src="https://cdn-icons-png.flaticon.com/512/60/60606.png?w=740&t=st=1681646238~exp=1681646838~hmac=0c237ac9689aa0f23689d52c840701b284970c47e1bd7aef118a56f76a5ec62f" alt="back" width="50px"/>

</button>
            <img src={image} width="550px" alt="product"/>
            <button className="buttonHome" onClick={nextProduct}><img src="https://cdn-icons-png.flaticon.com/512/60/60632.png?w=740&t=st=1681646331~exp=1681646931~hmac=c9ae20940151f29a4e2cf4102699832a73aa7d82b5cc589c64dcc6619c467eb1"alt="next" width="50px"/></button>
                   </div>
    
             
               </div>


    )
    
    }
    

export default Home;