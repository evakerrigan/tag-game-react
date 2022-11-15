let arr = [];//стартовый массив
let copyArr = [];//копия стартового массива до миксования
let indexNull;//индекс 0 в рэндомном массиве
let index0;//индекс пустого места в массиве
let index0x;//индекс 0 по оси х
let index0y;//индекс 0 по оси y
let index0Matrix;//объект с координатами 0
let eventElement;//элемент по которому кликнули
let indexX;//индекс кликнутого элемента по оси x
let indexY;//индекс кликнутого элемента по оси y
let indexEventElement;//объект с координатами кликнутого элемента
let count = 0;//счетчик для проверки количества инверсий
let tagNumber = 4;//размерность пятнашки
let matrixArray = []; //массив в который будет выведен результат.
let movieCount = 0;//количество ходов
let numberItem;//плашка по которой кликнули мышкой
let seconds = 0;//секунды
let minutes = 0;//минуты
let timeFlag = 0;//флаг, включен таймер или нет
let stringArr;//слитый в строку массив для проверки на выигрыш
let saveStorageArray;//сохраненная незаконченная игра
let topStorage;//сохраненные лучшие 10 игр
let copyStorageArray;//copyArr в локалсторадже
let isPlay = true;//изначально звук включен
const container = document.querySelector('.container');
const audioButton = document.querySelector('.audio-button');
const movieCountHtml = document.querySelector('.movie-count');
const listItem = document.querySelectorAll('.list-item');
const save = document.querySelector('.save');
const load = document.querySelector('.load');
const topResult = document.querySelector('.top');


createArr();

//заполняем массив элементами
function createArr() {
  console.log('----------------заполняем массив элементами-------------');
  arr = [];
  copyArr = [];
  for (let i = 0; i < tagNumber*tagNumber; i++) {
    arr.push(i);
    copyArr.push(i);
  }

  mixarr(arr);//перемешиваем массив рэндомом
  console.log('mixarr(arr) =', arr);

  //разбиение массива на подмассивы
  createMatrix();

  searchIndex0Matrix(matrixArray);
  console.log('%cMyProject%cline:52%cmatrixArray - НОВАЯ ИГРА', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
  'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px', matrixArray);
  checkInvertions();
}

//разбиение массива на подмассивы
function createMatrix() {
  matrixArray = [];
  for (let i = 0; i <Math.ceil(arr.length/tagNumber); i++){
    matrixArray[i] = arr.slice((i*tagNumber), (i*tagNumber) + tagNumber);
  }
  console.log('matrixArray =', matrixArray);
}

