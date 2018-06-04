function BillSettingsUpdates() {
  var callCost = 0;
  var smsCost = 0;
  var warningLevel = 0;
  var criticalLevel = 0;
  // create a variables that will keep track of all three totals.
  var callsTotals = 0;
  var smsesTotal = 0;
  var totalTwoSetting = 0

  function setCallCost(vale) {
    if (vale != "") {
        callCost = parseFloat(vale);
     }
   }

   function getCostCall(){
     return callCost;
   }

  function setCostSms(vale){
    if (vale != "")
    smsCost = parseFloat(vale);
  }

  function getCostSms(){
    return smsCost;
  }
  function setWarningLevel(vale) {
      warningLevel =parseFloat(vale)
  }
  function getWarningLevel() {
    return warningLevel;
  }
  function setCriticalLevel(vale){
    criticalLevel = parseFloat(vale);
  }
  function getCriticalLevel() {
    return criticalLevel;
  }

  function billSettings(billItemTypeWithSettings) {

    if (totalTwoSetting >= criticalLevel) {

    } else {
      if (billItemTypeWithSettings === "call") {
        callsTotals += callCost
        console.log(callsTotals)
      } else if (billItemTypeWithSettings === "sms") {
        smsesTotal += smsCost;
      }
    }

  }

  function callValue() {
    return callsTotals.toFixed(2);
  }

  function smsValue() {
    return smsesTotal.toFixed(2);
  }

  function returnTotal() {
    totalTwoSetting = smsesTotal + callsTotals;
    return totalTwoSetting.toFixed(2);
  }

  return {
    calls: callValue,
    smses: smsValue,
    allTotal    : returnTotal,
    setCritical : setCriticalLevel,
    setWarning  :setWarningLevel,
    warning     : getWarningLevel,
    critical     : getCriticalLevel,
    billSetting: billSettings,
    setSmsCost  : setCostSms,
    getSMSCost  : getCostSms,
    setCAllCost : setCallCost,
    getCallCost  : getCostCall

  }
}

// get a reference to the sms or call radio buttons
