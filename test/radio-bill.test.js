describe('Testing Radio Bill factory function', function () {

  
        it('call cost should be set to 2.75', function () {
            let billRadio = radioBill();

            billRadio.setCallCost();
            assert.equal(2.75, billRadio.getCallCost());


        });

        it('sms cost should be set to 0.75', function () {
            let billRadio = radioBill();

            billRadio.setSmsCost();
            assert.equal(0.75, billRadio.getSmsCost());


        });

        it('call cost should be set to 2.75 and sms cost should be set to 0.75', function () {
            let billRadio = radioBill();

            billRadio.setCallCost();
            billRadio.setSmsCost();

            assert.equal(2.75, billRadio.getCallCost());
            assert.equal(0.75, billRadio.getSmsCost());


        });


        it('warning level should be set to 30', function () {
            let billRadio = radioBill();

            billRadio.setWarningLevel();
            assert.equal(30, billRadio.getWarningLevel());


        });


        it('critical level should be set to 50', function () {
            let billRadio = radioBill();

            billRadio.setCriticalLevel();
            assert.equal(50, billRadio.getCriticalLevel());


        });

        it("should be able to calculate the call cost for 2 calls at 2.75 each", function () {

            let billRadio = radioBill();
            billRadio.setCallCost();
            billRadio.setSmsCost();

            billRadio.makeCall2();
            billRadio.makeCall2();


            assert.equal(5.50, billRadio.getTotalCost2());
            assert.equal(5.50, billRadio.getTotalCallCost2());
            assert.equal(0.00, billRadio.getTotalSmsCost2());
        });

        it("should be able to calculate the sms cost for 3 smses at 0.75 each", function () {

            let billRadio2 = radioBill();
            billRadio2.setCallCost();
            billRadio2.setSmsCost();

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();


            assert.equal(2.25, billRadio2.getTotalCost2());
            assert.equal(0.00, billRadio2.getTotalCallCost2());
            assert.equal(2.25, billRadio2.getTotalSmsCost2());
        });

        it("should be able to calculate total of the sms cost for 3 smses at 0.75 each and call cost for 2 calls ", function () {

            let billRadio2 = radioBill();
            billRadio2.setCallCost();
            billRadio2.setSmsCost();

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();

            billRadio2.makeCall2();
            billRadio2.makeCall2();


            assert.equal(7.75, billRadio2.getTotalCost2());
            assert.equal(5.50, billRadio2.getTotalCallCost2());
            assert.equal(2.25, billRadio2.getTotalSmsCost2());
        });




    describe('testing warning level and critical level', function () {

        it("should return a class name of 'warning' if warning level,which is over 50, is reached", function () {
            let billRadio2 = radioBill();
                
            billRadio2.setSmsCost();
            billRadio2.setCallCost();

            billRadio2.setWarningLevel();
            billRadio2.setCriticalLevel();

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();

            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();



            assert.equal("warning", billRadio2.colorRadio());
        });

        it("should return a class name of 'danger' if critical level,which is 50, is reached", function () {
            let billRadio2 = radioBill();

            billRadio2.setSmsCost();
            billRadio2.setCallCost();

            billRadio2.setWarningLevel();
            billRadio2.setCriticalLevel();

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();

            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();
            billRadio2.makeCall2();




            assert.equal("danger", billRadio2.colorRadio());
        });


});

});