//делаем проверку на решаемость пятнашки
function checkInvertions() {
  console.log('-----проверяем на решаемость-----');
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



//функция отрисовки пятнашки
// vewTag();

//вывод на страницу раскладки пятнашки
function vewTag() {
  console.log('-----отрисовываем пятнашку-----')
  container.innerHTML = '';
  console.log('длина матриксэррей перед отрисовкой =', matrixArray.length);
  for (let row=0; row<matrixArray.length; row++) {
    for (let cell=0; cell<matrixArray[row].length; cell++) {
        if (matrixArray[row][cell] == 0) {
          container.innerHTML += `
          <div class="item item0 class-${tagNumber}"
          ondragover = "allowDrop(event)"
          onDrop="onDropItem(event)"
          >${matrixArray[row][cell]}</div>
          `;
        } else {
          if (((row == (index0y)) && (cell == (index0x-1))) ||
          ((row == (index0y)) && (cell == (index0x+1))) ||
          ((row == (index0y-1)) && (cell == (index0x))) ||
          ((row == (index0y+1)) && (cell == (index0x)))) {

              container.innerHTML += `
              <div class="item active class-${tagNumber}"
              draggable="true"
              onDragStart="onDragStart(event)"
              onDragEnd="onDragEndItem(event)"
              ondragover = "allowDrop(event)"
              >${matrixArray[row][cell]}</div>`;
          } else {
            container.innerHTML += `
            <div class="item noactive class-${tagNumber}"
            >${matrixArray[row][cell]}</div>`;
          }

        }
    }
  }
  // addClickTag();
  let stringMatrixArray = matrixArray.flat().join('');
  console.log('stringMatrixArray =', stringMatrixArray);
  let stringArray = copyArr.join('').slice(1) + '0';
  console.log('stringArray =', stringArray);
  if (stringMatrixArray == stringArray) {
    stopTimer();
    alert('ВЫ ВЫИГРАЛИ !');
    setTopLocalStorage();
  }

}

//берем и поднимаем мышкой плашку
function onDragStart( event ) {
  if(isPlay) {
    audioStartPlay();
  }
}

function allowDrop( event ) {
  event.preventDefault(); // отмена действия браузера по умолчанию (через событие ondragover) 
}

function onDragEndItem(e) {
  console.log('опускаем элемент onDragEndItem');
  if(isPlay) {
    audioStopPlay();
  }
  getEventElement(e);
  searchIndexElement(eventElement);
  newViewTag();
}
function onDropItem(e) {
  console.log('кладем элемент сюда onDropItem');
  movieCount++;
  if (movieCount == 1) {
    startTimer();
  }
  console.log('movieCount =', movieCount);  
  movieCountHtml.textContent = movieCount;
}

//получение значения кликнутого элемента
function getEventElement(e) {
  eventElement = e.target.innerHTML;
  console.log('значение кликнутого элемента =', eventElement);
}

//меняем местами элемент массива и 0, и отрисовываем пятнашку заново
function newViewTag() {
  console.log('-----меняем местами 0 и выбранную плашку-----');
  [matrixArray[index0y][index0x], matrixArray[indexY][indexX]] = [matrixArray[indexY][indexX], matrixArray[index0y][index0x]];
  console.log('newMatrixArray =', matrixArray);
  index0x = indexX;
  index0y = indexY;
  console.log('index0x =', index0x);
  console.log('index0y =', index0y);
  vewTag();
}

//перемешиватель элементов в массиве
function mixarr(arr){
  arr.sort(() => Math.random() - 0.5);
}

//функция нахождения индекса места 0 пустого в Матрице
function searchIndex0Matrix(arr) {
  console.log('-----ищем индексы положения 0-----')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        index0x = j;
        index0y = i;
        // index0Matrix = { 'x': j, 'y': i};
      }
    }
  }
  console.log('index0x =', index0x);
  console.log('index0y =', index0y);
  // console.log('index0Matrix =', index0Matrix);
  }

  //поиск координат выбранного элемента
  function searchIndexElement(eventElement) {
    console.log('-----ищем координаты кликнутого элемента-----')

    for (let i = 0; i < matrixArray.length; i++) {
      for (let j = 0; j < matrixArray[i].length; j++) {
        if (matrixArray[i][j] == eventElement) {
          indexX = j;
          indexY = i;
          // indexEventElement = { 'x': j, 'y': i};
        }
      }
    }
    console.log('indexX =', indexX);
    console.log('indexY =', indexY);
    // console.log('indexEventElement =', indexEventElement);
    }

//получение значения апри выборе варианта пятнашки
function clickNumber() {
  
  for (let item of listItem) {
    item.addEventListener('click', function(e) {
      tagNumber = +e.target.textContent.slice(-1);
      console.log("Размер кликнутого поля:", tagNumber);

      listItem.forEach(item=>{ item.classList.remove('number-active') });
      item.classList.add('number-active');
      createArr();
      if (timeFlag === 1) {
        stopTimer();
      };
      movieCount = 0;
      movieCountHtml.textContent = 0;
    });
  }
}
clickNumber();

//вывод времени на страницу
const time = document.querySelector('.time');

// function showTime() {
//   const date = new Date();
//   const currentTime = date.toLocaleTimeString();
//   time.textContent = currentTime;
//   setTimeout(showTime, 1000); 
// }
// showTime();

//запуск игры без перезагрузки страницы
function newGame() {
  console.log('-----ПЕРЕЗАПУСК ИГРЫ-----');
  console.log('tagNumber =', tagNumber);
  movieCount = 0;
  movieCountHtml.textContent = movieCount;
  listItem.forEach(item=>{ item.classList.remove('number-active') });
  createArr();
  if (timeFlag === 1) {
    stopTimer();
  };
}


//таймер
function startTimer() {
  timeFlag = 1;
  tagTimer = setTimeout( function() {
    seconds++;
    if ( seconds > 59 ) {
      seconds = 0;
      minutes++;
      if ( minutes < 10 ) {
        document.getElementById('minutes').innerHTML = '0' + minutes + ' :';
      } else {
        document.getElementById('minutes').innerHTML = minutes + ':';
      }
    }

    if ( seconds < 10 ) {
      document.getElementById('seconds').innerHTML = '0' + seconds;
    } else {
      document.getElementById('seconds').innerHTML = seconds;
    }
    startTimer();
  }, 1000 );
}

function stopTimer() {
  timeFlag = 0;
  clearTimeout(tagTimer);
  seconds = 0;
  document.getElementById('seconds').innerHTML = '00'
  minutes = 0;
  document.getElementById('minutes').innerHTML = '00 : '

}

