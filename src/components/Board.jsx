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

export const Board = ({
  sizeBoard,
  stateArray,
  allowDrop = () => undefined,
  onDropItem = () => undefined,
  onDragStartCard ,
  onDragEndCard ,
}) => {
  const [matrixArray, setMatrixArray] = useState([[]]);

  useEffect(()=>{
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
              onDragOver={(e) => allowDrop(e)}
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
              onDragEnd={(e) => onDragEndCard(e)}
              onDragOver={(e) => allowDrop(e)}
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

      {/*
    <div className={`boardItem class-${sizeBoard} item0`}>0</div>
    <div className={`boardItem class-${sizeBoard} active`}>1</div>
    <div className={`boardItem class-${sizeBoard} noactive`}>2</div>
    <div className={`boardItem class-${sizeBoard} active`}>3</div>


    <div
    key={`${cell}_${y}_${x}`}
    className={[
      `boardItem class-${sizeBoard}`,
      (cell===0) ? 'item0' : isActive(y, x, matrixArray) ? 'active' : 'noactive',
      ].filter(v=>v).join(' ')}
    {[
      (cell===0) ? {onDragover = "allowDrop(event)"
                    onDrop="onDropItem(event)"} :
                    isActive(y, x, matrixArray) ? {
                      draggable="true"
                      onDragStart="onDragStart(event)"
                      onDragEnd="onDragEndItem(event)"
                      onDragover = "allowDrop(event)"
                    } : '',
      ].filter(v=>v).join(' ')}
      >{cell}</div>




    */}
    </div>
  );
  /*
    for (let row=0; row<matrixArray.length; row++) {
      for (let cell=0; cell<matrixArray[row].length; cell++) {
          if (matrixArray[row][cell] === 0) {
            return (
                    <div class="item item0 class-${tagNumber}"
                    ondragover = "allowDrop(event)"
                    onDrop="onDropItem(event)"
                    >${matrixArray[row][cell]}</div>
            )
          } else {
            if (((row === (index0y)) && (cell === (index0x-1))) ||
            ((row === (index0y)) && (cell === (index0x+1))) ||
            ((row === (index0y-1)) && (cell === (index0x))) ||
            ((row === (index0y+1)) && (cell === (index0x)))) {

                return (
                    <div class="item active class-${tagNumber}"
                    draggable="true"
                    onDragStart="onDragStart(event)"
                    onDragEnd="onDragEndItem(event)"
                    ondragover = "allowDrop(event)"
                    >${matrixArray[row][cell]}</div>
                )
            } else {
                return (
                    <div class="item noactive class-${tagNumber}"
                    >${matrixArray[row][cell]}</div>
                )
            }

          }
      }
    }
    // addClickTag();
    let stringMatrixArray = matrixArray.flat().join('');
    console.log('stringMatrixArray =', stringMatrixArray);
    let stringArray = copyArr.join('').slice(1) + '0';
    console.log('stringArray =', stringArray);
    if (stringMatrixArray === stringArray) {
    //   stopTimer();
      alert('ВЫ ВЫИГРАЛИ !');}
    //   setTopLocalStorage();
*/
};
