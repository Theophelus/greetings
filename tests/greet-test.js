describe('greeting widget', function(){
  it('should return checked greeting if English is selected', function(){
    var newGreetings = greetings();
    //newGreetings.setEnteredName('English','anele');
    assert.equal(newGreetings.setEnteredName('English','anele'),'Hello, anele');
  });
});
