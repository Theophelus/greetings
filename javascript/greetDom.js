//Get references for text box, display, button and countName
var enteredNameElement = document.querySelector(".nameInput");
var greetMeElement = document.querySelector(".greetMe");
var displayElement = document.querySelector(".display");
var countElement = document.querySelector(".countElem");
var resetElement = document.querySelector(".reset");
//var countNumbers = localStorage.getItem("count") ? JSON.parse(localStorage.getItem('count')): {};
var initialValue = JSON.parse(localStorage.getItem('count'));
//Declare instance of GREETINGS and pass initial value as argument
var newGreetings = greetings(initialValue);
countElement.innerHTML = newGreetings.getEnteredName();
//Add an event listener when greet me is clicked
greetMeElement.addEventListener("click", function(){
  //Declare a varible to get entered name value and counted Value
  var enteredName = enteredNameElement.value;
  var checkedRadioBtn = document.querySelector("input[name='whichLanguage']:checked");
  if(checkedRadioBtn){
    var checked = checkedRadioBtn.value;
  }
  //var enteredName = enteredNameElement.value;
  //console.log(enteredName);
  var selectedLanguage = newGreetings.setEnteredName(checked, enteredName);
  //console.log(selectedLanguage)
  displayElement.innerHTML = selectedLanguage;
  countElement.innerHTML = newGreetings.getEnteredName();
  localStorage.setItem('count', JSON.stringify(newGreetings.map()));
  //Call clear textbox function
  //clear();
});
