"use client";
import { useRef } from "react";
import Card from "./Card";
import { projects } from "./data";

const ScrollStack = () => {
  const container = useRef(null);

  return (
    <main ref={container} className="">
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} {...project} />;
      })}
    </main>
  );
};

export default ScrollStack;
