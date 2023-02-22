import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [filterBy, setFilterBy] = useState("All")

  function handleChange(e) {
    setFilterBy(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy
    }
  })

  const selectedCategory = itemsToDisplay.map((item)=> (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {selectedCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;
