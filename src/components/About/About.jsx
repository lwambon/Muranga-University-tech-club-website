import HerosImage from "../../assets/about.jpg";
import "./About.css";

function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="about-section-content">
        <div className="about-content">
          <h3 className="about-content-title">
            Muranga University Tech Club (MUTC)
          </h3>
          <p className="about-description">
            Muranga University Tech Club (MUTC) is the leading technology club
            at Muranga University, committed to enhancing students understanding
            and skills in programming and various tech fields. Established with
            the aim of creating a platform for tech enthusiasts to connect,
            learn, and innovate, MUTC provides a diverse range of events and
            classes throughout the week. Our sessions cover a wide array of
            topics, including programming, UI/UX design, machine learning,
            cybersecurity, and more, catering to both beginners and advanced
            learners. At MUTC, we believe in hands-on learning and collaborative
            growth. Our members get the opportunity to work on real-world
            projects, participate in hackathons, and attend workshops led by
            industry experts. We strive to create an inclusive and supportive
            community where students can share knowledge, develop their skills,
            and stay updated with the latest technological trends. Whether you
            are looking to start your tech journey or advance your existing
            skills, MUTC is the perfect place to nurture your passion for
            technology. Join us as we shape the future of tech innovation at
            Muranga University!
          </p>
        </div>

        <div className="about-images-section">
          <img src={HerosImage} alt="about MUTC" className="about-image" />
        </div>
      </div>

      <div className="about-extra-info">
        <div className="about-mission-values">
          <div className="details">
            <h3 className="about-subheading-area">Mission</h3>
            <p className="about-text-details">
              Our mission is to empower students with technical skills and
              foster innovation, collaboration, and growth in the ever-evolving
              tech landscape.
            </p>
          </div>
          <div className="details">
            <h3 className="about-subheading-area">Values</h3>
            <ul className="list-items-subheading">
              <li className="subheading-items">Innovation</li>
              <li className="subheading-items">Collaboration</li>
              <li className="subheading-items">Integrity</li>
              <li className="subheading-items">Inclusivity</li>
            </ul>
          </div>

          <div className="details">
            <h3 className="about-subheading-area">Objectives</h3>
            <p className="about-text-objectives">
              MUTC aims to provide students with practical knowledge, hands-on
              experience, and opportunities to work on real-world projects,
              preparing them for careers in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div>
      <AboutSection />
    </div>
  );
}

export default About;
