import "./Leadership.css";

import Leaders from "../../data/Leaders";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function LeadershipContainer({
  leadersImage,
  leadersName,
  leadersTitle,
  leadersInformation,
}) {
  return (
    <section className="ledership-section">
      <div className="leadership-container-section-area">
        <div className="leadership-container">
          <div className="leadership-card-container">
            <img
              src={leadersImage}
              alt={leadersName}
              className="leaders-image"
            />
            <p className="leaders-name">{leadersName}</p>
            <div className="text-card-container">
              <h3 className="leaders-title">{leadersTitle}</h3>
              <p className="leaders-text-card">{leadersInformation}</p>
            </div>
          </div>
          <div className="social-links">
            <ul className="leaders-icons">
              <li className="icons-links">
                <p className="icon-item">
                  <FaFacebook />
                </p>
                <p className="icons-detail">@{leadersName}</p>
              </li>

              <li className="icons-links">
                <p className="icon-item">
                  <FaXTwitter />
                </p>
                <p className="icons-detail">@{leadersName}</p>
              </li>

              <li className="icons-links">
                <p className="icon-item">
                  <FaLinkedin />
                </p>
                <p className="icons-detail">@{leadersName}</p>
              </li>

              <li className="icons-links">
                <p className="icon-item">
                  <FaInstagramSquare />
                </p>
                <p className="icons-detail">@{leadersName}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <div >
      <h2 className="leaders-title-heading">Leadership</h2>
      <div className="leadership-containers">
        {Leaders.map((leader, i) => (
          <LeadershipContainer
            key={i}
            leadersImage={leader.leadersImage}
            leadersName={leader.leadersName}
            leadersTitle={leader.leadersTitle}
            leadersInformation={leader.leadersInformation}
          />
        ))}
      </div>
    </div>
  );
}

export default Leadership;
