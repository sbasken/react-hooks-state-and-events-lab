import React, {useState} from "react";

function Item({ name, category }) {

  let [canBuy, setCanBuy] = useState("")
  const className = canBuy? "in-cart": ""

  function handleClick() {
    setCanBuy((canBuy)=> !canBuy)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{canBuy ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
