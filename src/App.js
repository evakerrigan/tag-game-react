import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {useState, useEffect} from 'react';
import {SIZE_BOARD_DEFAULT} from './constants';
import {Board} from './components/Board';
import {createArr} from './components/functions/createArr';


export function App() {
  const [time, setTime] = useState(0);
  const [tagInterval, setTagInterval] = useState(1);
  const [movie1, setMovie] = useState(0);
  const [stateArray, setStateArray] = useState([]);
  const [sizeBoard, setSizeBoard] = useState(SIZE_BOARD_DEFAULT);


  const startTimer = () => {
    if (tagInterval == 1) {
      console.log('tagInterval-start =', tagInterval);
      setTagInterval(setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000))
    }
  }
  const stopTimer = () => {
    console.log('tagInterval =', tagInterval);
    clearInterval(tagInterval);
    setTagInterval(1);
    setTime(0);
  }

  useEffect(() => {
    setStateArray(createArr(sizeBoard));
    console.log('sizeBoard из = useEffect', sizeBoard);
  }, [sizeBoard]);

  return (
    <div className="App">
      <Header time={time} movie={movie1} />
      <div className="wrapper container">
        <Board
          tagNumber={sizeBoard}
          arr={stateArray}
         />
      </div>

      <button onClick={startTimer}>on</button>
      <button onClick={stopTimer}>off</button>
      <button onClick={() => setMovie(prev => prev + 1)}>+1</button>

      <Footer
       setSizeBoard={setSizeBoard}
        tagNumber={sizeBoard}
        />
    </div>
  );

}