describe('Settings Bill factory function ', function(){
    describe('set values', function(){
    it('should be able to set the call cost', function(){
       let settingsBill = BillWithSettings();
       
       settingsBill.setCallCost(1.85);
       assert.equal(1.85, settingsBill.getCallCost());

       let settingsBill2 = BillWithSettings();
       
       settingsBill2.setCallCost(2.75);
       assert.equal(2.75, settingsBill2.getCallCost());
    });
    
    it('should be able to set the sms cost', function(){
        let settingsBill = BillWithSettings();
        
        settingsBill.setSmsCost(1.50);
        assert.equal(1.50, settingsBill.getSmsCost());
 
        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
     });

     it('should be able to set both the sms and call cost', function(){
        let settingsBill = BillWithSettings();
        
        settingsBill.setCallCost(1.50);
        settingsBill.setSmsCost(0.75);

        assert.equal(1.50, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setCallCost(2.50);
        settingsBill2.setSmsCost(1.75);
        
        assert.equal(2.50, settingsBill2.getCallCost());
        assert.equal(1.75, settingsBill2.getSmsCost());
     });
     

     it('should be able to set the warning level', function(){
        let settingsBill = BillWithSettings();
        
        settingsBill.setWarningLevel(10);
        assert.equal(10, settingsBill.getWarningLevel());
 
        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setWarningLevel(20);
        assert.equal(20, settingsBill2.getWarningLevel());
     });

     it('should be able to set the critical level', function(){
        let settingsBill = BillWithSettings();
        
        settingsBill.setCriticalLevel(10);
        assert.equal(10, settingsBill.getCriticalLevel());
 
        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setCriticalLevel(20);
        assert.equal(20, settingsBill2.getCriticalLevel());
     });

     it('should be able to set both the warning level and critical level', function(){
        let settingsBill = BillWithSettings();
        
        settingsBill.setWarningLevel(30);
        settingsBill.setCriticalLevel(35);

        assert.equal(30, settingsBill.getWarningLevel());
        assert.equal(35, settingsBill.getCriticalLevel());

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setWarningLevel(15);
        settingsBill2.setCriticalLevel(20);
        
        assert.equal(15, settingsBill2.getWarningLevel());
        assert.equal(20, settingsBill2.getCriticalLevel());
     });
    });
     


describe('use values', function(){
    it("should be able to use the call cost for 2 calls at 1.35 each",function(){
        
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.75);

        settingsBill.makeCall();
        settingsBill.makeCall();
       

        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it("should be able to use the sms cost for 3 sms' at 0.50 each",function(){
        
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setSmsCost(0.50);
        settingsBill.setCallCost(1.00);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();
       

        assert.equal(1.50, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.50, settingsBill.getTotalSmsCost());
    });

    it("should be able to use both the sms cost and the call cost for 3 sms' at 0.50 each and 2 calls at 1.00 each",function(){
        
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setSmsCost(0.50);
        settingsBill.setCallCost(1.00);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();

        settingsBill.makeCall();
        settingsBill.makeCall();
       

        assert.equal(3.50, settingsBill.getTotalCost());
        assert.equal(2.00, settingsBill.getTotalCallCost());
        assert.equal(1.50, settingsBill.getTotalSmsCost());
    });

});  

describe("Testing warning level and critical level", function(){
    it("should return a class name of 'warning' if warning level is reached",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(1.50);
        settingsBill.setCallCost(2.00);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();

        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("warning", settingsBill.totalClassName());
    });

    it("should return a class name of 'critical' if critical level is reached",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(1.50);
        settingsBill.setCallCost(2.00);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName());
    });

    it("it should stop the Total call cost from increasing when the critical level has been reached",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(1.50);
        settingsBill.setCallCost(2.00);
        settingsBill.setCriticalLevel(11);
        settingsBill.setWarningLevel(8);
    

        settingsBill.makeSms();
        settingsBill.makeSms();
       

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
      


        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(11, settingsBill.getTotalCost());

        
    });


});
});