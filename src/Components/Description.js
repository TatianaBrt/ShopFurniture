import { useState } from "react";



function Description({description}){
    const [isOpen, setIsOpen] = useState(false);
    
   
    return (<div>
{isOpen && <p className="description">{description}</p>}

<button className="details" onClick={() => setIsOpen(!isOpen)}>Details</button>
              
        </div>
    )
  
}





export default Description;