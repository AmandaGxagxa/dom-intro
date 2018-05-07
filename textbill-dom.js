document.addEventListener('DOMContentLoaded', function() {

  var billTypeText = document.querySelector(".billTypeText");
  //get a reference to the add button
  var addToBillBtn	 = document.querySelector(".addToBillBtn");
  var callsTotalElem  = document.querySelector(".callTotalOne");
  var smsTotalElem	 = document.querySelector(".smsTotalOne");
  var totalCostElem	 = document.querySelector(".totalOne");
  //update the totals that is displayed on the screen.
  var textBillTotalFactory  =  TextBillTotalFactory();


  addToBillBtn.addEventListener("click" , function() {
    var billString = billTypeText.value;
    var totalGrand = textBillTotalFactory.billTotal(billString);
    var call = textBillTotalFactory.callCost();
    var sms  = textBillTotalFactory.smsCost();
    console.log(call)
  var totalCosts = textBillTotalFactory.grandTotal();
    console.log(totalCosts)

  callsTotalElem.innerHTML = call;
  smsTotalElem.innerHTML = sms;
  totalCostElem.innerHTML = totalCosts;
  if (totalCosts >= 50){
      // adding the danger class will make the text red
      totalCostElem.classList.add("danger");
  }
  else if (totalCosts >= 30){
      totalCostElem.classList.add("warning");
  }
  })
});
