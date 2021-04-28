    function calculateBtnClicked(){
        
        var billString = billStringField.value;
        
        var billItems = billString.split(",");
        
        var billTotal = 0;
        
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
        
       
        var roundedBillTotal = billTotal.toFixed(2);
        theBillTotal.innerHTML = roundedBillTotal;
        if (roundedBillTotal >= 30){
            theBillTotal.classList.remove("warning");
            theBillTotal.classList.add("danger");
        }
    
        else if (roundedBillTotal >= 20){
            
            theBillTotal.classList.remove("danger");
            theBillTotal.classList.add("warning");
        }
        else{
            theBillTotal.classList.remove("danger");
            theBillTotal.classList.remove("warning");
    
        }
      }  