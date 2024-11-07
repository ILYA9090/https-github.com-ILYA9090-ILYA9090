import { toHaveFocus } from "@testing-library/jest-dom/matchers";
import React from "react";

export default class ClassCouter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {count : 0}
  }

    increment() { 
      this.setState = {count : this.state.count + 1} 
      }
      
    dicrement() {
      this.setState = {count : this.state.count - 1}
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
