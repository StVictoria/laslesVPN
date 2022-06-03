import "./TestimonialsFooter.scss";

const TestimonialsFooter = () => {
  const renderDots = () => [...Array(4).keys()].map((dot) => <div className="TestimonialsFooter-Dot" key={dot} />)
  
  return (
    <footer className="TestimonialsFooter">
      <div className="TestimonialsFooter-Dots">
        {renderDots()}
        <div className="TestimonialsFooter-Slider" />
      </div>
      <div className="TestimonialsFooter-Buttons">
        <button className="TestimonialsFooter-ArrowButton"><div className="TestimonialsFooter-ArrowLeft" /></button>
        <button className="TestimonialsFooter-ArrowButton"><div className="TestimonialsFooter-ArrowRight" /></button>
      </div>
    </footer>
  );
};

export default TestimonialsFooter;