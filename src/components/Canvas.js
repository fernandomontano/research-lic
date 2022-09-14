import React, { useState } from "react";
import Colors from "./Colors";
import { useDraw } from "./Hooks";

export default function Canvas() {
  const [color, setColor] = useState(); // allows us to change the color (the color is changed at Colors component) but used here.😯

  const { setRef, mouseDown } = useDraw(onDraw);

  const changeColor = (props) => {
    // function that allows us to change the color in another component. 💀
    setColor(props);
  };

  function onDraw(ctx, point, prev) {
    // onDraw, draws lines according to the points. 🐧
    drawLine(prev, point, ctx, color, 2);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end; // if start exists, it draws it from there, if not... from the end.
    // Begins the drawing path.
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    // Optional. It makes the whole line smoother. 🤏
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 0.7, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  // html containing a section, canvas and the Colors component, which takes a funcion to change color.
  return (
    <section className=" mt-5 bg-dark">
      <section className="d-flex justify-content-center align-items-center mt-5">
        <canvas
          className="bg-light border rounded"
          ref={setRef}
          width="1000px"
          height="500px"
          onMouseDown={mouseDown}
          id="canva"
        />
        <Colors selectedColor={changeColor} />
      </section>
    </section>
  );
}
