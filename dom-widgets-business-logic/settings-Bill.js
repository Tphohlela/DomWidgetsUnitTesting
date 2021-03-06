function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel =0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost;
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost(){
        return theSmsCost;
    }
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }

    function makeCall(){
        if(!hasReachedCriticalLevel()){
        callCostTotal += theCallCost
        }
    }
    function makeSms(){
        if(!hasReachedCriticalLevel()){

        smsCostTotal += theSmsCost
        }
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }


    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel()){
            return "critical"
        }
        if(getTotalCost() >= getWarningLevel()){
            return "warning"
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
        makeCall,
        makeSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName,
        hasReachedCriticalLevel,
    
    }
}