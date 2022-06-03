import TestimonialsFooter from "./TestimonialsFooter";
import TestimonialsList from "./TestimonialsList";
import "./TestimonialsSection.scss";

const TestimonialsSection = () => {
  return (
    <section className="TestimonialsSection">
      <h2 className="TestimonialsSection-Title"> Trusted by Thousands of Happy Customer</h2>
      <p className="TestimonialsSection-Description">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      <TestimonialsList />
      <TestimonialsFooter />
    </section>
  );
};

export default TestimonialsSection;