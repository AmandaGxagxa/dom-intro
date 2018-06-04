document.addEventListener('DOMContentLoaded', function() {

  var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
  var radioBillAddBtn	 = document.querySelector(".radioBillAddBtn	");
  //var callTotalTwo = document.querySelector(".callTotalTwo");
  //var smsTotalTwo = document.querySelector(".smsTotalTwo");
  //var totalTwo = document.querySelector(".totalTwo");

var getRadioTemplate = document.querySelector('.textBillTemplate').innerHTML
var compileRadioTemplate = Handlebars.compile(getRadioTemplate)
var insertMyDataAt = document.querySelector('.radioData')
  var radioButtonBill = RadioButtonBill();

  function radioBillTemplateData(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }

    //var styleColor = 'red';
    //add logic to ensure the styleColor is correct
    // if(style >20 && styleColor <30){
    //   styleColor.style.color = "orange";
    //   styleColor.style.fontWeight = "bold";
    // }
    var actualTotal= radioButtonBill.radioFunc(billItemType);
    var data = {
      callSum:radioButtonBill.calls(),
      smsSum: radioButtonBill.smses(),
      totalSum:radioButtonBill.actualTotal(),
      //style : styleColor
    }
   insertMyDataAt.innerHTML = compileRadioTemplate(data)
  }

  radioBillAddBtn.addEventListener('click', function(){
radioBillTemplateData();

  });
  window.addEventListener('load', function(){
  radioBillTemplateData()
});


Handlebars.registerHelper('style', function(totalGrand){
  totalGrand = radioButtonBill.actualTotal();

  if(totalGrand > 20 && totalGrand < 30){
    return "warning";
  }
  if (totalGrand > 30){
    return "danger";
  }
});
});
