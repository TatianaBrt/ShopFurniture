import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../redux/furnitursSlice";


const Filter = ({category}) =>{
    const dispatch=useDispatch();
    const selectedCategory=useSelector(getSelectedCategory);
    return ( <div className="furnt">
<span onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected': 'categoryButton' }>{category}</span>
    </div>
  
  
    )
}


export default Filter;