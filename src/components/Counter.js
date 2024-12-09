import { useState } from "react";

function Counter() {
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0,
  });

  function handlerPlus() {
    /** THIS IS HELPFUL */
    debugger;
    const newCount = product.count + 1;
    setProduct({
      /** spread operators only do shallow copying */
      ...product,
      count: newCount,
    });
    const secondNewCount = newCount - 1;
  }

  /** Implement handlerMinus */
  function handlerMinus() {
    /** Your code here... */
    setProduct({
      ...product,
      count: product.count - 1,
    });
  }

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}

export default Counter;
