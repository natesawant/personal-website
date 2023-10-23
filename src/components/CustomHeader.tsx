"use client";

import { useState, useEffect } from "react";
import SequentialLoad from "./SequentialLoad";
import { Header1, Header2, Header3 } from "./StyledComponents";

export default function CustomHeader(props: {
  header: string;
  subheader?: string;
  subtitle?: string;
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

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <SequentialLoad>
        <div className=" order-first">
          <Header3>{props.subheader}</Header3>
        </div>
        <div className=" order-2">
          <Header1>{props.header}</Header1>
        </div>
        <div className=" order-last">
          <Header2>{props.subtitle}</Header2>
        </div>
      </SequentialLoad>
    </div>
  );
}
