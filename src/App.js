import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { SIZE_BOARD_DEFAULT } from "./constants";
import { Board } from "./components/Board";
import { createArr } from "./components/functions/createArr";
import { audioStartPlay, audioStopPlay } from "./utils";

let timerLink;

export function App() {
  const [time, setTime] = useState(0);
  const [movieCount, setMovieCount] = useState(0);
  const [stateArray, setStateArray] = useState([]);
  const [sizeBoard, setSizeBoard] = useState(SIZE_BOARD_DEFAULT);
  const [isPlaySound, setIsPlaySound] = useState(false);

  const startTimer = () => {
    console.log('startTimer');
    if (!timerLink) {
      console.log("timerLink-start =", timerLink);
      timerLink = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      console.log("timerLink =", timerLink);
    }
  };

  const stopTimer = () => {
    console.log('stopTimer');
    console.log("timerLink =", timerLink);
    clearInterval(timerLink);
    timerLink = undefined;
    setTime(0);
  };

  function addMovieCount() {
    setMovieCount((prev) => prev + 1);
  }
  function resetMovieCount() {
    setMovieCount(0);
  }

  function togglePlaySound() {
    setIsPlaySound(!isPlaySound);
  }

  // берем и поднимаем мышкой плашку
  function onDragStartCard() {
    if (isPlaySound) {
      audioStartPlay();
    }
  }
  function onDragEndCard() {
    if (isPlaySound) {
      audioStopPlay();
    }
    // getEventElement(e);
    // searchIndexElement(eventElement);
    // newViewTag();
  }
  function onDropItem(e) {
    console.log("кладем элемент сюда onDropItem");
    addMovieCount();
  }

  useEffect(() => {
    console.log("movieCount =", movieCount);
    if (movieCount === 1) {
      startTimer();
    }
    return () => {
      // if (movieCount === 0) {
      stopTimer();
      //}
    };
  }, [movieCount]);

  useEffect(() => {
    setStateArray(createArr(sizeBoard));
    console.log("sizeBoard из useEffect = ", sizeBoard);
  }, [sizeBoard]);

  return (
    <div className="App">
      <Header
        time={time}
        movie={movieCount}
        isPlaySound={isPlaySound}
        togglePlaySound={togglePlaySound}
      />
      <div className="wrapper container">
        <Board
          sizeBoard={sizeBoard}
          stateArray={stateArray}
          onDragStartCard={onDragStartCard}
          onDragEndCard={onDragEndCard}
        />
      </div>

      <button onClick={startTimer}>on</button>
      <button onClick={stopTimer}>off</button>
      <button onClick={() => addMovieCount()}>+1</button>

      <Footer setSizeBoard={setSizeBoard} tagNumber={sizeBoard} />
    </div>
  );
}
