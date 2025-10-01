import { useRef } from "react";

const HorizontalScroll = ({ children, className = "" }) => {
  const scrollRef = useRef();

  const mouseDown = (e) => {
    const oldX = e.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const mouseMove = (e) => {
      const newX = e.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const mouseUp = (e) => {
      window.removeEventListener("mousemove", mouseMove);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  return (
    <div className={className} ref={scrollRef} onMouseDown={mouseDown}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
