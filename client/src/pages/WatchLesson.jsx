import "../styles/watch.css";
import vid from "../videos/vid.mp4";
const WatchLesson = () => {
  return (
    <div className="watch-container">
      <div className="video-container">
        <video
          src={vid}
          controls
          controlsList="nodownload"
          className="video-player"
          onContextMenu="return false;" onLoad={document.addEventListener('contextmenu', function(){
            const vid = document.getElementsByTagName('video')[0].addEventListener('contextmenu', function(e){e.preventDefault()})
          })}
        ></video>
      </div>
    </div>
  );
};

export default WatchLesson;
