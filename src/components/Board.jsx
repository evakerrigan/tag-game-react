import {createArr, createMatrix} from './functions/createArr.js';
const isActive = (x,y,index0xy) =>{

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        index0x = j;
        index0y = i;
        // index0Matrix = { 'x': j, 'y': i};
      }
    }
  }

  return false;
}
export const Board = ({
  // setMatrixArray,
  sizeBoard, stateArray
  // copyArr, matrixArray,
  // index0x, index0y, indexNull, count
}) => {
  const index0xy = {x:0,y:0};

const matrixArray = createMatrix(stateArray, sizeBoard);


return (
  <div className='board'>
{matrixArray.map((row, y) => (
  row.map((cell, x) => (
    <div key={`${cell}_${y}_${x}`} className={[
      `boardItem class-${sizeBoard}`,
      (cell===0)?'item0':'',
      isActive(x,y,index0xy)?'active':'noactive'
      ].filter(v=>v).join(' ')}>{cell}</div>
  ))
))}
{/*
    <div className={`boardItem class-${sizeBoard} item0`}>0</div>
    <div className={`boardItem class-${sizeBoard} active`}>1</div>
    <div className={`boardItem class-${sizeBoard} noactive`}>2</div>
    <div className={`boardItem class-${sizeBoard} active`}>3</div>
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

}
