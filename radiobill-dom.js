document.addEventListener('DOMContentLoaded', function() {

  var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
  var radioBillAddBtn	 = document.querySelector(".radioBillAddBtn	");
  var callTotalTwo = document.querySelector(".callTotalTwo");
  var smsTotalTwo = document.querySelector(".smsTotalTwo");
  var totalTwo = document.querySelector(".totalTwo");

  var radioButtonBill = RadioButtonBill();

  radioBillAddBtn.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }
    //get set checked values from associated checked radio buttons
    radioButtonBill.radioFunc(billItemType);
    var Tcalls = radioButtonBill.calls();
    var Tsmses = radioButtonBill.smses();
    var Gtotal = radioButtonBill.actualTotal();
    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = Tcalls;
    smsTotalTwo.innerHTML =Tsmses;

    totalTwo.innerHTML = Gtotal;

    if (Gtotal >= 50){
      // adding the danger class will make the text red
      totalTwo.classList.add("danger");
    }
    else if (Gtotal >= 30){
      totalTwo.classList.add("warning");
    }
  });
});
