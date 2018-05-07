var currentNumber = 0;
var incrementBtn = document.querySelector('.increment');
var numberOnScreen = document.querySelector('.number');

var storedNumber = localStorage.getItem('counter');
// if(storedNumber != undefined){
    currentNumber = storedNumber;
//}
// put the current number on the screen
numberOnScreen.innerHTML = currentNumber;

incrementBtn.addEventListener('click', function(){
  currentNumber++;
  numberOnScreen.innerHTML = currentNumber;
  localStorage.setItem('counter', currentNumber);
  // if (currentNumber === 5){
  //   localStorage.removeItem('counter');
  //   currentNumber = 0;
  // }
});
