document.addEventListener('DOMContentLoaded', function() {

  var billTypeText = document.querySelector(".billTypeText");
  //get a reference to the add button
  var addToBillBtn	 = document.querySelector(".addToBillBtn");

  //update the totals that is displayed on the screen.

  //set-up handlebars
  var getMyTemplate = document.querySelector('.textBillTemplate').innerHTML
  var compileMyTemplate = Handlebars.compile(getMyTemplate)
  var insertMyDataAt = document.querySelector('.insertData')
  var textBillTotalFactory  =  TextBillTotalFactory();


function textBillTemplateData(){
  var billString = billTypeText.value;
  var totalGrand = textBillTotalFactory.billTotal(billString);
  var data = {
    callSum:textBillTotalFactory.callCost(),
    smsSum: textBillTotalFactory.smsCost(),
    totalSum:textBillTotalFactory.grandTotal(),
  }
 insertMyDataAt.innerHTML = compileMyTemplate(data)

}
// Handlebars.registerHelper("studyStatus", function(passingYear) {
//    if(totalSumClass > 20 && totalSumClass < 30) {
//       totalSumClass:classList.toggle("warning")
//    } else {
//       return "not passed";
//    }
// })
  addToBillBtn.addEventListener("click" , function() {
    textBillTemplateData()

  })
  Handlebars.registerHelper('style', function(totalGrand){
    totalGrand = textBillTotalFactory.grandTotal();

    if(totalGrand > 20 && totalGrand < 30){
      return "warning";
    }
    if (totalGrand > 30){
      return "danger";
    }
  });
  window.addEventListener('load', function(){
  textBillTemplateData()
  })
});
