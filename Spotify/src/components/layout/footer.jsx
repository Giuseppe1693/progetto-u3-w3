import next from "../../assets/playerbuttons/next.png";
import play from "../../assets/playerbuttons/play.png";
import prev from "../../assets/playerbuttons/prev.png";
import repeat from "../../assets/playerbuttons/repeat.png";
import shuffle from "../../assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

function Footer() {
  const selectedSong = useSelector((state) => state.data.selectedSong);

  return (
    <footer className="container-fluid fixed-bottom bg-container">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex align-items-center justify-content-center">
            {Object.keys(selectedSong).length === 0 ? null : (
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex gap-3 align-items-center justify-content-center">
                  <img
                    src={selectedSong.album.cover}
                    alt={selectedSong.title + " cover"}
                  />
                  <h6 className="text-white">{selectedSong.title}</h6>
                </div>
              </div>
            )}
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