//функции для аудио
const audioStart = new Audio("https://kerrigan.su/work-temp/meow.mp3");
function audioStartPlay() {
  audioStart.play();
}
const audioStop = new Audio("https://kerrigan.su/work-temp/mur.mp3");
function audioStopPlay() {
  audioStop.play();
}
audioButton.addEventListener('click', () => {
  isPlay = !isPlay;
  if (!isPlay) {
    audioButton.classList.add('mute');
  } else {
    audioButton.classList.remove('mute');
  }
  console.log('isPlay =', isPlay);
})

//передвижение плашек по клику
container.addEventListener('click', event => {
  if (event.target.classList.contains('active')) {
    if(isPlay) {
      audioStartPlay();
    }
    console.log(event.target.textContent);
    searchIndexElement(event.target.textContent);
    newViewTag();
    movieCount++;
    if (movieCount == 1) {
      startTimer();
    }
    console.log('movieCount =', movieCount);
    movieCountHtml.textContent = movieCount;
  }
})

//сохранение в локал сторадж
save.addEventListener('click', event => {
  saveLocalStorage();
  console.log('клик по save');
  if (timeFlag === 1) {
    stopTimer();
  };
  });
load.addEventListener('click', event => {
  loadLocalStorage();
  console.log('клик по load');
  console.log('%cMyProject%cline:369%c - загружаем сохраннную недоигранную игру', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
  'color:#fff;background:rgb(229, 187, 129);padding:3px;border-radius:2px');
});
topResult.addEventListener('click', event => {
  getTopLocalStorage();
  console.log('клик по topResult');
});
function setTopLocalStorage() {
  topStorageMovieCount = movieCount;
  topStorageTagNumber = tagNumber;
  localStorage.setItem('topStorageMovieCount', topStorageMovieCount);
  localStorage.setItem('topStorageTagNumber', topStorageTagNumber);
}
function getTopLocalStorage() {
  topStorageMovieCount = localStorage.getItem('topStorageMovieCount');
  topStorageTagNumber = localStorage.getItem('topStorageTagNumber');
}
function saveLocalStorage() {
  saveStorageArray = JSON.stringify(matrixArray.flat());
  copyStorageArray = JSON.stringify(copyArr);
  console.log('matrixArray.flat() =', matrixArray.flat());
  console.log('JSON.stringify(matrixArray.flat()) =', saveStorageArray )
  localStorage.setItem('eva-movies-Storage', movieCount);
  localStorage.setItem('eva-seconds-Storage', seconds);
  localStorage.setItem('eva-minutes-Storage', minutes);
  localStorage.setItem('eva-tagNumber-Storage', tagNumber);
  localStorage.setItem('eva-array-Storage', saveStorageArray);
  localStorage.setItem('eva-copyArr-Storage', copyStorageArray);
}
function loadLocalStorage() {
  movieCount = +localStorage.getItem('eva-movies-Storage');
  seconds = +localStorage.getItem('eva-seconds-Storage');
  minutes = +localStorage.getItem('eva-minutes-Storage');
  tagNumber = +localStorage.getItem('eva-tagNumber-Storage');
  arr = JSON.parse(localStorage.getItem('eva-array-Storage'));
  copyArr = JSON.parse(localStorage.getItem('eva-copyArr-Storage'));
  console.log('saveStorageArray =', saveStorageArray);
  console.log('typeof saveStorageArray =', (typeof saveStorageArray));
  console.log('arr из локалстораджа =', arr);

  movieCountHtml.textContent = movieCount;
  listItem.forEach(item=>{ item.classList.remove('number-active') });

  // container.innerHTML = '';
  createMatrix();
  searchIndex0Matrix(matrixArray);
  vewTag();

  if (timeFlag === 1) {
    stopTimer();
  };

  startTimer();


}

//-----------------------------------------------------
//размышления от меня

// const itemActive = document.querySelectorAll('.active');
// let value;
// function addClickTag(e) {
  // for (let item of itemActive) {
  //   console.log(item);
  //   item.addEventListener('click', (e) => {
  //     value = +e.target.textContent;
  //     console.log(value);
  //     searchIndexElement(value);
  //     newViewTag();
  //   });
  // }
  // }
// }


//--------------------------------------------------------
//МУДРОСТИ ОТ ЖЕНИ

//для возможности движения по клику от Жени

// function onClick(value) {
//     searchIndexElement(value);
//     newViewTag();
// }

// onClick="{onClick(${matrixArray[row][cell]})}"