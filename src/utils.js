//функции для аудио
const audioStart = new Audio("https://kerrigan.su/work-temp/meow.mp3");
const audioStop = new Audio("https://kerrigan.su/work-temp/mur.mp3");

export function audioStartPlay() {
  audioStart.play();
}

export function audioStopPlay() {
  audioStop.play();
}