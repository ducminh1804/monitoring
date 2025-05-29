import React, { useState } from "react";

export default function Vidu() {
  const [x, setX] = useState(0);
  
  const handleX = () => {
    setX((x) => x + 1);
  };
  console.log("render lai lan thu " + x);
  return (
    <div>
      <button className="border" onClick={handleX}>
        Tang x
      </button>
      <div>Gia tri cua x: {x}</div>
    </div>
  );
}
