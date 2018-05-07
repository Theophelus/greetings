describe('greeting widget', function(){
  it('should return checked greeting if English is selected', function(){
    var newGreetings = greetings();
    newGreetings.setEnteredName('English',{'anele': 0});
    assert.equal(1, newGreetings.getEnteredName(1));
  });
  // it('should return checked greeting if isiXhosa is selected', function(){
  //   var newGreetings = greetings();
  //   newGreetings.setLanguage('IsiXhosa');
  //   assert.equal('Molo', newGreetings.getLanguage());
  // });
  // it('should return checked greeting if Afrikaans is selected', function(){
  //   var newGreetings = greetings();
  //   newGreetings.setLanguage('Afrikaans');
  //   assert.equal('Hallo', newGreetings.getLanguage());
  // });
  // it('should return number of names entered', function(){
  //   var newGreetings = greetings();
  //   newGreetings.setEnteredName();
  //   assert.equal(1, newGreetings.getEnteredName());
  // });
});
