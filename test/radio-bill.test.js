describe("The radio button bill function", function(){

  it("should be able to give the cost of the call.", function(){
    var radioButtonBill = RadioButtonBill();
    radioButtonBill.radioFunc("call");

    assert.equal(2.75, radioButtonBill.calls());

      });
      it("should be able to give the price of the sms.", function(){
        var radioBill = RadioButtonBill();
        radioBill.radioFunc("sms");
        // textbill1.billTotal("data");
        assert.equal(0, radioBill.calls());
        assert.equal(0.75, radioBill.smses());

      });
      it("should be able to give the sum of calls and sms bill.", function(){
        var radiobill2 = RadioButtonBill();
        radiobill2.radioFunc("sms");
        radiobill2.radioFunc("call");
        radiobill2.radioFunc("call");

        assert.equal(radiobill2.actualTotal(), 6.25);

      });

})
