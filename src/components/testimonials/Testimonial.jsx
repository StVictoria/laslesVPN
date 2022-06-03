import "./Testimonial.scss";
import StarIcon from "../../assets/icons/star.svg";

const Testimonial = ({ info }) => (
  <li className="Testimonial-Item" key={info.id}>
    <div className="Testimonial-ItemHeader">
      <div className="Testimonial-AuthorBlock">
        <img src={info.src} className="Testimonial-Photo" alt="photo" />
        <div className="Testimonial-Author">
          <p className="Testimonial-Name"><b>{info.author}</b></p>
          <p className="Testimonial-Location">{info.location}</p>
        </div>
      </div>
      <div className="Testimonial-RatingBlock">
        <p className="Testimonial-Rating">{info.rating}</p>
        <StarIcon width={14} />
      </div>
    </div>
    <article className="TestimonialsList-Feedback">{info.feedback}</article>
  </li>
);

export default Testimonial;