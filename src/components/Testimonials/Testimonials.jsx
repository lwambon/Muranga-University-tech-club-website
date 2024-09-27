import "./Testimonials.css";
import PropTypes from "prop-types";
import StudentOne from "../../assets/student1.jpg";

function TestimonialsSection({ mainTitle, subTitle }) {
  return (
    <section className="testimonial-section">
      <div className="testimonial-title-area">
        <h2 className="testimonial-maintitle">{mainTitle}</h2>
        <p className="testimonial-subtitle">{subTitle}</p>
      </div>
    </section>
  );
}

function TestimonialCards({
  studentAvatar,
  studentName,
  highlightTitle,
  StudentHighlights,
}) {
  return (
    <div className="testimonial-card-section">
      <div className="testimonial-container">
        <div className="testimal-card-item">
          <img className="testimonial-image-card" src={studentAvatar} alt={studentName} />
          <p className="student-name">{studentName}</p>
        </div>
        <div className="students-highlight-details">
          <h4 className="students-highlight-title">{highlightTitle}</h4>
          <p className="students-highlight">{StudentHighlights}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div>
      <TestimonialsSection
        mainTitle={"testimonials"}
        subTitle={"our students feedback"}
      />
      <TestimonialCards
        studentAvatar={StudentOne}
        studentName={"williams john"}
        highlightTitle={"ui/ux designer"}
        StudentHighlights={
          "I recommend joining MUTC to anyone passionate about tech. The club helped me, William Johnsimprove my UI/UX design skills through hands-on workshops and real-world projects, boosting my career."
        }
      />
    </div>
  );
}

export default Testimonials;
