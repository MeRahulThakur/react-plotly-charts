import React, {useContext} from 'react';
import CategoryContext from '../CategoryContext';

const CategorySelection = () => {
  const options = [{
    label: "Category A",
    value: "A",
  },{
    label: "Category B",
    value: "B",
  },{
    label: "Category C",
    value: "C",
  }]

  const {category, setCategory} = useContext(CategoryContext)

  const onCategoryChange = (selectedCategory) => {
    console.log('selectedCategory-',selectedCategory)
    setCategory(selectedCategory)
  }

  return (
    <div className="select-container">
      <div className='left'>
        <span>Select Category:</span>
        <select onChange={e => onCategoryChange(e.target.value)}>
          {options.map((option,i) => (
            <option key={i} value={option.value} >{option.label}</option>
          ))}
        </select>
      </div>
      <span>Current Category: {category}</span>
    </div>
  )
}

export default CategorySelection