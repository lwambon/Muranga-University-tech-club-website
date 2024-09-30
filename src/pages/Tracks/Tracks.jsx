import "./Tracks.css";

function Tracks() {
  const tracks = [
    {
      name: "Cyber Security",
      description:
        "Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. They will learn about security protocols, ethical hacking, encryption techniques, and more.",
    },
    {
      name: "UI/UX Design",
      description:
        "Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces, focusing on user research, wireframing, and prototyping.",
    },
    {
      name: "Web Development",
      description:
        "Students who pursue the Web Development track will gain knowledge in building dynamic websites, learning front-end technologies like HTML, CSS, JavaScript, and back-end development with Node.js and databases.",
    },
    {
      name: "Mobile Apps Development",
      description:
        "Students who opt for the Mobile Apps Development track will learn to design and build mobile applications, gaining proficiency in platforms such as Android and iOS using languages like Java, Kotlin, and Swift.",
    },
    {
      name: "Cloud Engineering",
      description:
        "Students who choose the Cloud Engineering track will dive into cloud computing, learning about cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and how to design, deploy, and manage cloud infrastructures.",
    },
    {
      name: "Power Platform",
      description:
        "Students who select the Power Platform track will explore Microsoft's Power Platform to create custom applications, automate workflows, analyze data, and build chatbots with minimal coding.",
    },
  ];

  return (
    <div className="tracks-page">
      <h2 className="tracks-title">MUTC Tracks Overview</h2>
      <p className="tracks-subtitle">
        MUTC, allows students to explore and enroll in fields like Cyber
        Security, UI/UX Design, Web Development, Mobile Apps Development, Cloud
        Engineering, and Power Platform.. Learn more about each track and
        register below!
      </p>

      <div className="tracks-container">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <h3 className="track-name">{track.name}</h3>
            <p className="track-description">{track.description}</p>
          </div>
        ))}

        <div className="form-container">
          <h2 className="track-form-details">Register for a track here..</h2>
          <div className="form-container-details">
            <form className="form-details">
              <div className="form-detail-area">
                <label htmlFor="first-name" className="form-details-section">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="form-group-input"
                  placeholder="First name e.g., John"
                  required
                />
              </div>

              <div className="form-detail-area">
                <label htmlFor="last-name" className="form-details-section">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="form-group-input"
                  placeholder="Last name e.g., Doe"
                  required
                />
              </div>

              <div className="form-detail-area">
                <label htmlFor="email-address" className="form-details-section">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email-address"
                  className="form-group-input"
                  placeholder="Email address e.g., john@gmail.com"
                  required
                />
              </div>

              <div className="form-detail-area">
                <label
                  htmlFor="course-of-study"
                  className="form-details-section"
                >
                  Current Course of Study
                </label>
                <input
                  type="text"
                  id="course-of-study"
                  className="form-group-input"
                  placeholder="Course of study e.g., Computer Science"
                  required
                />
              </div>

              <div className="form-detail-area">
                <label htmlFor="year-of-study" className="form-details-section">
                  Year of Study
                </label>
                <select
                  id="year-of-study"
                  className="form-group-input"
                  required
                >
                  <option value="">Select Year of Study</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                </select>
              </div>

              <div className="form-detail-area">
                <label
                  htmlFor="track-selection"
                  className="form-details-section"
                >
                  Select Track
                </label>
                <select
                  id="track-selection"
                  className="form-group-input"
                  required
                >
                  <option value="">Select Track</option>
                  {tracks.map((track, index) => (
                    <option key={index} value={track.name}>
                      {track.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="form-submit-button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
