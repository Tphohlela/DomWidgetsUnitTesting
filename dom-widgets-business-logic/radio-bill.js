function radioBill(){
    var theCallCost2 = 0;
    var theSmsCost2 = 0;
    var warningLevel2 = 0;
    var criticalLevel2 = 0;
    var callCostTotal2 = 0;
    var smsCostTotal2 = 0;
    
    
    function setCallCost(callCost2){
        theCallCost2 = callCost2;
    }

        function getCallCost(){
            return theCallCost2;

        }
        function setSmsCost(smsCost2){
            theSmsCost2 = smsCost2;
        }
    

        function getSmsCost(){
            return theSmsCost2;
        }

       
        function setWarningLevel(warningLevel){
            warningLevel2 = warningLevel ;
        }

        function getWarningLevel(){
            return warningLevel2;
        }

        function setCriticalLevel(criticalLevel){
            criticalLevel2 = criticalLevel;
        }

        function getCriticalLevel(){
            return criticalLevel2;
        }

        function makeCall2(){
            
            callCostTotal2 += theCallCost2
            
        }
        function makeSms2(){
            
    
            smsCostTotal2 += theSmsCost2
            
        }

        function getTotalCost2(){
            return callCostTotal2  + smsCostTotal2;
        }


    function getTotalCallCost2(){
        return callCostTotal2;
    }

    function getTotalSmsCost2(){
        return smsCostTotal2;
    }

        function colorRadio(){
            if(getTotalCost2() >= getCriticalLevel()){
                return "danger";
            }

            if(getTotalCost2() >= getWarningLevel()){
                return "warning";
            }
           
        }
    




    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall2,
        makeSms2,
        getTotalCost2,
        getTotalCallCost2,
        getTotalSmsCost2,
        colorRadio,

       
    }
}