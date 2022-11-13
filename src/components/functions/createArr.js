// import {checkInvertions} from './checkInvertions';
import {searchIndex0Matrix} from './searchIndex0Matrix';

//заполняем массив элементами
export const createArr = ({tagNumber, arr, copyArr, matrixArray, indexNull, count, index0x, index0y}) => {
  console.log('----------------заполняем массив элементами-------------');
  arr = [];
  copyArr = [];
  console.log('arr =', arr);
  console.log('tagNumber =', tagNumber);
  for (let i = 0; i < tagNumber*tagNumber; i++) {
    arr.push(i);
    copyArr.push(i);
  }
  console.log('arr222 =', arr);

mixarr(arr);//перемешиваем массив рэндомом
console.log('mixarr(arr) =', arr);

//разбиение массива на подмассивы
createMatrix();

searchIndex0Matrix({matrixArray, index0x, index0y});
console.log('%cMyProject%cline:52%cmatrixArray - НОВАЯ ИГРА', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px', matrixArray);

console.log('index0y перед checkInvertions =', index0y);

// checkInvertions({tagNumber, arr, indexNull, count, index0x, index0y});
//вообще, рендер у нас вызывается из чекинвершионс, но мы его временно отключили и вызовем пока из Board, без проверки


//разбиение массива на подмассивы
function createMatrix() {
  matrixArray = [];
  for (let i = 0; i <Math.ceil(arr.length/tagNumber); i++){
    matrixArray[i] = arr.slice((i*tagNumber), (i*tagNumber) + tagNumber);
  }
  console.log('matrixArray =', matrixArray);
  
}

//перемешиватель элементов в массиве
function mixarr(arr){
  arr.sort(() => Math.random() - 0.5);
}

// return matrixArray;

}

