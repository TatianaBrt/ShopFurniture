import { useSelector } from "react-redux";
import Furniture from "./Furniture";
import {data} from '../data'
import { getSelectedCategory } from "../redux/furnitursSlice";


const Furniturs = () =>{
const selectedCategory=useSelector(getSelectedCategory)

    return ( <div className="furntAll">
{data
.filter(furniture=>{
    if (selectedCategory === "All")return true;
    return selectedCategory === furniture.category;
})
.map(furniture => <Furniture  furniture={furniture} key={furniture.id} />)}
    </div>

    )
}


export default Furniturs;