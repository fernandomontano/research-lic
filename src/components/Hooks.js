import { useEffect, useRef } from "react";

export function useDraw(onDraw) {
  const cnvRef = useRef(null);
  const isDrawing = useRef(false);

  const mouseMoveRef = useRef(null);
  const mouseDrawRef = useRef(null);
  const mouseUpRef = useRef(null);
  const prevPointRef = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     // clean the listeners for the window, for when the component is unmounted 🧢.
  //     if (mouseMoveRef.current) {
  //       window.removeEventListener("mousemove", mouseMoveRef.current);
  //     }
  //     if (mouseUpRef.current) {
  //       window.removeEventListener("mouseup", mouseUpRef.current);
  //     }
  //   };
  // }, []);

  const setRef = (ref) => {
    if (!ref) return;
    if (cnvRef.Current) {
      cnvRef.current.removeEventListener("mousedown", mouseDrawRef.current);
    }
    cnvRef.current = ref;
    mouseMove();
    mouseDrawListener();
    mouseUpListener();
  };

  function mouseMove() {
    const mouseMoveListener = (e) => {
      // this has points relative to the canvas
      if (isDrawing.current) {
        const point = pointInCanvas(e.clientX, e.clientY);
        const ctx = cnvRef.current.getContext("2d");
        if (onDraw) onDraw(ctx, point, prevPointRef.current);
        prevPointRef.current = point;
      }
    };
    mouseMoveRef.current = mouseMoveListener;
    window.addEventListener("mousemove", mouseMoveListener);
  }

  function mouseUpListener() {
    const listener = () => {
      isDrawing.current = false;
      prevPointRef.current = null;
    };
    mouseUpRef.current = listener;
    window.addEventListener("mouseup", listener);
  }

  function mouseDrawListener() {
    if (!cnvRef.current) return;
    const listener = () => {
      isDrawing.current = true;
    };
    mouseDrawRef.current = listener;
    cnvRef.current.addEventListener("mousedown", listener);
  }

  function pointInCanvas(clientX, clientY) {
    if (cnvRef.current) {
      const rect = cnvRef.current.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    }
    return null;
  }

  return setRef;
}
