import { useState } from "react";
import "./about.css";

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container w-2/3 p-8  ">
        <p className="text-3xl text-gray-700 font-bold mb-5">About</p>
        <p className="text-gray-500 text-lg">
          React, Vite, and Tailwind CSS in action
        </p>
        <button
          className="rounded text-white bg-sky-500 py-1 px-1.5 mt-5"
          onClick={() => setCount(count + 1)}
        >
          Button is clicked {count} times
        </button>
        <p className="text-gray-900 mt-5 text-left">Primdev 2022</p>
      </div>
    </div>
  );
}
