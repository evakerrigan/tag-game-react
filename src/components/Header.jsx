export const Header = ({time, movie}) => {

const minutes = (time/60)|0;
const seconds = time%60;

  return (
    <div>
    <h1 className="title">Game Tag</h1>


    <div className="wrapper">

      <div className="no-button">Time</div>


      <div className="time">
        <span id="minutes">{minutes} :</span>
        <span id="seconds">{seconds}&nbsp;</span>
      </div>

      <div className="no-button">Movie</div>
      <div className="movie-count">{movie}</div>
      <div className="audio-button"></div>

    </div>

    <div className="wrapper buttons">

      <div className="button" onclick="newGame()">New Game</div>
      <div className="button save">Save</div>
      <div className="button load">Load</div>
      <div className="button top">Top results</div>
    </div>

    </div>

  )
}