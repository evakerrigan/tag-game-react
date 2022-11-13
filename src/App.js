import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {useState, useEffect} from 'react';
import {SIZE_BOARD_DEFAULT} from './constants';
import {Board} from './components/Board';


function App() {

const arr = [];
const copyArr = [];
const matrixArray = [];
let index0x;//индекс 0 по оси х
let index0y;//индекс 0 по оси y
let indexNull;//индекс 0 в рэндомном массиве
let index0;//индекс пустого места в массиве
let count = 0;//счетчик для проверки количества инверсий

  const [time, setTime] = useState(0);

  const [tagInterval, setTagInterval] = useState(1);

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


  const [movie1, setMovie] = useState(0);

  const [sizeBoard, setSizeBoard] = useState(SIZE_BOARD_DEFAULT);

  useEffect(() => {console.log('sizeBoard из = useEffect', sizeBoard);}, [sizeBoard]);

  console.log('sizeBoard из консоли =', sizeBoard);

  // const [matrixArray, setMatrixArray] = useState([]);

  return (
    <div className="App">

      <Header time={time} movie={movie1} />

      <div className="wrapper container">

        <Board
          tagNumber={sizeBoard}
          arr={arr}
          copyArr={copyArr}
          matrixArray={matrixArray}
          index0x={index0x}
          index0y={index0y}
          indexNull={indexNull}
          index0={index0}
          count={count}
          />

      </div>

      <button onClick={startTimer}>on</button>
      <button onClick={stopTimer}>off</button>
      <button onClick={() => setMovie(prev => prev + 1)}>+1</button>

      <Footer setSizeBoard={setSizeBoard} tagNumber={sizeBoard}/>
    </div>
  );

}

export default App;
