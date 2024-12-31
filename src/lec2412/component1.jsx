import * as React from "react";
class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Component 2</h1>
        <h2>World</h2>
      </div>
    );
  }
}
class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Component 1</h1>
        <h2>Hello 1</h2>
        <Component2 />
      </div>
    );
  }
}

export default Component1;
