import {createArr} from './functions/createArr.js';

export const Board = ({setMatrixArray, tagNumber, arr, copyArr, matrixArray, index0x, index0y, indexNull, count}) => {

createArr({setMatrixArray, tagNumber, arr, copyArr, matrixArray, indexNull, count, index0x, index0y});


console.log('matrixArray после createArr =', matrixArray);

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


}
