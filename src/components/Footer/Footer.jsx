import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer-section">
      <div className="footer-area">
        <div className="social-icons">
          <ul className="icons">
            <li className="icons-footer">
              {" "}
              <FaFacebook />
            </li>
            <li className="icons-footer">
              {" "}
              <FaXTwitter />
            </li>
            <li className="icons-footer">
              {" "}
              <FaLinkedin />
            </li>
            <li className="icons-footer">
              {" "}
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
        <div className="footer-content-area">
          <p className="footer-text-area">
            all rights reserved copy lucy wambui
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
