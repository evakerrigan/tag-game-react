import React from "react";
import Element from '../Element/Element.jsx';

function Board() {

  let arrTag = [4, 6, 0, 7, 5, 1, 8, 2, 3];
  let tagNumber = 3;
  let matrixArray = [];

  createMatrix();

  function createMatrix() {    
    for (let i = 0; i <Math.ceil(arrTag.length/tagNumber); i++){
      matrixArray[i] = arrTag.slice((i*tagNumber), (i*tagNumber) + tagNumber);
    }
    console.log('matrixArray =', matrixArray);
  }



  return (
    <div className="board wrapper container">

{/* {  for (let row=0; row<matrixArray.length; row++) {
    for (let cell=0; cell<matrixArray[row].length; cell++) {

        if (matrixArray[row][cell] == 0) {

          return {<Element className="item item0 class-${tagNumber}">${matrixArray[row][cell]}</Element>}

        } else {
          if (((row == (index0y)) && (cell == (index0x-1))) || ((row == (index0y)) && (cell == (index0x+1))) ||
                ((row == (index0y-1)) && (cell == (index0x))) || ((row == (index0y+1)) && (cell == (index0x)))) {

                  return {<Element className="item active class-${tagNumber}">${matrixArray[row][cell]}</Element>}

                } else {
                  return {<Element className="item noactive class-${tagNumber}">${matrixArray[row][cell]}</Element>}
                }

        }
    }
  }
} */}





    {/* { arrTag.map( (item, index) => {
                       return <Element key={index} number={item}/>
                             })} */}

    </div>
  );
}

export default Board;