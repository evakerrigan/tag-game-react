// import {checkInvertions} from './checkInvertions';
import {searchIndex0Matrix} from './searchIndex0Matrix';

//перемешиватель элементов в массиве
function mixarr(arr){
  return arr.sort(() => Math.random() - 0.5);
}

//разбиение массива на подмассивы
function createMatrix() {
  matrixArray = [];
  for (let i = 0; i <Math.ceil(arr.length/tagNumber); i++){
    matrixArray[i] = arr.slice((i*tagNumber), (i*tagNumber) + tagNumber);
  }
  console.log('matrixArray =', matrixArray);
}

//заполняем массив элементами
export const createArr = (tagNumber) => {
  console.log('----------------заполняем массив элементами-------------');
  let arr = [];

  const arrLength = tagNumber*tagNumber;
  for (let i = 0; i < arrLength; i++) {
    arr.push(i);
  }
  arr = mixarr(arr);//перемешиваем массив рэндомом
  console.log('mixarr(arr) =', arr);

  return arr;
}