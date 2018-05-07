function TextBillTotalFactory(){
  var callsTotal =0;
  var smsTotal = 0;
  var totalBill = 0 ;
  function textbillTotal(billTypeEntered) {
      if (billTypeEntered === "call"){
          callsTotal= callsTotal + 2.75;
      }
    else if (billTypeEntered === "sms"){
        smsTotal=smsTotal + 0.75;
      }

    }


  function returnCall() {
    return callsTotal.toFixed(2);;
  }

  function returnSms(){
    return smsTotal.toFixed(2);
  }

  function returnTotal(){
      totalBill  = callsTotal + smsTotal;
      return totalBill.toFixed(2);
  }
    return {
      callCost    :returnCall,
      smsCost     :returnSms,
      totalCost   :totalBill,
      billTotal   :textbillTotal,
      grandTotal  :returnTotal

      }
}
