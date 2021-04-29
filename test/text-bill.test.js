describe('Testing Text input bill factory function ', function(){
    it('call cost should be set to 2.75', function(){
       let billText = textBill();

       billText.setCallCost3();
       assert.equal(2.75, billText.getCallCost3());

    });

    it('sms cost should be set to 0.75', function(){
        let billText = textBill();
 
        billText.setSmsCost3();
        assert.equal(0.75, billText.getSmsCost3());
 
     });

        it("should be able to calculate the call cost for 4 calls at 2.75 each", function () {

            let billText = textBill();
            billText.setCallCost3();
            billText.setSmsCost3();

            billText.makeCall3();
            billText.makeCall3();
            billText.makeCall3();
            billText.makeCall3();

            assert.equal(11, billText.getCallTotal3());
        });

        it("should be able to calculate the sms cost for 5 smses at 0.75 each", function () {

            let billText = textBill();
            billText.setCallCost3();
            billText.setSmsCost3();

            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();

            assert.equal(3.75, billText.getSmsTotal3());
        });

        it("should be able to calculate the total cost of 5 smses at 0.75 each and 4 calls at 2.75 each", function () {

            let billText = textBill();
            billText.setCallCost3();
            billText.setSmsCost3();

            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();
            billText.makeSms3();

            billText.makeCall3();
            billText.makeCall3();
            billText.makeCall3();
            billText.makeCall3();


            

            assert.equal(14.75, billText.getTotal3());
        });

        describe('testing warning level and critical level', function () {

            it("should return a class name of 'warning' if total cost is equal to or greater than 30", function () {
                let billText = textBill();
                
                billText.setSmsCost3();
                billText.setCallCost3();
    
                billText.setWarningLevel3();
                billText.setCriticalLevel3();
    
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();

                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();

    
    
    
                assert.equal("warning", billText.colorTextBill());
            });
        
    
            it("should return a class name of 'danger' if total cost is equal to or greater than 50", function () {
                let billText = textBill();
    
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();
                billText.makeSms3();

                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();

                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();

                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
                billText.makeCall3();
    
    
                assert.equal("danger", billText.colorTextBill());
            });
        });

     
    

});