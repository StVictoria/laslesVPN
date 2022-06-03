import clsx from 'clsx';
import { useState } from 'preact/hooks';
import "./TestimonialsFooter.scss";

const dots = [...Array(3).keys()];

const TestimonialsFooter = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right" && activeDot < dots.length - 1) {
      setActiveDot(activeDot + 1);
    }
    if (direction === "left" && activeDot > dots[0]) {
      setActiveDot((activeDot) => activeDot - 1);
    }
    return null;
  };

  const renderDots = () => dots.map((dot) => (
    <button
      className={clsx("TestimonialsFooter-Dot", { "TestimonialsFooter-Dot_active": activeDot === dot })}
      key={dot}
      onClick={() => { setActiveDot(dot); }} />
  ));

  return (
    <footer className="TestimonialsFooter">
      <div className="TestimonialsFooter-Dots">
        {renderDots()}
        <div className="TestimonialsFooter-Slider" />
      </div>
      <div className="TestimonialsFooter-Buttons">
        <button
          className="TestimonialsFooter-ArrowButton"
          onClick={() => handleClick("left")}>
          <div className="TestimonialsFooter-ArrowLeft" />
        </button>
        <button
          className="TestimonialsFooter-ArrowButton"
          onClick={() => handleClick("right")}>
          <div className="TestimonialsFooter-ArrowRight" />
        </button>
      </div>
    </footer>
  );
};

export default TestimonialsFooter;