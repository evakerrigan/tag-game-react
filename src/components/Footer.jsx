import {SIZE_BOARD_3, SIZE_BOARD_4, SIZE_BOARD_5, SIZE_BOARD_6, SIZE_BOARD_7, SIZE_BOARD_8} from '../constants';

export const Footer = ({sizeBoard, setSizeBoard}) => {
  return (
    <div>
      <ul className="wrapper list">
      <li id="3" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_3); console.log('клик по: ', sizeBoard);}}>3*3</li>
      <li id="4" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_4); console.log('клик по: ', sizeBoard);}}>4*4</li>
      <li id="5" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_5); console.log('клик по: ', sizeBoard);}}>5*5</li>
      <li id="6" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_6); console.log('клик по: ', sizeBoard);}}>6*6</li>
      <li id="7" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_7); console.log('клик по: ', sizeBoard);}}>7*7</li>
      <li id="8" className="list-item" onClick={() => {setSizeBoard(SIZE_BOARD_8); console.log('клик по: ', sizeBoard);}}>8*8</li>
    </ul>
    </div>
  )
}