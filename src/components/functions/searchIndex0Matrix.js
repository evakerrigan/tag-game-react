//функция нахождения индекса места 0 пустого в Матрице
export const searchIndex0Matrix = ({setMatrixArray, matrixArray, index0x, index0y}) => {
  console.log('-----ищем индексы положения 0-----')
  console.log('arr =', matrixArray);

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (arr[i][j] == 0) {
  //       index0x = j;
  //       index0y = i;
  //     }
  //   }
  // }
  for (let i = 0; i < matrixArray.length; i++) {
    for (let j = 0; j < matrixArray[i].length; j++) {
      if (matrixArray[i][j] == 0) {
        index0x = j;
        index0y = i;
      }
    }
  }

  console.log('index0x =', index0x);
  console.log('index0y =', index0y);
 
  
  }