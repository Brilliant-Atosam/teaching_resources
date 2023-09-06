import "../styles/footer.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { CgYoutube } from "react-icons/cg";
import { TbReport } from "react-icons/tb";
import { BsGeoAlt, BsTelephoneInbound } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-item-container">
        <h1 className="footer-heading">Services</h1>
        <li className="footer-list-item">Schem of work</li>
        <li className="footer-list-item">Lesson plan</li>
        <li className="footer-list-item">Teaching notes</li>
        <li className="footer-list-item">Detailed notes</li>
        <li className="footer-list-item">Examination</li>
        <li className="footer-list-item">video lesson</li>
        <li className="footer-list-item">online tution</li>
      </div>
      <div className="footer-item-container">
        <h1 className="footer-heading">Contact</h1>
        <div className="social">
          <FaWhatsappSquare className="footer-icon" />
          <FaFacebookSquare className="footer-icon" />
          <FaTwitterSquare className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaRegEnvelope className="footer-icon" />
        </div>
        <div className="contact-info">
          <p>
            <BsTelephoneInbound className="footer-icon" /> 0544006865
          </p>
          <p>
            <BsGeoAlt className="footer-icon" /> GCIHS, Adansi-Asokwa
          </p>
        </div>
      </div>
      <div className="footer-item-container">
        <h1 className="footer-heading">Important sites</h1>
        <Link to="" className="footer-list-item">
          <CgYoutube /> YouTube Channel
        </Link>
        <Link to="" className="footer-list-item">
          <GiTeacher /> Teaching resources
        </Link>
        <Link to="" className="footer-list-item">
          <TbReport /> Report card generator
        </Link>
        <Link to="" className="footer-list-item">
          <FaChalkboardTeacher /> Request private tuition
        </Link>
      </div>
    </div>
  );
};

export default Footer;
