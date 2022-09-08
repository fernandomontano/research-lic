import React from "react";
import Colors from "./Colors";

export default function Canvas() {
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <canvas className="w-75 h-75 bg-light border-1"> </canvas>
      <Colors />
    </section>
  );
}
