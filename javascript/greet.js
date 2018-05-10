
var greetings = function(initialValue){
  var nameMap = {};
  var enteredName = '';
  //Everytime a namae is detacted the count
  if(initialValue){
    nameMap = initialValue;
  }
  ///////////////////CHECK IF USER EXISTS IF NOT ADD////////////////////////////
  //when the greet button is pressed check if this user was already greeted before
  //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
  var setEnteredName = function( selectedLanguage,name){

    if(name !==''){
      enteredName = name;

      if(nameMap[enteredName]=== undefined){
        //add an entry for the user that was greeted in the Object Map
        nameMap[enteredName] = 0;
    }0
    }
    ////////////////////CHECK TYPE OF LANGUAGE SELECTED AN GREET USER/////////////////
      //Check for checked radio button
      if(selectedLanguage === 'English'){
        return 'Hello,' + ' ' + name;
      }

      if(selectedLanguage === 'IsiXhosa'){
        return 'Molo,' + ' ' + name;
      }

      if (selectedLanguage === 'Afrikaans') {
        return 'Goeie Dag,' + ' ' + name;
      }
  }
  ////////////////////////END TO CHECK IF THE USER EXIST////////////////////////////
  ////////////////////////Add a function for clearing local storage////////////
  var clearStorage = function(setStorage){

  }
  var getEnteredName = function(){
    return Object.keys(nameMap).length;
  }
  var map = function(){
    return nameMap;
  }

  var resetData = function (){
    return nameMap = {}
  }
  return {
    setEnteredName,
    getEnteredName,
    resetData,
    map
  }
}
