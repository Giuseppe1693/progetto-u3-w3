import Album from "./album";
function Albums(props) {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <div id={props.musicType}>
            <h2>{props.title}</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id={`${props.musicType}Section`}
            >
              <Album artist={props.artist} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Albums;
