import { useState } from "react";
import "../App.css";

function MyComponent(props) {
  const [isVisible, setIsVisible] = useState(true);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const listItems = props.items;

  const mappedItems = listItems.map((item) => {
    if (isVisible) {
      return (
        <li key={item.id} className="single-item">
          <h2>CATEGORY {props.category}</h2>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Major: {item.major}</p>
          <button onClick={changeVisibility}>Change visibility</button>
        </li>
      );
    } else {
      return (
        <li key={item.id} className="single-item">
          <h2>CATEGORY {props.category}</h2>
          <p>UNAVAILABLE</p>
          <button onClick={changeVisibility}>Change visibility</button>
        </li>
      );
    }
  });
  return (
    <div>
      <ol className="items-box">{mappedItems}</ol>
    </div>
  );
}

export default MyComponent;
