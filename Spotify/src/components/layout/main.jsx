import Albums from "../albums";
import { useSelector } from "react-redux";

function Main() {
  const searchedArtist = useSelector((state) => state.data.searchedArtist);
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>
          {searchedArtist && (
            <Albums
              title="Search Result"
              artist={searchedArtist}
              musicType="searchArtist"
            />
          )}
          <Albums title="Rock Classic" artist="queen" musicType="rock" />
          <Albums title="Pop Culture" artist="katyperry" musicType="pop" />
          <Albums title="HipHop" artist="eminem" musicType="hipHop" />
        </main>
      </div>
    </div>
  );
}

export default Main;
