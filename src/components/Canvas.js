import React, { useState, useLayoutEffect, useRef } from "react";
import Colors from "./Colors";
import { useDraw } from "./Hooks";

export default function Canvas() {
  const [color, setColor] = useState();

  const changeColor = (props) => {
    setColor(props);
  };

  const canvRef = useDraw(onDraw);

  function onDraw(ctx, point, prev) {
    drawLine(prev, point, ctx, color, 2);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 0.7, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <canvas
        className="bg-light border rounded"
        ref={canvRef}
        width="1000px"
        height="500px"
      />
      <Colors selectedColor={changeColor} />
    </section>
  );
}
