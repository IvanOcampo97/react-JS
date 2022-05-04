import React, { useState } from "react";
import "./ItemCount.css";

function Counter({ stock, initial }) {
  const [count, setCount] = useState(initial);

  function botonSuma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function botonResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="box">
      <div className="contador">
        <button onClick={() => botonResta()}>-</button>
        <p>{count}</p>
        <button onClick={() => botonSuma()}>+</button>
      </div>
      <button className="botonCarrito">Agregar al carrito</button>
    </div>
  );
}

export default Counter;
