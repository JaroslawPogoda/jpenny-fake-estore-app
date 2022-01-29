import React from "react";


export default function Category(props) {
 
  const handleChangeCat = (e) => {
    console.log("i was here");
    props.setActiveCategory(e.target.value);
  };
  return (
    <li className="Category-li">
      <button onClick={handleChangeCat} value={props.category}>
        <h3 className="Category-title">{props.category}</h3>
      </button>
    </li>
  );
}
