import React from "react";

function Random() {
  let number = Math.random() * 100;

  return (
    <h2 style={{ backgroundColor: "lightblue" }}>
      Random number is: {Math.round(number)}
    </h2>
  );
}

export default Random;
