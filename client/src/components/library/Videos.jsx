import React from "react";
import cover from "../../images/cover.jpg";
import { BsDownload, BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <div className="library-container">
      <h1 className="library-title">video lessons</h1>
      <div className="library-elements-container">
        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <p className="library-item-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            doloremque placeat repellendus ipsam recusandae, odio autem
            provident dolor dolorum quidem, velit beatae nam quam iusto
            distinctio accusamus esse adipisci? Tempora doloribus ex omnis,
            illum atque saepe corrupti deserunt. Cumque, veritatis!
          </p>
          <button className="library-item-btn play-btn">
            <BsPlayCircle /> watch now
          </button>
          <button className="library-item-btn">
            <BsDownload />
            download (5 cedis)
          </button>
        </div>
        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <p className="library-item-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            doloremque placeat repellendus ipsam recusandae, odio autem
            provident dolor dolorum quidem, velit beatae nam quam iusto
            distinctio accusamus esse adipisci? Tempora doloribus ex omnis,
            illum atque saepe corrupti deserunt. Cumque, veritatis!
          </p>
          <button className="library-item-btn play-btn">
            <BsPlayCircle /> watch now
          </button>
          <button className="library-item-btn">
            <BsDownload />
            download (5 cedis)
          </button>
        </div>
        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <p className="library-item-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            doloremque placeat repellendus ipsam recusandae, odio autem
            provident dolor dolorum quidem, velit beatae nam quam iusto
            distinctio accusamus esse adipisci? Tempora doloribus ex omnis,
            illum atque saepe corrupti deserunt. Cumque, veritatis!
          </p>
          <button className="library-item-btn play-btn">
            <BsPlayCircle /> watch now
          </button>
          <button className="library-item-btn">
            <BsDownload />
            download (5 cedis)
          </button>
        </div>

        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <p className="library-item-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            doloremque placeat repellendus ipsam recusandae, odio autem
            provident dolor dolorum quidem, velit beatae nam quam iusto
            distinctio accusamus esse adipisci? Tempora doloribus ex omnis,
            illum atque saepe corrupti deserunt. Cumque, veritatis!
          </p>
          <button className="library-item-btn play-btn">
            <BsPlayCircle /> watch now
          </button>
          <button className="library-item-btn">
            <BsDownload />
            download (5 cedis)
          </button>
        </div>
      </div>
      <Link className="see-more-link" to="/lessons">
        See more video lessons
      </Link>
    </div>
  );
};

export default Videos;
