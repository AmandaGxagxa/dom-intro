//get a reference to the calculate button

//Logic function
function calculateBill(billString){
  console.log(billString)
  var billItem = billString.split(",");
  var billTotal= 0;
  for (var i = 0 ; i < billItem.length ; i++){
    var billItems = billItem[i].trim();
    if (billItems === "call"){
        billTotal += 2.75;
    }
    else if (billItems === "sms"){
        billTotal += 0.75;
      }

  }
return billTotal.toFixed(2);
}

  var calculateBtnElement = document.querySelector(".calculateBtn");
  var billTotalElement = document.querySelector(".billTotal");
  var errorString = document.querySelector(".error")
  var billStringElement = document.querySelector(".billString");

  calculateBtnElement.addEventListener('click', function(){
  var billString = billStringElement.value;
  //calling back the calculateBill function from the logic
  var returnBillString = calculateBill(billString)

  billTotalElement.innerHTML = returnBillString;

   if(returnBillString > 20 && returnBillString < 30){
     billTotalElement.classList.add("warning");
   }else if (returnBillString > 30){
    billTotalElement.classList.add("danger");
  }
  if (returnBillString < 30) {
    billTotalElement.classList.remove("danger");
    }

  if(returnBillString < 20){
      billTotalElement.classList.remove("warning");
      }
});
