function textBill(){
    var theCallCost3 = 0;
    var theSmsCost3 = 0;
    var callCostTotal3 = 0;
    var smsCostTotal3 = 0;
    var warningLevel3 = 0;
    var criticalLevel3 = 0;


    function setCallCost3(){
        theCallCost3 = 2.75;
    }

    function getCallCost3(){
        return theCallCost3;
    }

    function setSmsCost3(){
        theSmsCost3 = 0.75;
    }

    function getSmsCost3(){
        return theSmsCost3;
    }

    function makeCall3(){
            
        callCostTotal3 += theCallCost3
        
    }
    function makeSms3(){
        

        smsCostTotal3 += theSmsCost3
        
    }
    function getTotal3(){

        return smsCostTotal3 + callCostTotal3;
    }

    function getCallTotal3(){
        return callCostTotal3;

    }

    function getSmsTotal3(){
        return smsCostTotal3;
    }

    function setWarningLevel3(){
        warningLevel3 = 30 ;
    }
    function getWarningLevel3(){
        return warningLevel3;
    }


    function setCriticalLevel3(){
        criticalLevel3 = 50;
    }
    function getCriticalLevel3(){
        return criticalLevel3;
    }

    function colorTextBill(){
        if(getTotal3() >= getCriticalLevel3()){
            return "danger";
        }

        else if(getTotal3() >= getWarningLevel3()){
            return "warning";
        }
       
    }
    



    return{
        setCallCost3,
        getCallCost3,
        setSmsCost3,
        getSmsCost3,
        getCallTotal3,
       getSmsTotal3,
        makeSms3,
        makeCall3,
        setWarningLevel3,
        setCriticalLevel3,
        colorTextBill,
        getTotal3,
        getCriticalLevel3,
        getWarningLevel3,

    }
}