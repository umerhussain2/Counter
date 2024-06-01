import React, { useContext } from "react";
import { MyContext } from "../context/context";

const Comp3 = () => {
  const x = useContext(MyContext);
  return <div>{x}</div>;
};

export default Comp3;
