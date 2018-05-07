function RadioButtonBill() {
  var callTotals =0;
  var smsTotals = 0;
  var billsTotal = 0 ;

  function radioBillTotal(billItemType) {
    if (billItemType === "call"){
      callTotals += 2.75
    }
    else if (billItemType === "sms"){
      smsTotals += 0.75;
    }
    billsTotal = callTotals +  smsTotals;
  }

  function returnsCall() {
    return  callTotals.toFixed(2);
  }

  function returnsSms(){
    return smsTotals.toFixed(2);
  }

  function returnsTotal(){
    return billsTotal.toFixed(2);
  }

  return {
    radioFunc   :radioBillTotal,
    calls       :returnsCall,
    smses       :returnsSms,
    costTotal   :billsTotal,
    actualTotal :  returnsTotal

  }

}
