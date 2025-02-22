import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setSelectedSong } from "../features/data/dataSlice";

function Album(props) {
  const dispatch = useDispatch();
  const { songs, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(props.artist));
  }, [dispatch, props.artist]);

  const handleSongClick = (song) => {
    dispatch(setSelectedSong(song));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!songs[props.artist] || songs[props.artist].length === 0) {
    return <p>No songs available for this artist.</p>;
  }

  return (
    <>
      {songs[props.artist].map((song, index) =>
        index >= 4 ? null : (
          <button className="bg-transparent border-0 text-white" key={song.id} onClick={() => handleSongClick(song)}>
            <article className="d-flex flex-column gap-2 align-items-center">
              <img src={song.album.cover} />
              <h6 className="text-center">{song.title}</h6>
            </article>
          </button>
        )
      )}
    </>
  );
}

export default Album;
