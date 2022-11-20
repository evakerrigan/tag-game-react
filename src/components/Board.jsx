import { useEffect, useState } from "react";
import { createArr, createMatrix } from "./functions/createArr.js";

const isActive = (y, x, matrixArray) => {
  let index0x;
  let index0y;

  for (let i = 0; i < matrixArray.length; i++) {
    for (let j = 0; j < matrixArray[i].length; j++) {
      if (matrixArray[i][j] == 0) {
        index0x = j;
        index0y = i;
      }
    }
  }

  if (
    (y === index0y && x === index0x - 1) ||
    (y === index0y && x === index0x + 1) ||
    (y === index0y - 1 && x === index0x) ||
    (y === index0y + 1 && x === index0x)
  ) {
    return true;
  } else {
    return false;
  }
};

function allowDrop(event) {
  event.preventDefault(); // отмена действия браузера по умолчанию (через событие ondragover)
}

export const Board = ({
  sizeBoard,
  stateArray,
  onDropItem = () => undefined,
  onDragStartCard,
  onDragEndCard,
}) => {
  const [matrixArray, setMatrixArray] = useState([[]]);
  //  const matrixArray = createMatrix(stateArray, sizeBoard);
  useEffect(() => {
    setMatrixArray(createMatrix(stateArray, sizeBoard));
  }, [stateArray, sizeBoard]);

  return (
    <div className="board">
      {matrixArray.map((row, y) =>
        row.map((cell, x) =>
          cell === 0 ? (
            <div
              key={`${cell}_${y}_${x}`}
              className={`boardItem item0 class-${sizeBoard}`}
              onDragOver={allowDrop}
              onDrop={(e) => onDropItem(e)}
            >
              {cell}
            </div>
          ) : isActive(y, x, matrixArray) ? (
            <div
              key={`${cell}_${y}_${x}`}
              className={`boardItem active class-${sizeBoard}`}
              draggable={"true"}
              onDragStart={(e) => onDragStartCard(e)}
              onDragEnd={() => {
                const indexCurrentItem = matrixArray.flat().findIndex((item) => item === cell);
                onDragEndCard(indexCurrentItem);
                console.log("indexCurrentItem:", indexCurrentItem);
              }}
              onDragOver={allowDrop}
            >
              {cell}
            </div>
          ) : (
            <div
              key={`${cell}_${y}_${x}`}
              className={`boardItem noactive class-${sizeBoard}`}
            >
              {cell}
            </div>
          )
        )
      )}

      {/* function allowDrop( e ) {
  e.preventDefault() // отмена действия браузера по умолчанию (через событие ondragover)
} */}

      {/* function onDropItem(e) {
  console.log('кладем элемент сюда onDropItem');
  movieCount++;
  if (movieCount == 1) {
    startTimer();
  }
  console.log('movieCount =', movieCount);
  movieCountHtml.textContent = movieCount;
} */}
    </div>
  );

  // // addClickTag();
  // let stringMatrixArray = matrixArray.flat().join('');
  // console.log('stringMatrixArray =', stringMatrixArray);
  // let stringArray = copyArr.join('').slice(1) + '0';
  // console.log('stringArray =', stringArray);
  // if (stringMatrixArray === stringArray) {
  // //   stopTimer();
  //   alert('ВЫ ВЫИГРАЛИ !');}
  // //   setTopLocalStorage();
};
