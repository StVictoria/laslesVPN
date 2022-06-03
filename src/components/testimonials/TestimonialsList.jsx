import "./TestimonialsList.scss";
import Person1Img from "../../assets/images/photo1.png";
import Person2Img from "../../assets/images/photo2.png";
import Person3Img from "../../assets/images/photo3.png";
import Testimonial from "./Testimonial";

const testimonials = [
  { id: 1, author: "Viezh Robert", location: "Warsaw, Poland", rating: "4.5", src: Person1Img, feedback: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." },
  { id: 2, author: "Yessica Christy", location: "Shanxi, China", rating: "4.5", src: Person2Img, feedback: "“I like it because I like to travel far and still can connect with high speed.”." },
  { id: 3, author: "Kim Young Jou", location: "Seoul, South Korea", rating: "4.5", src: Person3Img, feedback: "“This is very unusual for my business that currently requires a virtual private network that has high security.”." },
];

const TestimonialsList = () => {
  const renderTestimonials = () => testimonials.map(item => <Testimonial info={item} key={item.id} />);

  return <ul className="TestimonialsList">{renderTestimonials()}</ul>;
};

export default TestimonialsList;