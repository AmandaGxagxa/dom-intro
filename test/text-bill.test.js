
describe("The text bill function", function(){

  it("should be able to give the cost of the call.", function(){
    var textbill1 = TextBillTotalFactory();
    textbill1.billTotal("call");

    assert.equal(2.75, textbill1.callCost());

      });
      it("should be able to give the price of the sms.", function(){
        var textbill1 = TextBillTotalFactory();
        textbill1.billTotal("sms");
        // textbill1.billTotal("data");
        assert.equal(0, textbill1.callCost());
        assert.equal(0.75, textbill1.smsCost());

      });
      it("should be able to give the sum of calls and sms bill.", function(){
        var textbill3 = TextBillTotalFactory();
        textbill3.billTotal("sms");
        textbill3.billTotal("call");

        assert.equal(textbill3.grandTotal(), 3.50);

      });

})
