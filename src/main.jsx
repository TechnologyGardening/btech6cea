import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Component1 from "./lec2412/component1";
import InputTest from "./lec2412/component3";
import MyComponent from "./lec3112/combined";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Component1 />  */}
    {/* <InputTest /> */}
    <MyComponent />
  </StrictMode>
);
