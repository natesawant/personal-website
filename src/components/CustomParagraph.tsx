"use client";

import { useState, useEffect } from "react";

export default function CustomParagraph(props: { paragraph: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <div
      className={` text-justify transition-opacity duration-1000 delay-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <p>{props.paragraph}</p>
    </div>
  );
}
