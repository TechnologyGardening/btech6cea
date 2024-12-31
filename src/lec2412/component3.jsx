import * as React from "react";
class InputTest extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="checkbox" />
        <label>Checkbox</label>
        <br />
        <input type="radio" />
        <label>Radio Button</label>
        <br />
        <input type="color" />
        <label>Color Pellete</label>
        <br />
        <input type="button" />
        <label>Button</label>
        <br />
        <input type="file" />
        <label>File</label>
        <br />
      </div>
    );
  }
}
export default InputTest;
