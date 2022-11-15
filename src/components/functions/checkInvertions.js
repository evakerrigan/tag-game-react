import {createArr} from './createArr';

//делаем проверку на решаемость пятнашки
export const checkInvertions = ({tagNumber, arr, indexNull, count, index0y}) => {
  console.log('-----проверяем на решаемость-----');
  console.log('index0y =', index0y);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      indexNull = i;
    }
  }
  console.log('indexNull =', indexNull);
  let checkOddArr = Array.from(arr);
  let checkOddArrNoNull = checkOddArr.filter(value => value );
  for (let i = checkOddArrNoNull.length - 1; i >= 0; i--) {
    for (let h = i-1; h >= 0; h--) {
      if (checkOddArrNoNull[h] > checkOddArrNoNull[i]) {
        count++;
      }
    }
  }
  console.log('count+++', count);
  console.log('вот тут сейчас index0y =', index0y);
  //------для четной пятнашки
  if (tagNumber % 2 === 0) {
    console.log('пятнашка ЧЕТНАЯ');
    ((count + index0y) % 2) === 0 ? 
    (console.log('Нет, т.к. четное инверсий =', (count + index0y)), createArr() )
    : 
    (console.log('Решаема, т.к. нечетное инверсий =', (count + index0y)), vewTag());
  }
  //------для нечетной пятнашки
  if (tagNumber % 2 !== 0) {
    console.log('пятнашка НЕЧЕТНАЯ');
    (count) % 2 === 0 ? (console.log('Решаема, т.к. четное инверсий =', count), vewTag()) : (console.log('Нет, т.к. нечетное инверсий =', count), createArr());
  }
}