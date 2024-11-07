import React from "react";

export default class ClassCouter extends React.Component {

    function increment() {
        setCount(count + 1);
      }
      function dicrement() {
        setCount(count - 1);
      }
      
  render() {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={dicrement}>dicrement</button>
      </div>
    );
  }
}
