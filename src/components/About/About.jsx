import HerosImage from '../../assets/about.webp';
import './About.css'

function Aboutsection() {
    return(
        <section className="about-section">
            <h2 className="about-title">about us</h2>
            <div className="about-section-content">
            
              <div className="about-content">
                    <h3 className="about-content-title">Muranga University Tech Club (MUTC)</h3>
                    <p className="about-content-area">
                    Muranga University Tech Club (MUTC) is the leading technology club at Muranga University, 
                    committed to enhancing students understanding and skills in programming and various tech fields.
                     Established with the aim of creating a platform for tech enthusiasts to connect, 
                     learn, and innovate, MUTC provides a diverse range of events and classes throughout the week.
                      Our sessions cover a wide array of topics, including programming, UI/UX design, 
                      machine learning, cybersecurity, and more, catering to both beginners and advanced learners.
                    At MUTC, we believe in hands-on learning and collaborative growth. 
                     Our members get the opportunity to work on real-world projects, participate in hackathons, 
                     and attend workshops led by industry experts. We strive to create an inclusive and 
                     supportive community where students can share knowledge, develop their skills, 
                     and stay updated with the latest technological trends. 
                     Whether you are looking to start your tech journey or advance your existing skills,
                      MUTC is the perfect place to nurture your passion for technology.
                  Join us as we shape the future of tech innovation at Muranga University!    </p>
                    <button className="btn-about-section">View our courses</button>
                </div>
                <div className="about-images-section">
                    <img src={HerosImage} alt="about image" />
               </div>
            </div>
        </section>
    )
}

function About() {
  return (
    <div>
        <Aboutsection/>
    </div>
  )
}

export default About