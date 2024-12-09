import { useState } from "react";

function Discount() {
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0,
    price: 2.99,
  });
  const [discount, setDiscount] = useState(0);

  /**
   * if my count is greater than or equal to 5, discount to be 20%
   * if my count is less than 5, discount should be 0
   */

  /**
   * Refactor and put discount inside the product state
   * Add a validation check to prevent negative numbers
   * i do not want to see negative values. it should only be positive numbers
   *
   */

  const handlerPlus = () => {
    const newCount = product.count + 1;

    if (newCount >= 5) {
      setDiscount(20);
    }
    setProduct({
      ...product,
      count: newCount,
    });
  };

  const handlerMinus = () => {
    const newCount = product.count - 1;
    if (newCount < 5) {
      setDiscount(0);
    }
    setProduct({
      ...product,
      count: newCount,
    });
  };

  const handlerReset = () => {
    setProduct({ ...product, count: 0 });
    setDiscount(0);
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <h2>{`$ ${product.price}`}</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
}
export default Discount;
