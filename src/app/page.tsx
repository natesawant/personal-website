"use client";

import { useState, useEffect } from "react";

export default function Home() {
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

  return (
    <div className="py-8 flex items-center justify-center">
      <div>
        <div className="w-64 sm:w-[220] md:w-auto">
          <h3
            className={`text-xl text-primary font-light transition-opacity duration-500 delay-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Hey, my name is
          </h3>
          <h1
            className={`text-3xl text-accent-700 transition-opacity duration-300 delay-0 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Nate Sawant
          </h1>
          <h2
            className={`text-2xl text-secondary-400 font-light transition-opacity duration-500 delay-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            A software engineer based in Boston
          </h2>
        </div>

        <div
          className={`py-8 w-64 sm:w-96 transition-opacity duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>
            I'm currently a computer science undergrad at Northeastern
            University in Boston, MA.
          </p>
        </div>
      </div>
    </div>
  );
}
