import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  let [isDarkMode, setIsDarkMode] = useState(true)
  console.log(isDarkMode)
  const appClass = isDarkMode ? "App dark" : "App light"
  console.log(appClass)

  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Dark Mode": "Light Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
