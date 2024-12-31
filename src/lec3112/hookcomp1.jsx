import { useState } from "react";
function FuncComp1() {
  const [name] = useState("Hello");
  return <h1>{name}</h1>;
}
export default FuncComp1;
