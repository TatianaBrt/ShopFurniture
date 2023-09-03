import Filter from './Filter'

const AllCategories = () =>{
    return ( <div className='things'>

{["All","Chair","Sofa","Bed","Table","Mirror","Dresser"].map(
  category=> <Filter category={category} key={category}/>)
}
    </div>

    )
}

export default AllCategories;