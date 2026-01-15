"use client";
import { useState } from "react";

export const Greeting = () => {
  console.log("Hi Amelia");

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello Amelia</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="border-2 p-2">
        Add
      </button>
    </div>
  );
};
