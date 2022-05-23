import React from 'react'; 
import '../style/catalogue.scss';


const Categories = ({ categories,filterItems }) => {

    return <div className="btn-container">
            
        {categories.map((category, index)=> {
            return (
                <button type="button" key={index} className="filter-category-btn" onClick={() => filterItems(category)}>{category}</button>
            )
        })}
      
    </div>
}


export default Categories;