describe('The calculateBill function', function(){

  it('should give the total cost of the call', function(){

      assert.equal(calculateBill("call"),2.75);
  });

  it('should give the cost of the  sms', function(){
      assert.equal(calculateBill("sms"),0.75);
  });

  it('the total cost of the sms and call when they are combined', function(){

        assert.equal(calculateBill("call, sms"),3.50);
    });

});
