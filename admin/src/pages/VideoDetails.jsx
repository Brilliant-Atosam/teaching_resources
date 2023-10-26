import { Avatar, TextField } from "@mui/material";
import "../styles/video-details.css";
import { BiDislike, BiLike, BiLink } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
const VideoDetails = () => {
  return (
    <div className="main-container">
      <div className="video-details-container">
        <div className="video-details-left">
          <video
            src="https://youtu.be/RQk5emb7174?si=0fx2EwQopM6nxOLe"
            className="video-element"
            controls
          ></video>
          <h1 className="video-details-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            velit fuga aliquid recusandae reprehenderit cumque dolor.
          </h1>
          <div className="video-details-other-info">
            <div className="channel-info-container">
              <Avatar src="https://yt3.ggpht.com/ftKD3HPGSF8X4kTjwTbdZmL-kHzKAaWXMeli0u6W-6yHN9uw52Fh6RZPEiHdA8Lgdkw-ux11Dw=s88-c-k-c0x00ffffff-no-rj" />
              <h2 className="channel-name">Lorem, ipsum dolor</h2>
            </div>
            <div className="video-details-info-action">
              <button className=" video-details-btn">
                <BiLike /> <span>like</span>
              </button>
              <button className="video-details-btn">
                <LiaDownloadSolid /> <span>Download 20.00</span>
              </button>
              <button className="video-details-btn">
                <BiLink /> <span>Copy link</span>
              </button>
            </div>
          </div>
          <div className="video-details-description-container">
            <div className="description-top">
              <h3 className="description-top-info">200 views 22 hours ago</h3>
            </div>
            <div className="decription-bottom">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              sequi similique voluptates neque ad impedit commodi ducimus
              consequuntur deserunt iste placeat porro ut ullam, blanditiis
              repellat omnis minus reprehenderit consequatur magni inventore.
              Corporis fugit laudantium unde quo tempora, cupiditate vitae?
            </div>
          </div>
          <div className="comments-section">
            <div className="comment-form">
              <Avatar src="https://yt3.ggpht.com/ftKD3HPGSF8X4kTjwTbdZmL-kHzKAaWXMeli0u6W-6yHN9uw52Fh6RZPEiHdA8Lgdkw-ux11Dw=s88-c-k-c0x00ffffff-no-rj" />
              <TextField
                id="standard-textarea"
                placeholder="Add a comment..."
                multiline
                variant="standard" 
                className="comment-input"
              />
            </div>
            <div className="comments-container">
              <div className="comment-item"></div>
            </div>
          </div>
        </div>
        <div className="video-details-right">right</div>
      </div>
    </div>
  );
};

export default VideoDetails;
