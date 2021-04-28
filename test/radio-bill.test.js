describe('Radio Bill factory function', function () {

    describe('set values', function () {
        it('should be able to set call value', function () {
            let billRadio = radioBill();

            billRadio.setCallCost(2.75);
            assert.equal(2.75, billRadio.getCallCost());


        });

        it('should be able to set sms value', function () {
            let billRadio = radioBill();

            billRadio.setSmsCost(0.75);
            assert.equal(0.75, billRadio.getSmsCost());


        });

        it('should be able to set both the sms and call cost', function () {
            let billRadio = radioBill();

            billRadio.setCallCost(2.75);
            billRadio.setSmsCost(0.75);

            assert.equal(2.75, billRadio.getCallCost());
            assert.equal(0.75, billRadio.getSmsCost());


        });


        it('should be able to set the warning level', function () {
            let billRadio = radioBill();

            billRadio.setWarningLevel(30);
            assert.equal(30, billRadio.getWarningLevel());


        });


        it('should be able to set the critical level', function () {
            let billRadio = radioBill();

            billRadio.setCriticalLevel(50);
            assert.equal(50, billRadio.getCriticalLevel());


        });

    });

    describe('use values', function () {
        it("should be able to calculate the call cost for 2 calls at 2.75 each", function () {

            let billRadio = radioBill();
            billRadio.setCallCost(2.75);
            billRadio.setSmsCost(0.75);

            billRadio.makeCall2();
            billRadio.makeCall2();


            assert.equal(5.50, billRadio.getTotalCost2());
            assert.equal(5.50, billRadio.getTotalCallCost2());
            assert.equal(0.00, billRadio.getTotalSmsCost2());
        });

        it("should be able to calculate the sms cost for 3 smses at 0.75 each", function () {

            let billRadio2 = radioBill();
            billRadio2.setCallCost(2.75);
            billRadio2.setSmsCost(0.75);

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();


            assert.equal(2.25, billRadio2.getTotalCost2());
            assert.equal(0.00, billRadio2.getTotalCallCost2());
            assert.equal(2.25, billRadio2.getTotalSmsCost2());
        });

        it("should be able to calculate total of the sms cost for 3 smses at 0.75 each and call cost for 2 calls ", function () {

            let billRadio2 = radioBill();
            billRadio2.setCallCost(2.75);
            billRadio2.setSmsCost(0.75);

            billRadio2.makeSms2();
            billRadio2.makeSms2();
            billRadio2.makeSms2();

            billRadio2.makeCall2();
            billRadio2.makeCall2();


            assert.equal(7.75, billRadio2.getTotalCost2());
            assert.equal(5.50, billRadio2.getTotalCallCost2());
            assert.equal(2.25, billRadio2.getTotalSmsCost2());
        });


    });

    describe('testing warning level and critical level', function () {

        it("should return a class name of 'warning' if warning level is reached", function () {
            let billRadio2 = radioBill();

            billRadio2.setSmsCost(15);
            billRadio2.setCallCost(20);
            billRadio2.setWarningLevel(30);
            billRadio2.setCriticalLevel(50);

            billRadio2.makeSms2();
            billRadio2.makeCall2();



            assert.equal("warning", billRadio2.colorRadio());
        });

        it("should return a class name of 'danger' if warning level is reached", function () {
            let billRadio2 = radioBill();

            billRadio2.setSmsCost(30);
            billRadio2.setCallCost(20);
            billRadio2.setWarningLevel(30);
            billRadio2.setCriticalLevel(50);

            billRadio2.makeSms2();
            billRadio2.makeCall2();



            assert.equal("danger", billRadio2.colorRadio());
        });
    });

});