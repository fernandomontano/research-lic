import { useEffect, useRef } from "react";

export function useDraw(onDraw) {
  const cnvRef = useRef(null);
  const isDrawing = useRef(false);
  const prevPointRef = useRef(null);

  const mouseMoveRef = useRef(null);
  const mouseUpRef = useRef(null);

  useEffect(() => {
    // Creates the MouseMove and MouseUpListeners
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
    function pointInCanvas(clientX, clientY) {
      if (cnvRef.current) {
        const rect = cnvRef.current.getBoundingClientRect();
        return { x: clientX - rect.left, y: clientY - rect.top };
      }
      return null;
    }
    // When the component is demounted, it cleans it.
    function removeListeners() {
      if (mouseMoveRef.current) {
        window.removeEventListener("mousemove", mouseMoveRef.current);
      }
      if (mouseUpRef.current) {
        window.removeEventListener("mouseup", mouseUpRef.current);
      }
    }
    mouseMove();
    mouseUpListener();
    return () => {
      removeListeners();
    };
  }, [onDraw]);

  const setRef = (ref) => {
    cnvRef.current = ref;
  };

  function mouseDown() {
    isDrawing.current = true;
  }

  return {
    setRef,
    mouseDown,
  };
}
