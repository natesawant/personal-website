"use client";
import React, { Children } from "react";

import { useState, useEffect } from "react";

export default function SequentialLoad({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      // cleanup this component
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);
  const count = Children.count(children);

  return (
    <div>
      {Children.map(children, (child, index) => (
        <div
          className={`text-xl text-primary font-light transition-opacity duration-500 delay-${
            index <= 2 ? 500 * index : 1000
          } ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          {child}
        </div>
      ))}{" "}
    </div>
  );
}
