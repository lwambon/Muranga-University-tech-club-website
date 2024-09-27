import "./Testimonials.css";
//import PropTypes from "prop-types";
//import StudentOne from "../../assets/student1.jpg";
import Carousel from 'elastic-carousel';
import Testimonies from "../../data/Testimonies";




function TestimonialCards({ studentAvatar, studentName, highlightTitle,studentHighlights}) {
  return (
    <div className="testimonial-card-section">
      <div className="testimonial-container">
        <div className="testimal-card-item">
          <img className="testimonial-image-card" src={studentAvatar} alt={studentName} />
          <p className="student-name">{studentName}</p>
        </div>
        <div className="students-highlight-details">
          <h4 className="students-highlight-title">{highlightTitle}</h4>
          <p className="students-highlight">{studentHighlights}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div>
      <TestimonialsSection/>
      
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-title-area">
        <h2 className="testimonial-maintitle">testimonials</h2>
        <p className="testimonial-subtitle">our students feedback</p>
      </div>

      <div className="testimony-containers">
      <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={4000}>
{Testimonies.map((testimonial, i) => (
  <TestimonialCards
   key={i}
    studentAvatar={testimonial.studentAvatar}
    studentName={testimonial.studentName}
    highlightTitle={testimonial.highlightTitle}
    studentHighlights={testimonial.studentHighlights}
  />
))}
</Carousel>
</div>
    </section>
  );
}

export default Testimonials