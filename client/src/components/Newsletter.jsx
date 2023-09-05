import "../styles/newsletter.css";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { CgYoutube } from "react-icons/cg";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-left-container">
        <h1 className="newsletter-title">
          Get notified on new releases in your email
        </h1>
        <button className="subscribe-btn newsletter-btn">
          <CgYoutube /> subscribe to our YouTube
        </button>
      </div>
      <div className="newsletter-right-container">
        <div className="newsletter-input-container">
          <FaUserCircle />{" "}
          <input
            type="text"
            className="newsletter-input"
            placeholder="Jon Snow"
          />
        </div>
        <div className="newsletter-input-container">
          <FaEnvelope />{" "}
          <input
            type="email"
            className="newsletter-input"
            placeholder="jonsnow@hbo.got"
          />
        </div>
        <button className="newsletter-btn">subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
