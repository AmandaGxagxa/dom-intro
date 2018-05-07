document.addEventListener("DOMContentLoaded" , function() {
  // get a reference to the sms or call radio buttons
  var radioBtnSetting = document.querySelector(".billItemTypeWithSettings")
  var smsFieldSettings = document.querySelector(".smsTotalSettings")
  var callFieldSettings= document.querySelector(".callTotalSettings")
  var totalFieldSettings = document.querySelector(".totalSettings")
  var callCostsSettings = document.querySelector(".callCostSetting")
  var smsCostsSettings = document.querySelector(".smsCostSetting")
  var warningLevelSettings = document.querySelector(".warningLevelSetting")
  var criticalLevelSettings = document.querySelector(".criticalLevelSetting")
  var addBtnSettings = document.querySelector(".addBtnSettings")
  var updateSettingsBtn = document.querySelector(".updateSettings")

  var billSettingsUpdates = BillSettingsUpdates();

  updateSettingsBtn.addEventListener('click', function() {
        billSettingsUpdates.setSmsCost(smsCostsSettings.value);
        console.log(billSettingsUpdates.getSMSCost());
        billSettingsUpdates.setCAllCost(callCostsSettings.value);
          console.log(billSettingsUpdates.getCallCost());
        billSettingsUpdates.setWarning(warningLevelSettings.value);
          console.log(billSettingsUpdates.warning());
        billSettingsUpdates.setCritical(criticalLevelSettings.value);

        if (ActualT >= billSettingsUpdates.warning()){
            totalFieldSettings.style.color = "orange";
            totalFieldSettings.style.fontWeight = "bold";
        }

        if (ActualT >= billSettingsUpdates.critical()){
            // adding the danger class will make the text red
            totalFieldSettings.style.color = "red";
            totalFieldSettings.style.fontWeight = "bold";

        }

        else if(ActualT < billSettingsUpdates.warning()){
           totalFieldSettings.style.color = "black";
           totalFieldSettings.style.fontWeight = "bold";


         }
  });
  //add an event listener for when the add button is pressed
  addBtnSettings.addEventListener('click', function() {
  var checkedRadioBtns = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtns){
  var billItemTypeWithSettings = checkedRadioBtns.value
    }
    billSettingsUpdates.billSetting(billItemTypeWithSettings);

    var cTotals = billSettingsUpdates.calls();
    var sTotals = billSettingsUpdates.smses()
    var ActualT = billSettingsUpdates.allTotal();
console.log(cTotals)
  callFieldSettings.innerHTML = cTotals;
  smsFieldSettings.innerHTML = sTotals;
  totalFieldSettings.innerHTML = ActualT;

  if (ActualT >= billSettingsUpdates.warning()){
      totalFieldSettings.style.color = "orange";
      totalFieldSettings.style.fontWeight = "bold";
  }

  if (ActualT >= billSettingsUpdates.critical()){
      // adding the danger class will make the text red
      totalFieldSettings.style.color = "red";
      totalFieldSettings.style.fontWeight = "bold";

  }

  else if(ActualT < billSettingsUpdates.warning()){
     totalFieldSettings.style.color = "black";
     totalFieldSettings.style.fontWeight = "bold";


   }
    // if (ActualT >= billSettingsUpdates.critical()){
    //     totalFieldSettings.classList.add("danger");
    // }else if (ActualT >= billSettingsUpdates.warning()){
    //     totalFieldSettings.classList.add("warning");
    // }

  });

});
