import React from "react";

export default class ClassCouter extends React.Component {
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
